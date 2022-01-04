import React from 'react';

import {SafeAreaView} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';

import {Provider} from 'react-redux';
import {store, persistor} from './Store/store';
import Root from './Navigators/Root';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <Root />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

export default App;
