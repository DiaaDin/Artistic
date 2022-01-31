import LandingPage from './pages/LandingPage'
import {GlobalStyle, darkTheme, lightTheme} from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import {useDarkMode} from './styles/useDarkMode'

function App() {

  const [theme, toggleTheme] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <>
    <ThemeProvider theme={themeMode}>
    <GlobalStyle/>
    <LandingPage toggleTheme={toggleTheme} theme={theme}/>
    </ThemeProvider>
    
    </>
  );
}

export default App;
