import { Text, View } from 'react-native-ui-lib';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { User, Key } from 'assets';
import { StyledButton, StyledInput } from 'screens/components';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/auth';
import { useNavigation } from '@react-navigation/native';
import { tokenStorage } from 'utilities';
import { useMutation } from 'react-query';
import { accountApi } from 'apis';
import { LoadingScreen } from 'components';
import { ScreenLayout } from 'screens/components/layout';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const navi = useNavigation();

    const {
        isLoading,
        mutate: loginHandler,
        data,
    } = useMutation(accountApi.login);

    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
    } = useForm({
        defaultValues: {
            email: __DEV__ ? 'ba.nguyen@gmail.com' : '',
            password: __DEV__ ? '123456' : '',
        },
    });

    const onSubmit = values => {
        const userInfo = new FormData();

        userInfo.append('email', values.email);
        userInfo.append('password', values.password);

        loginHandler(userInfo);
    };

    useEffect(() => {
        if (data !== undefined) {
            console.log(data, 'run');
            dispatch(
                setUser({
                    email: getValues('email'),
                }),
            );
            tokenStorage.set(data.token);
            setTimeout(() => navi.navigate('Home'), 500);
        }
    }, [data]);

    return (
        <>
            {isLoading && <LoadingScreen />}
            <ScreenLayout
                title={'Job Go!'}
                desc={'Finding your dream job.'}
                contentHeight={'100%'}
            >
                <View paddingH-20 paddingT-20>
                    <Text fs30 textBlack font-extraBold>
                        Log in
                    </Text>
                    <View paddingT-15 paddingB-40 width={'100%'}>
                        <Controller
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <StyledInput
                                    error={
                                        errors.username &&
                                        errors.username.message
                                    }
                                    Icon={User}
                                    placeholder={'Email'}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                            name="email"
                            rules={{
                                required: 'Email is required!',
                                maxLength: {
                                    value: 30,
                                    message: 'Email too long!',
                                },
                            }}
                        />
                        <Controller
                            control={control}
                            render={({
                                field: { onChange, onBlur, value },
                            }) => (
                                <StyledInput
                                    error={
                                        errors.password &&
                                        errors.password.message
                                    }
                                    Icon={User}
                                    type={'password'}
                                    placeholder={'Password'}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                />
                            )}
                            name="password"
                            rules={{
                                required: 'Password is required!',
                                minLength: {
                                    value: 6,
                                    message:
                                        'Password must have more than 6 character!',
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'Password too long!',
                                },
                            }}
                        />
                        <View>
                            <TouchableOpacity
                                onPress={() => navi.navigate('ForgotPassword')}
                            >
                                <Text
                                    style={style.navigateText}
                                    marginT-5
                                    marginL-40
                                    fs14
                                    textBlack
                                    font-light
                                >
                                    Forgot password?
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navi.navigate('Register')}
                            >
                                <Text
                                    style={style.navigateText}
                                    marginT-5
                                    marginL-40
                                    fs14
                                    textBlack
                                    font-light
                                >
                                    Create new account!
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <StyledButton
                        onPress={handleSubmit(onSubmit)}
                        label={'Log in'}
                    />
                </View>
            </ScreenLayout>
        </>
    );
};

const style = StyleSheet.create({
    navigateText: {
        width: '88%',
        textAlign: 'right',
    },
});
