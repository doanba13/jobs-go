import {
    AppliedJobs,
    Catalog, FavoriteJob,
    HomeScreen, JobDetail, ProfileManager, SearchFilter, SearchResult,
    SuggestedJob,
} from 'screens/main';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { navigationRef } from './utils';
import { useAuth } from 'hooks';
import SplashScreen from 'react-native-splash-screen';
import { LoginScreen, RegisterScreen, ForgotPassword } from 'screens/auth';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator()

// @refresh reset
export const ApplicationNavigator = () => {
    const { isLogged } = useAuth();

    useEffect(() => {
        SplashScreen.hide();
    });

    return (
        <NavigationContainer ref={navigationRef}>
            <StatusBar barStyle="light-content"/>
            <Stack.Navigator
                initialRouteName={'Home'}
                screenOptions={{ headerShown: false }}
            >
                {isLogged
                    ? <React.Fragment>
                        <Stack.Screen name="Suggest" component={SuggestedJob}/>
                        <Stack.Screen name="Home" component={TabBarNavigation}/>
                        <Stack.Screen name="SearchResult" component={SearchResult}/>
                        <Stack.Screen name="SearchFilter" component={SearchFilter}/>
                        <Stack.Screen name="JobDetail" component={JobDetail}/>
                        <Stack.Screen name="FavoriteJob" component={FavoriteJob}/>
                    </React.Fragment>
                    : <React.Fragment>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                        <Stack.Screen name="Register" component={RegisterScreen}/>
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/>
                    </React.Fragment>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const TabBarNavigation = () => {
    return (
        <Tab.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="AppliedJobs" component={AppliedJobs}/>
            <Tab.Screen name="CV" component={Catalog}/>
            <Tab.Screen name="Profile" component={ProfileManager}/>
        </Tab.Navigator>
    )
}
