import React from 'react'
import ScreenLayout from 'screens/components/layout/ScreenLayout';
import { Text, View } from 'react-native-ui-lib';
import SearchInput from 'screens/main/search/component/SearchInput';
import { ScrollView } from 'react-native';
import FilterInput from 'screens/main/search/component/FilterInput';
import { Controller, useForm } from 'react-hook-form';
import StyledButton from 'screens/components/form/StyledButton';

const data = [
    {
        label: 'Tất cả',
        value: ''
    },
    {
        value: 'it',
        label: 'CNTT'
    },
    {
        value: '2',
        label: 'Văn phòng'
    },
    {
        value: '3',
        label: 'Cán bộ'
    }
]

export const SearchFilter = () => {
    const {
        handleSubmit,
        control,
    } = useForm();

    const onSubmit = values => {
        console.log(values);
    };

    return (
        <ScreenLayout title={'Search Filter'} desc={'Find your dream job'} notFooter contentHeight={'100%'}>
            <SearchInput placeholder={'UI/UI Designer'}/>
            <ScrollView>
                <View width={'100%'} paddingT-20 paddingB-80 paddingH-10>
                    <Text textBlack fs18 font-medium>
                        Tell us types of your job 😤
                    </Text>
                    <View padding-10>
                        <Controller
                            control={control}
                            render={({
                                         field: {
                                             onChange,
                                             value
                                         }
                                     }) => (
                                <FilterInput
                                    placeholder={'Username'}
                                    onChange={onChange}
                                    value={value}
                                    data={data}
                                />
                            )}
                            name="job1"
                        />
                        <Controller
                            control={control}
                            render={({
                                         field: {
                                             onChange,
                                             value
                                         }
                                     }) => (
                                <FilterInput
                                    placeholder={'Username'}
                                    onChange={onChange}
                                    value={value}
                                    data={data}
                                />
                            )}
                            name="job2"
                        />
                    </View>
                    <StyledButton onPress={handleSubmit(onSubmit)} label={'Search'}/>
                </View>
            </ScrollView>

        </ScreenLayout>
    )
}
