import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import NoResultIcon from '../icons/NoResultIcon';
import SearchInput from '../components/SearchInput';
import RoundButton from '../components/RoundButton';
import PlusIcon from '../icons/PlusIcon';
import {Colors, FontFamily} from '../common/style';
import NewsCard from '../components/NewsCard';

const HomeScreen: FC = () => {
  const data = [
    {
      id: 1,
      title: 'kjhdfkjdf',
      imgeUrl:
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      message: 'lksdjlkdfjk',
      createdAt: 393948,
    },
    {
      id: 2,
      title: 'kjhdfkjdf',
      imgeUrl:
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      message: 'lksdjlkdfjk',
      createdAt: 393948,
    },
    {
      id: 3,
      title: 'kjhdfkjdf',
      imgeUrl:
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      message: 'lksdjlkdfjk',
      createdAt: 393948,
    },
    {
      id: 4,
      title: 'kjhdfkjdf',
      imgeUrl:
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      message: 'lksdjlkdfjk',
      createdAt: 393948,
    },
    {
      id: 5,
      title: 'kjhdfkjdf',
      imgeUrl:
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      message: 'lksdjlkdfjk',
      createdAt: 393948,
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
        }}>
        <SearchInput />
        <RoundButton icon={<PlusIcon />} />
      </View>
      <View style={{marginTop: 40}} />
      <FlatList
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={({item}) => <NewsCard item={item} />}
      />

      {/* <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <NoResultIcon />
        <Text
          style={{
            fontFamily: FontFamily.roboto_regular,
            color: Colors.grey,
            fontSize: 16,
          }}>
          No results found
        </Text>
      </View> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    // paddingHorizontal: 30,
  },
});
