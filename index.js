/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import { store } from './src/store/store';
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1A72DD',
    secondary: 'white',
  },
};

export default function Main() {
  return (
    <PaperProvider store={store}  theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
