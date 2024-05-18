import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ref, push} from 'firebase/database';
import {Controller, useForm} from 'react-hook-form';

import {db} from '../../firebase-config.js';
import {Colors, FontFamily} from '../common/style';
import ArrowIcon from '../icons/ArrowIcon';
import {FormInputs, RootStackParamList} from '../common/types';
import Button from '../components/Button';
import Header from '../components/Header';

const CreatePostScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm<FormInputs>({
    mode: 'onTouched',
    defaultValues: {
      title: '',
      imgeUrl: '',
      link: '',
      message: '',
    },
  });

  const onSubmit = (data: FormInputs) => {
    push(ref(db, '/news'), {
      ...data,
      createdAt: Date.now(),
    });
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />

      <View style={styles.container}>
        <Header title={'New post'} icon={<ArrowIcon />} handler={handleBack} />

        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ScrollView
            contentContainerStyle={styles.contentContainerStyle}
            showsVerticalScrollIndicator={false}
            style={{
              flex: 1,
              paddingHorizontal: 30,
              paddingTop: 20,
            }}>
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <TextInput
                    placeholder="Title*"
                    placeholderTextColor={Colors.grey}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.title?.message && (
                    <Text style={styles.errorText}>
                      {errors.title?.message}
                    </Text>
                  )}
                </>
              )}
              name="title"
              rules={{
                required: {
                  value: true,
                  message: 'Title is required',
                },
                validate: {},
              }}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <TextInput
                    placeholder="Image url"
                    placeholderTextColor={Colors.grey}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.imgeUrl?.message && (
                    <Text style={styles.errorText}>
                      {errors.imgeUrl?.message}
                    </Text>
                  )}
                </>
              )}
              name="imgeUrl"
              rules={{
                validate: {},
              }}
            />
            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <TextInput
                    placeholder="Link"
                    placeholderTextColor={Colors.grey}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.link?.message && (
                    <Text style={styles.errorText}>{errors.link?.message}</Text>
                  )}
                </>
              )}
              name="link"
              rules={{
                validate: {},
              }}
            />

            <Controller
              control={control}
              render={({field: {onChange, onBlur, value}}) => (
                <>
                  <TextInput
                    placeholder="Type  your message here..*"
                    placeholderTextColor={Colors.grey}
                    multiline
                    style={[
                      styles.input,
                      {height: 150, textAlignVertical: 'top'},
                    ]}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {errors.message?.message && (
                    <Text style={styles.errorText}>
                      {errors.message?.message}
                    </Text>
                  )}
                </>
              )}
              name="message"
              rules={{
                required: {
                  value: true,
                  message: 'Message is required',
                },
                validate: {},
              }}
            />

            <View style={{marginTop: 'auto', marginBottom: 50}}>
              <Button
                title={'Public'}
                color={
                  Object(errors).length === 0 || isValid
                    ? Colors.blue
                    : Colors.blue_50
                }
                handler={handleSubmit(onSubmit)}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },

  keyboardAvoidingView: {flex: 1},

  contentContainerStyle: {flexGrow: 1},

  input: {
    height: 60,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.grey_25,
    marginBottom: 30,

    fontFamily: FontFamily.roboto_regular,
    color: Colors.grey,
    fontSize: 17,
  },

  errorText: {
    position: 'relative',
    top: -25,
    fontFamily: FontFamily.roboto_regular,
    color: Colors.red,
    fontSize: 12,
  },
});
