import {
    Catalog,
    HomeScreen, JobDetail, SearchFilter, SearchResult,
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
import { LoginScreen, RegisterScreen, ForgotPassword } from 'screens/auth';

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
                    initialRouteName={'Catalog'}
                    screenOptions={{ headerShown: false }}
                >
                    <React.Fragment>
                        <Drawer.Screen name="Home" component={HomeScreen}/>
                        <Drawer.Screen name="Suggest" component={SuggestedJob}/>
                        <Drawer.Screen name="Login" component={LoginScreen}/>
                        <Drawer.Screen name="Register" component={RegisterScreen}/>
                        <Drawer.Screen name="ForgotPassword" component={ForgotPassword}/>
                        <Drawer.Screen name="SearchResult" component={SearchResult}/>
                        <Drawer.Screen name="SearchFilter" component={SearchFilter}/>
                        <Drawer.Screen name="JobDetail" component={JobDetail}/>
                        <Drawer.Screen name="Catalog" component={Catalog}/>
                    </React.Fragment>
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
};
