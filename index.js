import { AppRegistry } from 'react-native';
import CodePush from 'react-native-code-push';

import navigasyon from './src/navigasyon';

console.disableYellowBox = true;

const cpAyarlar = { checkFrequency: CodePush.CheckFrequency.MANUAL };


//AppRegistry.registerComponent('hafta3', () => navigasyon);
AppRegistry.registerComponent('hafta3', () => CodePush(cpAyarlar)(navigasyon));
