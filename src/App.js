import 'react-native-gesture-handler';
import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from 'store';
import { ApplicationNavigator } from 'navigators/Application';
import './translations';
// ui config
import './theme/FoundationConfig';
import './theme/ComponentsConfig';

export const App = () => (
    <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate persistor={persistor}>
            <ApplicationNavigator/>
        </PersistGate>
    </Provider>
);
