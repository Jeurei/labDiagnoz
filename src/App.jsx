import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { Switch } from 'react-router-dom';
import { YMaps } from 'react-yandex-maps';
import RoutesWithSubRoutes from 'common/routeWithSubRoutes';
import ScrollToTop from 'containers/scroll-to-top';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { randomId } from './components/utils/common';
import Routes from './routes';

const App = () => {
  const theme = {
    colors: {
      colorText: {
        hex: '#4a4a4a',
        rgb: '74,74,74',
      },
      altColorText: '#fff',
      labelColor: '#222',
      iconsColor: '#4a4a4a',
      altIconsColor: '#222',
      altBaseColor: '#fff',
      bgColor: '#fff',
      borderColor: 'RGBA(112, 112, 112, 0.2)',
      boxShadow: '1px 1px 22px 0 RGBA(74, 74, 74, 0.2)',
      green: '#65bc29',
      white: '#fff',
      blue: '#4faaed',
      hoverColor: '#f7f7f7',
      inactiveColor: '#dedede',
      linearGradient: 'linear-gradient(257deg, #5BA6FB, #DF20EE);',
    },

    fontSizes: {
      bodyFs: '12px',
      bodyLh: '16px',
      altFs: '13px',
      altLh: '17px',
      titleH2Fs: '33px',
      titleH2Lh: '44px',
      titleH3Fs: '20px',
      titleH3Lh: '27px',
      titleH4Fs: '16px',
      titleH4Lh: '21px',
      titleH5Fs: '14px',
      titleH5Lh: '19px',
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <YMaps>
        <Header />
        <Switch>
          {Routes.map((el, id) => {
            return <RoutesWithSubRoutes exact={!id} key={randomId()} {...el} />;
          })}
        </Switch>
        <Footer />
      </YMaps>
    </ThemeProvider>
  );
};

export default App;
