import { DateTimePicker, Text, View } from 'react-native-ui-lib';
import StyledInput from 'screens/components/form/StyledInput';
import { Key, User } from 'assets';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import StyledButton from 'screens/components/form/StyledButton';
import ScreenLayout from 'screens/components/layout/ScreenLayout';
import React, { useRef } from 'react';
import { boxWithShadow } from 'utilities/boxShadow';
import { useForm, Controller } from 'react-hook-form';

const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
    );

export const RegisterScreen = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        watch,
    } = useForm();

    const onSubmit = values => {
        console.log(values);
    };

    const password = useRef({});
    password.current = watch('password', '');

    return (
        <ScreenLayout title={'Job Go!'} desc={'Finding your dream job.'} contentHeight={'90%'}>
            <ScrollView>
                <View width={'100%'} paddingB-80>
                    <View paddingH-20 paddingT-20>
                        <Text fs30 textBlack font-extraBold>
                            Register
                        </Text>
                        <View paddingT-15 paddingB-30 width={'100%'}>
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <StyledInput
                                        error={errors.fullname && errors.fullname.message}
                                        Icon={User}
                                        placeholder={'Full name'}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                                name="fullname"
                                rules={{ required: 'Full name is required!' }}
                            />

                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <StyledInput
                                        error={errors.username && errors.username.message}
                                        Icon={User}
                                        placeholder={'Username'}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                                name="username"
                                rules={{ required: 'Username is required!' }}
                            />

                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <StyledInput
                                        error={errors.email && errors.email.message}
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
                                    maxLength: { value: 25, message: 'Email too long!' },
                                    validate: email => {
                                        if (!isValidEmail(email)) {
                                            return 'Email invalid!';
                                        }
                                    },
                                }}
                            />

                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <StyledInput
                                        error={errors.age && errors.age.message}
                                        Icon={User}
                                        placeholder={'Age'}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                                name="age"
                                rules={{
                                    required: 'Age is required!',
                                    // valueAsNumber: true,
                                    // validate: (age) => {
                                    //     if (+age < 10) {
                                    //         return 'Invalid Age';
                                    //     }
                                    // },
                                }}
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <StyledInput
                                        type={'password'}
                                        error={errors.password && errors.password.message}
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
                                        value: 8,
                                        message: 'Password must have more than 8 character!',
                                    },
                                    maxLength: {
                                        value: 20,
                                        message: 'Password too long!',
                                    },
                                }}
                            />
                            <Controller
                                control={control}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <StyledInput
                                        type={'password'}
                                        error={errors.confirmPassword && errors.confirmPassword.message}
                                        Icon={Key}
                                        placeholder={'Confirm Password'}
                                        onChange={onChange}
                                        onBlur={onBlur}
                                        value={value}
                                    />
                                )}
                                name="confirmPassword"
                                rules={{
                                    required: 'Confirm password is required!',
                                    validate: (value) =>
                                        value === password.current ||
                                        'Password not match!',
                                }}
                            />
                            <View>
                                <TouchableOpacity>
                                    <Text
                                        style={{ width: '88%', textAlign: 'right' }}
                                        marginT-5
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
                        <StyledButton onPress={handleSubmit(onSubmit)} label={'Register'}/>
                    </View>
                </View>
            </ScrollView>
        </ScreenLayout>
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
