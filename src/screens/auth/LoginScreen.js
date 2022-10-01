import { accountApi } from 'apis';
import { Email, Lock } from 'assets';
import { navigate } from 'navigators/utils';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { useDispatch } from 'react-redux';
import { LoadingScreen, PrimaryButton, StyledTextInput } from 'screens';
import { showAlert, tokenStorage } from 'utilities';
import { AuthLayout } from './components';

export const LoginScreen = ({ route }) => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            email: __DEV__ ? 'giangdt.kma@gmail.com' : '',
            password: __DEV__ ? 'giangdt' : '',
        },
    });

    const onSubmit = async data => {
        try {
            setLoading(true);
            const { token } = await accountApi.postLogin(
                data.email.toLowerCase(),
                data.password,
            );
            tokenStorage.set(token);
        } catch (error) {
            showAlert(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (route.params) {
            setValue('email', route.params.email);
            setValue('password', route.params.password);
        }
    }, [route.params]);

    return (
        <AuthLayout text="Log In">
            {loading && <LoadingScreen />}
            <View>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <StyledTextInput
                            icon={<Email />}
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            placeholder="Email"
                            error={errors.email && errors.email.message}
                        />
                    )}
                    name="email"
                    rules={{ required: 'Email is required' }}
                />

                <View marginV-10>
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <StyledTextInput
                                type="password"
                                icon={<Lock />}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                placeholder="Password"
                                error={
                                    errors.password && errors.password.message
                                }
                            />
                        )}
                        name="password"
                        rules={{ required: 'Password is required' }}
                    />
                </View>
            </View>
            <View row right marginB-36>
                <TouchableOpacity onPress={() => navigate('ForgotPassword')}>
                    <Text white fs15 fw5 font-medium>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
            </View>
            <PrimaryButton onPress={handleSubmit(onSubmit)} text="Log In" />
        </AuthLayout>
    );
};
