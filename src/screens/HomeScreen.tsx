import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import NoResultIcon from '../icons/NoResultIcon';
import SearchInput from '../components/SearchInput';
import RoundButton from '../components/RoundButton';
import PlusIcon from '../icons/PlusIcon';
import {Colors, FontFamily} from '../common/style';

const HomeScreen: FC = () => {
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
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 30, paddingHorizontal: 30},
});
