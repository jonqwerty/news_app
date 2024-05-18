import {StyleSheet, TextInput, View} from 'react-native';
import React, {FC} from 'react';

import DandruffIcon from '../icons/DandruffIcon';
import {Colors, FontFamily} from '../common/style';
import {ISearchInputProps} from '../common/types';

const SearchInput: FC<ISearchInputProps> = ({searchQuery, handleSearch}) => {
  return (
    <View style={styles.container}>
      <DandruffIcon />

      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder="Search"
        placeholderTextColor={Colors.grey}
        style={styles.input}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 48,
    paddingLeft: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: Colors.grey_25,
  },

  input: {
    marginLeft: 5,
    fontFamily: FontFamily.roboto_regular,
    color: Colors.black,
    fontSize: 16,
  },
});
