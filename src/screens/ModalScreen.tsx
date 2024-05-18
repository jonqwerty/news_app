import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {RootRouteProps, RootStackParamList, Screen} from '../common/types';
import {Colors} from '../common/style';
import Button from '../components/Button';
import {ref, remove} from 'firebase/database';
import {db} from '../../firebase-config';

const ModalScreen: FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const route = useRoute<RootRouteProps<Screen.NewsPost>>();

  const newsId = route.params.item.id;

  const handleDelete = () => {
    remove(ref(db, `/news/${newsId}`));
    navigation.goBack();
  };

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.modalContent}>
        <View style={styles.line} />

        <Button
          title={'Delete'}
          color={Colors.red_light}
          handler={handleDelete}
        />

        <View style={{height: 16}} />

        <Button title={'Close'} color={Colors.blue} handler={handleBack} />
      </View>
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  line: {
    height: 5,
    width: 35,
    borderRadius: 10,
    marginTop: 12,
    marginBottom: 30,
    backgroundColor: Colors.grey,
  },

  modalContent: {
    width: '100%',
    marginTop: 'auto',
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
    paddingBottom: 30,
    alignItems: 'center',
  },
});
