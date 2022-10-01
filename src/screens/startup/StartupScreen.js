import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTranslation } from 'react-i18next';
import { setDefaultTheme } from 'store/theme';
import { navigateAndSimpleReset } from 'navigators/utils';
import { Logo } from 'screens';
import { View, Text } from 'react-native-ui-lib';
import { Layout } from 'components/layouts/Layout';
import { useAuth } from 'hooks';
import { showAlert } from 'utilities';
import { useDispatch } from 'react-redux';

export const StartupScreen = () => {
    const { t } = useTranslation();
    const { isLogged } = useAuth();

    const init = async () => {
        try {
            await setDefaultTheme({ theme: 'default', darkMode: null });
            navigateAndSimpleReset(isLogged ? 'Home' : 'Login');
        } catch (error) {
            showAlert(error.message);
        }
    };

    useEffect(() => {
        init();
    }, []);

    return (
        <Layout>
            <View flex centerH centerV>
                <Logo />
                <ActivityIndicator size={'large'} />
                <Text white fs20 marginT-20 center>
                    {t('welcome')}
                </Text>
            </View>
        </Layout>
    );
};
