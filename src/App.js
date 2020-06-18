import React from 'react';
import Navigation from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Order from './components/Order'
import { theme, ThemeProvider } from '@chakra-ui/core';
// import './App.scss'
// import logo from './logo.svg';
import './App.css';

// const colors = {
//   transparent: "transparent",
//   black: "#000",
//   white: "#fff",
//   darkSienna: {
//     50: "#D5888F",
//     100: "#C76069",
//     200: "B33F49",
//     300: "#B33F49",
//     400: "#642329",
//     500: "#3C1518",
//     600: "#351315",
//     700: "#2D1012",
//     800: "#260D0F",
//     900: "#1E0B0C",
//   },
//   rubyRed: {
//     50: "#E79E9C",
//     100: "#DF7D7C",
//     200: "#D75D5B",
//     300: "#CF3C3A",
//     400: "#B52E2C",
//     500: "#942624",
//     600: "#81211F",
//     700: "#6F1C1B",
//     800: "#5C1816",
//     900: "#4A1312",
//   },
//   bistre: {
//     50: "#D5A78C",
//     100: "#C88965",
//     200: "#B76D42",
//     300: "#905634",
//     400: "#6A3F26",
//     500: "#432818",
//     600: "#3B2315",
//     700: "#331E12",
//     800: "#2A190F",
//     900: "#22140C",
//   },
//   coyoteBrown: {
//     50: "#E1C1AB",
//     100: "#D6AD8F",
//     200: "#CC9872",
//     300: "#C28356",
//     400: "#B27040",
//     500: "#965E36",
//     600: "#83522F",
//     700: "#704729",
//     800: "#5E3B22",
//     900: "#4B2F1B",
//   },
//   middleYellowRed: {
//     50: "#F4E1CF",
//     100: "#F0D7BF",
//     200: "#ECCEAF",
//     300: "#E8C49F",
//     400: "#E5BA8F",
//     500: "#E1B07E",
//     600: "#D99A5B",
//     700: "#D08438",
//     800: "#B26E2A",
//     900: "#8F5821",
//   },
//   bannaMania: {
//     50: "#FFF6DE",
//     100: "#FFF3D4",
//     200: "#FFF0C9",
//     300: "#FFEDBE",
//     400: "#FFEAB3",
//     500: "#FFE6A7",
//     600: "#FFD773",
//     700: "#FFC83E",
//     800: "#FFB90A",
//     900: "#D49800",
//   },
//   blond: {
//     50: "#FEFAE9",
//     100: "#FDF9E2",
//     200: "#FDF7DB",
//     300: "#FDF6D3",
//     400: "#FCF4CC",
//     500: "#FCF3C5",
//     600: "#F9E890",
//     700: "#F6DC5A",
//     800: "#F4D125",
//     900: "#D5B40B",
//   },
//   paleSpringBud: {
//     50: "#F0F0E2",
//     100: "#EBECD8",
//     200: "#E6E7CE",
//     300: "#E0E2C4",
//     400: "#DBDDBA",
//     500: "#D7D9B1",
//     600: "#C5C890",
//     700: "#B4B86F",
//     800: "#A0A451",
//     900: "#808441",
//   },
//   mossGreen: {
//     50: "#D4D7C3",
//     100: "#C5CAAF",
//     200: "#B7BD9C",
//     300: "#A8AF88",
//     400: "#9AA274",
//     500: "#8A9362",
//     600: "#798156",
//     700: "#676E49",
//     800: "#565C3D",
//     900: "#454931",
//   },
//   darkOliveGreen: {
//     50: "#C7CEAE",
//     100: "#B5BE93",
//     200: "#A2AE78",
//     300: "#8F9C5E",
//     400: "#76814D",
//     500: "#5D663D",
//     600: "#525936",
//     700: "#464D2E",
//     800: "#3A4026",
//     900: "#2F331F",
//   },
// }

const newTheme = {
  ...theme,
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    darkSienna: {
      50: "#D5888F",
      100: "#C76069",
      200: "B33F49",
      300: "#B33F49",
      400: "#642329",
      500: "#3C1518",
      600: "#351315",
      700: "#2D1012",
      800: "#260D0F",
      900: "#1E0B0C",
    },
    rubyRed: {
      50: "#E79E9C",
      100: "#DF7D7C",
      200: "#D75D5B",
      300: "#CF3C3A",
      400: "#B52E2C",
      500: "#942624",
      600: "#81211F",
      700: "#6F1C1B",
      800: "#5C1816",
      900: "#4A1312",
    },
    bistre: {
      50: "#D5A78C",
      100: "#C88965",
      200: "#B76D42",
      300: "#905634",
      400: "#6A3F26",
      500: "#432818",
      600: "#3B2315",
      700: "#331E12",
      800: "#2A190F",
      900: "#22140C",
    },
    coyoteBrown: {
      50: "#E1C1AB",
      100: "#D6AD8F",
      200: "#CC9872",
      300: "#C28356",
      400: "#B27040",
      500: "#965E36",
      600: "#83522F",
      700: "#704729",
      800: "#5E3B22",
      900: "#4B2F1B",
    },
    middleYellowRed: {
      50: "#F4E1CF",
      100: "#F0D7BF",
      200: "#ECCEAF",
      300: "#E8C49F",
      400: "#E5BA8F",
      500: "#E1B07E",
      600: "#D99A5B",
      700: "#D08438",
      800: "#B26E2A",
      900: "#8F5821",
    },
    bannaMania: {
      50: "#FFF6DE",
      100: "#FFF3D4",
      200: "#FFF0C9",
      300: "#FFEDBE",
      400: "#FFEAB3",
      500: "#FFE6A7",
      600: "#FFD773",
      700: "#FFC83E",
      800: "#FFB90A",
      900: "#D49800",
    },
    blond: {
      50: "#FEFAE9",
      100: "#FDF9E2",
      200: "#FDF7DB",
      300: "#FDF6D3",
      400: "#FCF4CC",
      500: "#FCF3C5",
      600: "#F9E890",
      700: "#F6DC5A",
      800: "#F4D125",
      900: "#D5B40B",
    },
    paleSpringBud: {
      50: "#F0F0E2",
      100: "#EBECD8",
      200: "#E6E7CE",
      300: "#E0E2C4",
      400: "#DBDDBA",
      500: "#D7D9B1",
      600: "#C5C890",
      700: "#B4B86F",
      800: "#A0A451",
      900: "#808441",
    },
    mossGreen: {
      50: "#D4D7C3",
      100: "#C5CAAF",
      200: "#B7BD9C",
      300: "#A8AF88",
      400: "#9AA274",
      500: "#8A9362",
      600: "#798156",
      700: "#676E49",
      800: "#565C3D",
      900: "#454931",
    },
    darkOliveGreen: {
      50: "#C7CEAE",
      100: "#B5BE93",
      200: "#A2AE78",
      300: "#8F9C5E",
      400: "#76814D",
      500: "#5D663D",
      600: "#525936",
      700: "#464D2E",
      800: "#3A4026",
      900: "#2F331F",
    },
  }
};

// FB.AppEvents.logPageView();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={newTheme}>
        <Navigation />
        <Header />
        <About />
        <Menu />
        <Contact />
        <Order />
      </ThemeProvider>
    </div>
  );
}

export default App;
