import {RouteProp} from '@react-navigation/native';

export interface ISearchInputProps {
  searchQuery: string;
  handleSearch: (text: string) => void;
}

export interface FormInputs {
  title: string;
  imgeUrl: string;
  link: string;
  message: string;
}

export interface IButtonProps {
  title: string;
  color: string;
  handler: () => void;
}

export interface IRoundButtonProps {
  icon: React.ReactElement;
  handler: () => void;
}

export interface IHeaderProps {
  title: string;
  icon: React.ReactElement;
  handler: () => void;
}
export interface INewsItem {
  id: string;
  title: string;
  imgeUrl: string | null;
  link: string | null;
  message: string;
  createdAt: number;
}

export interface INewsCardProps {
  item: INewsItem;
}

export enum Screen {
  Home = 'Home',
  NewsPost = 'NewsPost',
  CreatePost = 'CreatePost',
  Modal = 'Modal',
}

export type RootStackParamList = {
  Home: {};
  NewsPost: {item: INewsItem};
  CreatePost: {};
  Modal: {item: INewsItem};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;

interface ItemInFirebase {
  createdAt: number;
  imgeUrl: string;
  link: string;
  message: string;
  title: string;
}

export interface DataInFirebase {
  [key: string]: ItemInFirebase;
}
