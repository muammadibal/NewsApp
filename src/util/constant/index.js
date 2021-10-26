import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('screen');

export const primaryColor = '#51ABED';
export const secondaryColor = '#c0c0c0';
export const titleColor = '#e4e4e4';
export const subtitleColor = '#9a9a9a';

export const fonts = {
    light: 'Nunito-Light',
    regular: 'Nunito-Regular',
    semibold: 'Nunito-SemiBold',
    bold: 'Nunito-Bold',
};


export const gapSize = 16;
export const heightSize = height;
export const widthSize = width;

export const apiUrl = 'https://newsapi.org/v2';
export const apiKey = '19946e7c242b4d2da3e99c6267de4ad3';
