import { blue, red } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navigation from './common-components/Navigation.tsx';
import { FlowBuilderPage } from './flow/FlowBuilderPage.tsx';
import { AddServicesPage } from './form/AddServicesPage.tsx';
import { HomeFormPage } from './HomeFormPage.tsx';
import { store } from './store.ts';

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red['A400'],
    }
  },
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route index element={<HomeFormPage />} />
            <Route path="/flow" element={<FlowBuilderPage />} />
            <Route path="/add-services" element={<AddServicesPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </StrictMode>,
)
