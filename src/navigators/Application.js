import {
    AboutUs,
    AppliedJobs, AwardSection,
    Catalog, CreateCV, EducationSection, ExperienceSection, FavoriteJob, HomeCv,
    HomeScreen, JobDetail, ListCV, ProfileManager, SearchFilter, SearchResult, SkillsSection,
    SuggestedJob, UpdateProfile, CVProfile, Certification, CvDetail, ApplyJob
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
import { CompanyList } from 'screens/main/company';
import { CompanyDetail } from 'screens/main/company/CompanyDetail';
import { CompanyJobs } from 'screens/main/company/CompanyJobs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
                        <Stack.Screen name="ApplyJob" component={ApplyJob}/>
                        <Stack.Screen name="CompanyList" component={CompanyList}/>
                        <Stack.Screen name="CompanyDetail" component={CompanyDetail}/>
                        <Stack.Screen name="CompanyJob" component={CompanyJobs}/>
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
        <Tab.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#A4DCC6',
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({
                                     color,
                                     size
                                 }) => (
                        <Ionicons name={'home-sharp'} size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="AppliedJobs"
                component={FavoriteJob}
                options={{
                    tabBarIcon: ({
                                     color,
                                     size
                                 }) => (
                        <Ionicons name={'heart-sharp'} size={size} color={color}/>
                    ),
                }}
            />
            <Tab.Screen
                name="CV"
                component={HomeCv}
                options={{
                    tabBarIcon: ({
                                     color,
                                     size
                                 }) => (
                        <Ionicons name="list-sharp" color={color} size={size}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileManager}
                options={{
                    tabBarIcon: ({
                                     color,
                                     size
                                 }) => (
                        <Ionicons name="person-sharp" color={color} size={size}/>
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
