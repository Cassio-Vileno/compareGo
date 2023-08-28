import {StatusBar} from 'react-native';
import {Home} from './src/screen/Home';
import {AppView} from './src/styles';
import {Historic} from './src/screen/Historic';
import {DialogProvider} from './src/contexts/dialog.context';

export default function App() {
  return (
    <AppView>
      <StatusBar backgroundColor="#00BFA5" translucent />
      <DialogProvider>
        <Home />
      </DialogProvider>
    </AppView>
  );
}
