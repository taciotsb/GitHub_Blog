import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { Router } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { IssuesProvider } from './Context/context';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
            <BrowserRouter>
              <IssuesProvider>
                <Router />
              </IssuesProvider>
            </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
