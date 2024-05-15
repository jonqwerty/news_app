import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
      title: 'Discovery by scientists',
      imgeUrl:
        'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
      message:
        'Scientific research has uncovered a new mystery lurking in the depths of the ocean. \n As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms. \n Scientific research has uncovered a new mystery lurking in the depths of the ocean.',
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
  const handleAddNews = () => {};
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />

      <View style={styles.container}>
        <View
          style={{
            paddingHorizontal: 30,
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: 10,
          }}>
          <SearchInput />
          <RoundButton icon={<PlusIcon />} handler={handleAddNews} />
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
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    // paddingHorizontal: 30,
  },
});
