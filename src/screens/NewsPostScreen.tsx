import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import ArrowIcon from '../icons/ArrowIcon';
import {Colors, FontFamily} from '../common/style';
import {RootRouteProps, RootStackParamList, Screen} from '../common/types';
import Header from '../components/Header';
import default_img from '../assets/images/default_img.png';
import {checkImage, formatTimestamp} from '../helpers/utils';

const NewsPostScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RootRouteProps<Screen.NewsPost>>();

  const [errorLoad, setErrorLoad] = useState<boolean>(false);

  const news = route.params.item;

  const formattedDate = formatTimestamp(news.createdAt);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleOnError = () => {
    setErrorLoad(true);
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />

      <View style={styles.container}>
        <Header title={news.title} icon={<ArrowIcon />} handler={handleBack} />

        <Image
          onError={handleOnError}
          style={
            checkImage(news.imgeUrl, errorLoad)
              ? styles.img
              : [styles.img, {backgroundColor: Colors.grey}]
          }
          resizeMode={checkImage(news.imgeUrl, errorLoad) ? 'cover' : 'contain'}
          source={
            checkImage(news.imgeUrl, errorLoad)
              ? {uri: `${news.imgeUrl}`}
              : default_img
          }
        />

        <ScrollView style={styles.textBox}>
          <Text style={styles.time}>{formattedDate}</Text>
          <Text style={styles.message}>{news.message}</Text>
        </ScrollView>
      </View>
    </>
  );
};

export default NewsPostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: Colors.white,
  },

  img: {
    marginTop: 20,
    height: '40%',
    width: '100%',
  },

  textBox: {
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: Colors.white,
    flex: 1,
    paddingHorizontal: 30,
  },

  time: {
    marginTop: 25,
    fontFamily: FontFamily.roboto_extralight,
    fontSize: 12,
    color: Colors.black,
  },

  message: {
    marginTop: 10,
    fontFamily: FontFamily.roboto_light,
    fontSize: 16,
    color: Colors.black,
    marginBottom: 50,
  },
});
