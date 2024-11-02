import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme.ts';
import GlobalStyles from '@/styles/GlobalStyles.ts';
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <App />
  </ThemeProvider>
);
