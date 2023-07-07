import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {AuthProvider} from './navigation/AuthContext';
import {LanguageProvider} from './languages/LanguageContext';

const Main = () => (
  <LanguageProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </LanguageProvider>
);

AppRegistry.registerComponent(appName, () => Main);
