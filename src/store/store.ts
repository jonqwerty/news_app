import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {INewsItem} from '../common/types';

interface IZustandState {
  newsList: INewsItem[] | null;
  setNewsList: (item: INewsItem[]) => void;
}

export const useAppStore = create<IZustandState>()(
  devtools(
    persist(
      set => ({
        newsList: null,
        setNewsList: data => set(state => ({newsList: data})),
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
