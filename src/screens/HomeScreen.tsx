import {
  FlatList,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {FC, useEffect, useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {onValue, ref} from 'firebase/database';

import NoResultIcon from '../icons/NoResultIcon';
import SearchInput from '../components/SearchInput';
import RoundButton from '../components/RoundButton';
import PlusIcon from '../icons/PlusIcon';
import {Colors, FontFamily, ScreenHeight} from '../common/style';
import NewsCard from '../components/NewsCard';
import {RootStackParamList, Screen} from '../common/types';
import {useAppStore} from '../store/store';
import {db} from '../../firebase-config';
import {convertFromObjectToArray} from '../helpers/utils';

const HomeScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const isFocused = useIsFocused();

  const newsList = useAppStore(state => state.newsList);
  const setNewsList = useAppStore(state => state.setNewsList);

  const [transparentColor, setTransparentColor] = React.useState(false);

  const handleAddNews = () => {
    navigation.navigate(Screen.CreatePost, {});
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', e => {
      const state = navigation.getState();
      const currentRoute = state.routes[state.index].name;
      const previousRoute = state.routes[state.index - 1]?.name;

      if (currentRoute === Screen.Modal && previousRoute === Screen.Home) {
        setTransparentColor(true);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  useEffect(() => {
    if (isFocused && transparentColor) {
      setTransparentColor(false);
    }
  }, [isFocused]);

  useEffect(() => {
    onValue(ref(db, '/news'), querySnapShot => {
      let data = querySnapShot.val() || {};
      console.log('####', convertFromObjectToArray(data));
      setNewsList(convertFromObjectToArray(data));
    });
  }, []);

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={Colors.black}
        barStyle={Platform.OS === 'ios' ? 'light-content' : 'default'}
      />
      <View style={styles.container}>
        {transparentColor ? (
          <View
            style={{
              position: 'absolute',
              width: '100%',
              height: ScreenHeight,
              backgroundColor: Colors.black_70,
              zIndex: 2,
            }}
          />
        ) : null}
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

        {!newsList ? (
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
        ) : (
          <>
            <View style={{marginTop: 40}} />
            <FlatList
              keyExtractor={item => item.id.toString()}
              showsVerticalScrollIndicator={false}
              data={newsList}
              renderItem={({item}) => <NewsCard item={item} />}
            />
          </>
        )}
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
