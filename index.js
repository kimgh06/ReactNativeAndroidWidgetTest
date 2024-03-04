import { AppRegistry } from 'react-native';
import { registerWidgetTaskHandler } from 'react-native-android-widget';
import { name as appName } from './app.json';
import App from './App';
import { widgetTaskHandler } from './taskhandler';
import { registerRootComponent } from 'expo';

registerRootComponent(App);
registerWidgetTaskHandler(widgetTaskHandler);