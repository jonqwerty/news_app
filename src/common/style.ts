import {Dimensions} from 'react-native';

export const Colors = {
  lime: '#BDFF31',
  yellow: '#F8A121',
  pink: '#fc97e6',
  blue: '#456EFE',
  blue_50: '#8FA8FE',
  violet: '#A126E6',
  white: '#fff',
  white_200: '#F5F5F5',
  black: '#000',
  black_70: '#00000070',
  black_50: '#00000050',
  red_light: '#FF6363',
  red: '#F00',
  grey: '#8E949A',
  grey_15: '#8E949A15',
  grey_25: '#A4A9AE25',
  grey_60: '#C4C8CC60',
};

export const FontFamily = {
  roboto_bold: 'Roboto-Bold',
  roboto_semibold: 'Roboto-Semibold',
  roboto_regular: 'Roboto-Regular',
  roboto_light: 'Roboto-Light',
  roboto_extralight: 'Roboto-ExtraLight',
};

export const screen = Dimensions.get('screen');
export const window = Dimensions.get('window');

export const ScreenWidth = screen.width;
export const ScreenHeight = screen.height;

export const WindowWidth = window.width;
export const WindowHeight = window.height;
