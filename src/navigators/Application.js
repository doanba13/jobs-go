import {
    AboutUs,
    AppliedJobs, AwardSection,
    Catalog, CreateCV, EducationSection, ExperienceSection, FavoriteJob, HomeCv,
    HomeScreen, JobDetail, ListCV, ProfileManager, SearchFilter, SearchResult, SkillsSection,
    SuggestedJob, UpdateProfile, CVProfile, Certification, CvDetail
} from 'screens/main';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'react-native';
import { navigationRef } from './utils';
import { useAuth } from 'hooks';
import SplashScreen from 'react-native-splash-screen';
import { LoginScreen, RegisterScreen, ForgotPassword } from 'screens/auth';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator()

// @refresh reset
export const ApplicationNavigator = () => {
    const { isLogged } = useAuth();
    console.log(isLogged)

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
                        <Stack.Screen name="AboutUs" component={AboutUs}/>
                        <Stack.Screen name="UpdateProfile" component={UpdateProfile}/>
                        <Stack.Screen name="Education" component={EducationSection}/>
                        <Stack.Screen name="Skill" component={SkillsSection}/>
                        <Stack.Screen name="Award" component={AwardSection}/>
                        <Stack.Screen name="Experience" component={ExperienceSection}/>
                        <Stack.Screen name="CreateCv" component={CreateCV}/>
                        <Stack.Screen name="ListCv" component={ListCV}/>
                        <Stack.Screen name="CVProfile" component={CVProfile}/>
                        <Stack.Screen name="Certification" component={Certification}/>
                        <Stack.Screen name="CvDetail" component={CvDetail}/>
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
        <Tab.Navigator initialRouteName={'HomeScreen'} screenOptions={{ headerShown: false }}>
            <Tab.Screen name="HomeScreen" component={HomeScreen}/>
            <Tab.Screen name="AppliedJobs" component={FavoriteJob}/>
            <Tab.Screen name="CV" component={HomeCv}/>
            <Tab.Screen name="Profile" component={ProfileManager}/>
        </Tab.Navigator>
    )
}
