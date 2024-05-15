import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';

import {Colors} from '../common/style';
import {IRoundButtonProps} from '../common/types';

const RoundButton: FC<IRoundButtonProps> = ({icon, handler}) => {
  return (
    <TouchableOpacity onPress={handler} style={styles.container}>
      {icon}
    </TouchableOpacity>
  );
};

export default RoundButton;

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.grey_25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
