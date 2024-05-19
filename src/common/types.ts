import {RouteProp} from '@react-navigation/native';
import {z} from 'zod';

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

export const formSchema = z.object({
  title: z
    .string()
    .nonempty({message: 'Title is required'})
    .max(60, 'Maximum 60 characters')
    .trim()
    .refine(value => value.replace(/\s/g, '').length >= 3, {
      message: 'Title must be at least 3 characters long without spaces',
    }),

  imgeUrl: z
    .string()
    .max(200, 'Maximum 200 characters')
    .trim()
    .optional()
    .refine(value => value === '' || /^(https?):\/\//i.test(value ?? ''), {
      message: 'Please enter a valid URL',
    }),

  link: z
    .string()
    .max(200, 'Maximum 200 characters')
    .trim()
    .optional()
    .refine(
      value => value === '' || (value ?? '').replace(/\s/g, '').length >= 3,
      {
        message: 'Link must be at least 3 characters long without spaces',
      },
    ),

  message: z
    .string()
    .nonempty({message: 'Message is required'})
    .max(2000, 'Maximum 2000 characters')
    .trim()
    .refine(value => value.replace(/\s/g, '').length >= 3, {
      message: 'Message must be at least 3 characters long without spaces',
    }),
});

export type FormSchema = z.infer<typeof formSchema>;
