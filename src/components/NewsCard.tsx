import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {FC} from 'react';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {Colors, FontFamily, ScreenWidth} from '../common/style';
import {INewsCardProps, RootStackParamList, Screen} from '../common/types';

const NewsCard: FC<INewsCardProps> = ({item}) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlerPress = () => {
    navigation.navigate(Screen.NewsPost, {item: item});
  };

  return (
    <TouchableOpacity style={{alignItems: 'center'}} onPress={handlerPress}>
      <Shadow
        distance={10}
        startColor={Colors.grey_15}
        offset={[0, 10]}
        style={styles.container}>
        <Image
          style={{
            height: 195,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          resizeMode="cover"
          source={{uri: `${item.imgeUrl}`}}
        />

        <Text style={styles.title}>{item.title}</Text>
        <Text numberOfLines={1} style={styles.message}>
          {item.message}
        </Text>
        <Text style={styles.time}>{item.createdAt}</Text>
      </Shadow>
    </TouchableOpacity>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {
    width: ScreenWidth - 2 * 30,
    borderRadius: 10,
    marginBottom: 40,
    backgroundColor: Colors.white,
  },
  title: {
    marginTop: 17,
    marginLeft: 17,
    fontFamily: FontFamily.roboto_semibold,
    fontSize: 20,
    color: Colors.black,
  },
  message: {
    marginTop: 10,
    marginLeft: 17,
    fontFamily: FontFamily.roboto_light,
    fontSize: 16,
    color: Colors.black,
  },
  time: {
    marginTop: 5,
    marginLeft: 17,
    fontFamily: FontFamily.roboto_extralight,
    fontSize: 12,
    color: Colors.black,
    marginBottom: 17,
  },
});
