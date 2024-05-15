import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import RoundButton from './RoundButton';
import {Colors, FontFamily} from '../common/style';
import {IHeaderProps} from '../common/types';

const Header: FC<IHeaderProps> = ({title, icon, handler}) => {
  return (
    <View style={styles.container}>
      <RoundButton icon={icon} handler={handler} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    marginRight: 48,
    fontFamily: FontFamily.roboto_semibold,
    fontSize: 20,
    color: Colors.black,
  },
});
