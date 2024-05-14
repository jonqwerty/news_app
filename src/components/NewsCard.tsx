import {Image, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Colors, FontFamily} from '../common/style';

interface INewsCardProps {
  item: {
    id: number;
    title: string;
    imgeUrl: string;
    message: string;
    createdAt: number;
  };
}
const NewsCard: FC<INewsCardProps> = ({item}) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: 195,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        resizeMode="cover"
        source={{uri: `${item.imgeUrl}`}}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.createdAt}</Text>
    </View>
  );
};

export default NewsCard;

const styles = StyleSheet.create({
  container: {width: '100%', borderRadius: 10, marginBottom: 40},
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
  },
});
