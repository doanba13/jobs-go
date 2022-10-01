import { LoginScreen, SignupScreen, ForgotPasswordScreen } from 'screens/auth';

import {
    HomeScreen,
    SuggestedJob,
} from 'screens/main';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { navigationRef } from './utils';
import { useAuth } from 'hooks';
import SplashScreen from 'react-native-splash-screen';
import { DrawerContent } from './DrawerContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// @refresh reset
export const ApplicationNavigator = () => {
    const { isLogged } = useAuth();

    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar barStyle="light-content"/>

            {isLogged ? (
                <Drawer.Navigator
                    screenOptions={{
                        headerShown: false,
                        drawerStyle: {
                            backgroundColor: '#505161',
                            width: 240,
                        },
                    }}
                    drawerContent={props => <DrawerContent {...props} />}
                >

                </Drawer.Navigator>
            ) : (
                <Stack.Navigator
                    initialRouteName={'Suggest'}
                    screenOptions={{ headerShown: false }}
                >
                    <React.Fragment>
                        <Drawer.Screen name="Home" component={HomeScreen}/>
                        <Drawer.Screen name="Suggest" component={SuggestedJob}/>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="Signup" component={SignupScreen}/>
                        <Stack.Screen
                            name="ForgotPassword"
                            component={ForgotPasswordScreen}
                        />
                    </React.Fragment>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};
