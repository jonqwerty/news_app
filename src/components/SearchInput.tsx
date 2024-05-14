import {StyleSheet, TextInput, View} from 'react-native';
import React, {FC} from 'react';
import DandruffIcon from '../icons/DandruffIcon';
import {Colors, FontFamily} from '../common/style';

const SearchInput: FC = () => {
  return (
    <View style={styles.container}>
      <DandruffIcon />

      <TextInput
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
    color: Colors.grey,
    fontSize: 16,
  },
});
