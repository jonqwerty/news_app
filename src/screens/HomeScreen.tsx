import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';

import NoResultIcon from '../icons/NoResultIcon';
import SearchInput from '../components/SearchInput';
import RoundButton from '../components/RoundButton';
import PlusIcon from '../icons/PlusIcon';
import {Colors, FontFamily} from '../common/style';
import NewsCard from '../components/NewsCard';
import {RootStackParamList, Screen} from '../common/types';
import {useAppStore} from '../store/store';

const HomeScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const data = useAppStore(state => state.data);

  const handleAddNews = () => {
    navigation.navigate(Screen.CreatePost, {});
  };
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

        {!data ? (
          <View
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
          </View>
        ) : null}
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    // paddingHorizontal: 30,
  },
});
