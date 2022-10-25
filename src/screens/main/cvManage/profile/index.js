import { Controller, useForm } from 'react-hook-form';
import React from 'react';
import { View } from 'react-native-ui-lib';
import { User } from 'assets';
import { ScreenLayout, StyledButton, StyledInput } from 'screens/components';
import { useDispatch, useSelector } from 'react-redux';
import { getCvData, setCvProfile } from 'store/createCv';

export const CVProfile = ({ navigation }) => {
    const dispatch = useDispatch();
    const {
        global,
        profile
    } = useSelector(state => state.createCv)
    console.log(global)

    const {
        handleSubmit,
        control,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            global,
            email: profile.email,
            address: profile.address,
            fullname: profile.fullname,
            phone: profile.phone
        }
    });

    const onSubmit = (values) => {
        dispatch(setCvProfile(values));
        navigation.goBack();
    }

    return (
        <ScreenLayout title={'Profile'} desc={'Describe your information!'} contentHeight={'100%'} notFooter>
            <View paddingH-10>
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
                                error={errors.global && errors.global.message}
                                Icon={User}
                                placeholder={'Title'}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                        name="global"
                        rules={{
                            required: 'Title is required!',
                            maxLength: {
                                value: 50,
                                message: 'Title too long!'
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
                                error={errors.fullname && errors.fullname.message}
                                Icon={User}
                                placeholder={'Full name'}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="fullname"
                        rules={{
                            required: 'Name is required!',
                            maxLength: {
                                value: 50,
                                message: 'Name name too long!'
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
                                error={errors.email && errors.email.message}
                                Icon={User}
                                placeholder={'Email'}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="email"
                        rules={{
                            required: 'Email is required!',
                            maxLength: {
                                value: 30,
                                message: 'Email too long!'
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
                                error={errors.phone && errors.phone.message}
                                Icon={User}
                                placeholder={'Phone'}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="phone"
                        rules={{ required: 'Phone number is required!' }}
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
                                error={errors.address && errors.address.message}
                                Icon={User}
                                placeholder={'Address'}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="address"
                        rules={{ required: 'Address is required!' }}
                    />
                </View>
                <View paddingH-30>
                    <StyledButton onPress={handleSubmit(onSubmit)} label={'Add'}/>
                </View>
            </View>
        </ScreenLayout>
    )
}
