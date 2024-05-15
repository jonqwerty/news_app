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

import {Colors, FontFamily} from '../common/style';
import ArrowIcon from '../icons/ArrowIcon';
import {RootStackParamList} from '../common/types';
import Button from '../components/Button';
import Header from '../components/Header';

const CreatePostScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleBack = () => {
    navigation.goBack();
  };
  const handlePublic = () => {
    //  navigation.goBack();
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
            <TextInput
              placeholder="Title*"
              placeholderTextColor={Colors.grey}
              style={styles.input}
            />
            <TextInput
              placeholder="Image url"
              placeholderTextColor={Colors.grey}
              style={styles.input}
            />
            <TextInput
              placeholder="Link"
              placeholderTextColor={Colors.grey}
              style={styles.input}
            />
            <TextInput
              placeholder="Type  your message here..*"
              placeholderTextColor={Colors.grey}
              multiline
              style={[styles.input, {height: 150, textAlignVertical: 'top'}]}
            />

            <View style={{marginTop: 'auto', marginBottom: 50}}>
              <Button
                title={'Public'}
                color={Colors.blue}
                handler={handlePublic}
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
  keyboardAvoidingView: {flex: 1},
  contentContainerStyle: {flexGrow: 1},
  container: {
    flex: 1,
    paddingTop: 20,
  },

  input: {
    height: 60,
    paddingLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.grey_25,
    marginBottom: 25,

    fontFamily: FontFamily.roboto_regular,
    color: Colors.grey,
    fontSize: 17,
  },
});
