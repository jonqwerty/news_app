import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';

import {Colors} from '../common/style';

interface IRoundButtonProps {
  icon: React.ReactElement;
}

const RoundButton: FC<IRoundButtonProps> = ({icon}) => {
  return <View style={styles.container}>{icon}</View>;
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
