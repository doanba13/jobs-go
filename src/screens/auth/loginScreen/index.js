import ScreenLayout from 'screens/components/layout/ScreenLayout';
import { Text, View } from 'react-native-ui-lib';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { User, Key } from 'assets';
import StyledInput from 'screens/components/form/StyledInput';
import StyledButton from 'screens/components/form/StyledButton';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/auth';
import { useNavigation } from '@react-navigation/native';

export const LoginScreen = () => {
    const dispatch = useDispatch();
    const navi = useNavigation()

    const {
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        watch,
    } = useForm();

    const onSubmit = values => {
        console.log(values);
        dispatch(setUser({
            username: 'bastol',
            email: 'ba.nguyendoan133@gmail.com'
        }))
        setTimeout(() => navi.navigate('Home'), 500)
    };

    return (
        <ScreenLayout title={'Job Go!'} desc={'Finding your dream job.'}>
            <View paddingH-20 paddingT-20>
                <Text fs30 textBlack font-extraBold>
                    Log in
                </Text>
                <View paddingT-15 paddingB-40 width={'100%'}>
                    <Controller
                        control={control}
                        render={({
                                     field: {
                                         onChange,
                                         onBlur,
                                         value
                                     }
                                 }) => (
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
                        rules={{
                            required: 'Username is required!',
                            minLength: {
                                value: 8,
                                message: 'Username must have more than 8 character!'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Username too long!'
                            },
                        }}
                    />
                    <Controller
                        control={control}
                        render={({
                                     field: {
                                         onChange,
                                         onBlur,
                                         value
                                     }
                                 }) => (
                            <StyledInput
                                error={errors.password && errors.password.message}
                                Icon={User}
                                placeholder={'Username'}
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
                                message: 'Password must have more than 8 character!'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Password too long!'
                            },
                        }}
                    />
                    <View>
                        <TouchableOpacity onPress={() => navi.navigate('ForgotPassword')}>
                            <Text style={style.navigateText} marginT-5 marginL-40 fs14 textBlack font-light>
                                Forgot password?
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navi.navigate('Register')}>
                            <Text style={style.navigateText} marginT-5 marginL-40 fs14 textBlack font-light>
                                Create new account!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StyledButton onPress={handleSubmit(onSubmit)} label={'Log in'}/>
            </View>
        </ScreenLayout>
    );
};

const style = StyleSheet.create({
    navigateText: {
        width: '88%',
        textAlign: 'right',
    },
});
