import {　createGlobalStyle } from 'styled-components';

createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Sawarabi+Gothic');
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+JP');
`

export const BreakPoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
}


export const Responsive = (point) => {
    let breakpoint = BreakPoints[point];
    if (breakpoint){
      return `@media (max-width: ${breakpoint}px)`;
    } else {
      return null;
    }
}

export const Styles = {
    FONT_SIZE: { SMALL: 12, DEFAULT: 14, MIDDLE: 16, LARGE: 21, HEADER: 28 },
    FONT_FAMILY: { EN: "'Lato', sans-serif", JP_SAWARABI: "Sawarabi Gothic", JP_NOTO: "Noto Sans JP"},
    COLOR: { DARK: '#343b33',  SECONDARY: '#2c5780', LIGHTGLAY: '#737b7d', WHITE: '#f5f7f5', PRIMARY: '#c43641',},
    BORDER_RADIUS: '4px',
    BREAK_POINT: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    }
  };
