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
import React, {FC, useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ref, push} from 'firebase/database';
import {Controller, SubmitErrorHandler, useForm} from 'react-hook-form';
import {useKeyboard} from '@react-native-community/hooks';
import {zodResolver} from '@hookform/resolvers/zod';

import {db} from '../../firebase-config.js';
import {Colors, FontFamily} from '../common/style';
import ArrowIcon from '../icons/ArrowIcon';
import {
  FormInputs,
  RootStackParamList,
  formSchema,
  FormSchema,
} from '../common/types';
import Button from '../components/Button';
import Header from '../components/Header';

const CreatePostScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const keyboard = useKeyboard();

  const btnMarginBottom = useRef<number>(50);

  const methods = useForm<FormInputs>({
    resolver: zodResolver(formSchema),
    mode: 'onTouched',
    defaultValues: {
      title: '',
      imgeUrl: '',
      link: '',
      message: '',
    },
  });

  useEffect(() => {
    if (keyboard.keyboardShown) {
      btnMarginBottom.current = 100;
    }
    if (keyboard.keyboardHeight) {
      btnMarginBottom.current = 50;
    }
  }, [keyboard.keyboardShown]);

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

  const onError: SubmitErrorHandler<FormSchema> = (errors, e) => {};

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
              control={methods.control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                  <TextInput
                    placeholder="Title*"
                    placeholderTextColor={Colors.grey}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {error?.message && (
                    <Text style={styles.errorText}>{error?.message}</Text>
                  )}
                </>
              )}
              name="title"
            />

            <Controller
              control={methods.control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                  <TextInput
                    placeholder="Image url"
                    placeholderTextColor={Colors.grey}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {error?.message && (
                    <Text style={styles.errorText}>{error?.message}</Text>
                  )}
                </>
              )}
              name="imgeUrl"
            />

            <Controller
              control={methods.control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
                <>
                  <TextInput
                    placeholder="Link"
                    placeholderTextColor={Colors.grey}
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  {error?.message && (
                    <Text style={styles.errorText}>{error?.message}</Text>
                  )}
                </>
              )}
              name="link"
            />

            <Controller
              control={methods.control}
              render={({
                field: {onChange, onBlur, value},
                fieldState: {error},
              }) => (
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
                  {error?.message && (
                    <Text style={styles.errorText}>{error?.message}</Text>
                  )}
                </>
              )}
              name="message"
            />

            <View
              style={{
                marginTop: 'auto',
                marginBottom: btnMarginBottom.current,
              }}>
              <Button
                title={'Public'}
                color={
                  Object(methods.formState.errors).length === 0 ||
                  methods.formState.isValid
                    ? Colors.blue
                    : Colors.blue_50
                }
                handler={methods.handleSubmit(onSubmit, onError)}
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
    color: Colors.black,
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
