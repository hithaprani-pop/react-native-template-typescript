/**
 * lightColors are used for light theme
 * darkColors are used for dark theme
 * if no colours are provided for  dark theme it uses colors form light theme
 * make sure to name the colour in light and dark to same as shown for shadowColor to make the changes dynamic
 */
export const lightColors = {
  SpinnerColor: 'blue',
  SpinnerBackgroud: 'rgba(0,0,0,0.3)',
  defaultBackgroundColor: 'white',
  shadowColor: 'rgba(0,0,0,0.5)',
  fontColor: 'black',
  invertFontColor: 'white',
  borderColor: 'black',
  gradientColor: ['#00fffc', '#0266a0'],
  disableColor: 'rgba(0,0,0,0.5)',
  placeHolderTextColor: 'red',
  appPrimaryColor: 'blue',
};
export const darkColors = {
  ...lightColors,
  SpinnerColor: 'red',
  shadowColor: '#0266a0',
  gradientColor: ['#fe491d', '#f9f601'],
};

export type colorType = typeof lightColors | typeof darkColors;
