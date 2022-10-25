import { Text, View } from 'react-native-ui-lib';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { User, Key } from 'assets';
import { StyledButton, StyledInput, ScreenLayout } from 'screens/components';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

const isValidEmail = email =>
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email,
    );

export const ForgotPassword = () => {
    const navi = useNavigation();

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

    return (
        <ScreenLayout title={'Job Go!'} desc={'Finding your dream job.'} contentHeight={'100%'}>
            <View paddingH-20 paddingT-20>
                <Text fs30 textBlack font-extraBold>
                    Forgot password
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
                            maxLength: {
                                value: 50,
                                message: 'Email too long!'
                            },
                            validate: email => {
                                if (!isValidEmail(email)) {
                                    return 'Email invalid!';
                                }
                            },
                        }}
                    />
                    <View>
                        <TouchableOpacity onPress={() => navi.navigate('Login')}>
                            <Text style={style.navigateText} marginT-5 marginL-40 fs14 textBlack font-light>
                                Log in!
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <StyledButton onPress={handleSubmit(onSubmit)} label={'Get password'}/>
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
