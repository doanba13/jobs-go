import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native-ui-lib';
import { Images, User } from 'assets';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { accountApi } from 'apis';
import { LoadingScreen } from 'components';
import Toast from 'react-native-simple-toast';
import { StyledButton, StyledInput, StyledDatePicker } from 'screens/components';

const toDate = (dateStr) => {
    const [year, month, day] = dateStr.split('-')
    return new Date(year, month - 1, day)
}

const formatDate = (date) => {
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
}

const genderData = [
    {
        label: 'male',
        value: 0
    },
    {
        label: 'female',
        value: 1
    },
]

export const UpdateProfile = ({ route }) => {
    const { data } = route.params;

    const {
        isLoading,
        mutate: updateInfoHandler,
        data: responseData,
    } = useMutation(accountApi.updateuserInfo)

    const {
        handleSubmit,
        control,
        formState: {
            errors,
        },
    } = useForm({
        defaultValues: {
            email: data.email,
            firstName: data.first_name,
            lastName: data.last_name,
            dob: toDate(data.dob.slice(0, 10)),
            // gender: data.gender
            phoneNumber: data.phone,
            address: data.address,
        }
    });

    const onSubmit = (values) => {
        const userInfo = new FormData();
        userInfo.append('first_name', values.firstName)
        userInfo.append('last_name', values.lastName)
        userInfo.append('email', values.email)
        userInfo.append('dob', formatDate(values.dob))
        userInfo.append('address', values.address)

        updateInfoHandler(userInfo)
    }

    useEffect(() => {
        if (responseData === undefined) return;
        Toast.show('Update info successfully ')
    }, [responseData])

    return (
        <>
            {isLoading && <LoadingScreen/>}
            <View backgroundColor={'#ffffff'} height={'100%'} paddingH-20>
                <View paddingT-40 marginB-20 row centerV>
                    <Image source={Images.logo} height={80} width={80}/>
                    <View marginL-5>
                        <Text marginB-2 fs19 font-bold
                              textBlack>{`${data.first_name} ${data.last_name}`}</Text>
                        <Text marginT-2 fs14 font-medium
                              black50>{data.email}</Text>
                    </View>
                </View>
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
                                error={errors.firstName && errors.firstName.message}
                                Icon={User}
                                placeholder={'First name'}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                        name="firstName"
                        rules={{
                            required: 'First name is required!',
                            maxLength: {
                                value: 30,
                                message: 'First name too long!'
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
                                error={errors.lastName && errors.lastName.message}
                                Icon={User}
                                placeholder={'Last name'}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                        name="lastName"
                        rules={{
                            required: 'Last name is required!',
                            maxLength: {
                                value: 30,
                                message: 'Last name too long!'
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
                                error={errors.username && errors.username.message}
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
                                error={errors.phoneNumber && errors.phoneNumber.message}
                                Icon={User}
                                placeholder={'Phone'}
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                        name="phoneNumber"
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
                                onChange={onChange}
                                onBlur={onBlur}
                                value={value}
                            />
                        )}
                        name="address"
                        rules={{ required: 'Address is required!' }}
                    />
                    {/* <Controller */}
                    {/*     control={control} */}
                    {/*     render={({ */}
                    {/*                  field: { */}
                    {/*                      onChange, */}
                    {/*                      value */}
                    {/*                  } */}
                    {/*              }) => ( */}
                    {/*         <FilterInput */}
                    {/*             placeholder={'Gender'} */}
                    {/*             onChange={onChange} */}
                    {/*             value={value} */}
                    {/*             data={genderData} */}
                    {/*         /> */}
                    {/*     )} */}
                    {/*     name="gender" */}
                    {/* /> */}
                    <Controller
                        control={control}
                        render={({
                                     field: {
                                         onChange,
                                         onBlur,
                                         value
                                     }
                                 }) => (
                            <StyledDatePicker
                                error={errors.dob && errors.dob.message}
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
                </View>
                <StyledButton onPress={handleSubmit(onSubmit)} label={'Update'}/>
            </View>
        </>
    )
}
