import {create} from 'zustand';
import {createJSONStorage, devtools, persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {produce} from 'immer';
import {INewsItem} from '../common/types';

const data = [
  {
    id: 1,
    title: 'Discovery by scientists',
    imgeUrl:
      'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
    message:
      'Scientific research has uncovered a new mystery lurking in the depths of the ocean. \n As scientists delve deeper into the unexplored realms of the underwater world, they have stumbled upon a perplexing phenomenon that challenges our understanding of marine ecosystems. This latest discovery has ignited curiosity and raised questions about the intricate interplay between marine life and their environments.At the heart of this mystery lies an enigmatic species of bioluminescent jellyfish found thriving in the abyssal plains of the Pacific Ocean. Unlike their counterparts in shallower waters, these jellyfish exhibit unique luminescent patterns that seem to pulsate with an otherworldly glow. Initial observations suggest that these patterns may serve a crucial yet cryptic purpose, perhaps linked to communication, camouflage, or even defense mechanisms. \n Scientific research has uncovered a new mystery lurking in the depths of the ocean.',
    createdAt: 393948,
  },
  {
    id: 2,
    title: 'kjhdfkjdf',
    imgeUrl:
      'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
    message: 'lksdjlkdfjk',
    createdAt: 393948,
  },
  {
    id: 3,
    title: 'kjhdfkjdf',
    imgeUrl:
      'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
    message: 'lksdjlkdfjk',
    createdAt: 393948,
  },
  {
    id: 4,
    title: 'kjhdfkjdf',
    imgeUrl:
      'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
    message: 'lksdjlkdfjk',
    createdAt: 393948,
  },
  {
    id: 5,
    title: 'kjhdfkjdf',
    imgeUrl:
      'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg',
    message: 'lksdjlkdfjk',
    createdAt: 393948,
  },
];

interface IState {
  data: INewsItem[] | null;
}

export const useAppStore = create<IState>()(
  devtools(
    persist(
      set => ({
        data: null,
      }),
      {
        name: 'bear-storage',
        storage: createJSONStorage(() => AsyncStorage),
      },
    ),
  ),
);
