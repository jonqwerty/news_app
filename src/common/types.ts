import {RouteProp} from '@react-navigation/native';

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
  id: number;
  title: string;
  imgeUrl: string;
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
}

export type RootStackParamList = {
  Home: {};
  NewsPost: {item: INewsItem};
  CreatePost: {};
};

export type RootRouteProps<RouteName extends keyof RootStackParamList> =
  RouteProp<RootStackParamList, RouteName>;
