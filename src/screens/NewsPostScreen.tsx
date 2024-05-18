import {
  Image,
  Platform,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import ArrowIcon from '../icons/ArrowIcon';
import {Colors, FontFamily} from '../common/style';
import {RootRouteProps, RootStackParamList, Screen} from '../common/types';
import Header from '../components/Header';
import default_img from '../assets/images/default_img.png';
import {formatTimestamp} from '../helpers/utils';

const NewsPostScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RootRouteProps<Screen.NewsPost>>();

  const news = route.params.item;

  const formattedDate = formatTimestamp(news.createdAt);

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
        <Header title={news.title} icon={<ArrowIcon />} handler={handleBack} />

        <Image
          style={
            news.imgeUrl !== null
              ? styles.img
              : [styles.img, {backgroundColor: Colors.grey}]
          }
          resizeMode={news.imgeUrl !== null ? 'cover' : 'contain'}
          source={
            news.imgeUrl !== null ? {uri: `${news.imgeUrl}`} : default_img
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
