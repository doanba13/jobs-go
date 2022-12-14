import { Text, View } from 'react-native-ui-lib';
import {
    StyledButton,
    StyledInput,
    StyledDatePicker,
    ScreenLayout,
} from 'screens/components';
import { Key, User } from 'assets';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { boxWithShadow } from 'utilities/boxShadow';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useMutation } from 'react-query';
import { accountApi } from 'apis';
import Toast from 'react-native-simple-toast';
import { LoadingScreen, Modal } from 'components';

const formatDate = date => {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
};

const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
    );

export const RegisterScreen = () => {
    const navi = useNavigation();
    const {
        isLoading,
        mutate: registerHandler,
        data,
    } = useMutation(accountApi.registerAccount);

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        watch,
    } = useForm();

    const onSubmit = values => {
        const userInfo = new FormData();
        userInfo.append('first_name', values.first_name);
        userInfo.append('last_name', values.last_name);
        userInfo.append('email', values.email);
        userInfo.append('password', values.password);
        userInfo.append('password_confirmation', values.confirmPassword);
        userInfo.append('dob', formatDate(values.dob));
        userInfo.append('phone', values.phoneNumber);
        userInfo.append('address', values.address);

        registerHandler(userInfo);
    };

    useEffect(() => {
        if (data === undefined) return;
        Toast.show('Register Successfully ');
        setTimeout(() => navi.navigate('Login'), 500);
    }, [data]);

    const password = useRef({});
    password.current = watch('password', '');

    return (
        <>
            {isLoading && <LoadingScreen />}
            <ScreenLayout
                title={'Job Go!'}
                desc={'Finding your dream job.'}
                contentHeight={'100%'}
            >
                <ScrollView>
                    <View width={'100%'} paddingB-80>
                        <View paddingH-20 paddingT-20>
                            <Text fs30 textBlack font-extraBold>
                                Register
                            </Text>
                            <View paddingT-15 paddingB-20 width={'100%'}>
                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledInput
                                            error={
                                                errors.first_name &&
                                                errors.first_name.message
                                            }
                                            Icon={User}
                                            placeholder={'First name'}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )}
                                    name="first_name"
                                    rules={{
                                        required: 'First name is required!',
                                    }}
                                />

                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledInput
                                            error={
                                                errors.last_name &&
                                                errors.last_name.message
                                            }
                                            Icon={User}
                                            placeholder={'Last Name'}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )}
                                    name="last_name"
                                    rules={{
                                        required: 'Last name is required!',
                                    }}
                                />
                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledInput
                                            error={
                                                errors.phoneNumber &&
                                                errors.phoneNumber.message
                                            }
                                            Icon={User}
                                            placeholder={'Phone'}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )}
                                    name="phoneNumber"
                                    rules={{
                                        required: 'Phone number is required!',
                                    }}
                                />
                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledInput
                                            error={
                                                errors.address &&
                                                errors.address.message
                                            }
                                            Icon={User}
                                            placeholder={'Address'}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )}
                                    name="address"
                                    rules={{ required: 'Address is required!' }}
                                />

                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledInput
                                            error={
                                                errors.email &&
                                                errors.email.message
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
                                            value: 25,
                                            message: 'Email too long!',
                                        },
                                        validate: email => {
                                            if (!isValidEmail(email)) {
                                                return 'Email invalid!';
                                            }
                                        },
                                    }}
                                />
                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledInput
                                            type={'password'}
                                            error={
                                                errors.password &&
                                                errors.password.message
                                            }
                                            Icon={Key}
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
                                                'Password must have more than 8 character!',
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: 'Password too long!',
                                        },
                                    }}
                                />
                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledInput
                                            type={'password'}
                                            error={
                                                errors.confirmPassword &&
                                                errors.confirmPassword.message
                                            }
                                            Icon={Key}
                                            placeholder={'Confirm Password'}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )}
                                    name="confirmPassword"
                                    rules={{
                                        required:
                                            'Confirm password is required!',
                                        validate: value =>
                                            value === password.current ||
                                            'Password not match!',
                                    }}
                                />
                                <Controller
                                    control={control}
                                    render={({
                                        field: { onChange, onBlur, value },
                                    }) => (
                                        <StyledDatePicker
                                            error={
                                                errors.dob && errors.dob.message
                                            }
                                            Icon={User}
                                            placeholder={'Age'}
                                            onChange={onChange}
                                            onBlur={onBlur}
                                            value={value}
                                        />
                                    )}
                                    name="dob"
                                    rules={{ required: 'Age is required!' }}
                                />
                                <View>
                                    <TouchableOpacity
                                        onPress={() => navi.navigate('Login')}
                                    >
                                        <Text
                                            style={{
                                                width: '88%',
                                                textAlign: 'right',
                                                marginTop: -20,
                                            }}
                                            marginL-40
                                            fs14
                                            textBlack
                                            font-light
                                        >
                                            Log in!
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <StyledButton
                                onPress={handleSubmit(onSubmit)}
                                label={'Register'}
                            />
                        </View>
                    </View>
                </ScrollView>
            </ScreenLayout>
        </>
    );
};

const style = StyleSheet.create({
    datePicker: {
        borderStyle: 'solid',
        width: '100%',
        borderWidth: 0,
        borderRadius: 12,
        paddingLeft: 40,
        backgroundColor: '#fff',
        ...boxWithShadow,
        elevation: 12,
        paddingTop: 6,
        paddingBottom: 6,
        zIndex: 1,
    },
});
