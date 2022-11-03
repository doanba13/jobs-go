import React from 'react'
import { ScreenLayout, StyledButton } from 'screens/components';
import { Text, View } from 'react-native-ui-lib';
import { ScrollView } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { SearchInput, FilterInput } from 'screens/main/search/component';

const position = [
    {
        label: 'Thực tập sinh',
        value: 50
    },
    {
        label: 'Nhân viên',
        value: 1
    },
    {
        label: 'Trưởng nhóm',
        value: 2
    },
    {
        value: 3,
        label: 'Trưởng/phó phòng'
    },
    {
        value: 10,
        label: 'Quản lý/ Giám sát'
    },
    {
        value: 20,
        label: 'Trưởng chi nhánh'
    },
    {
        value: 25,
        label: 'Phó giám đốc'
    },
    {
        value: 30,
        label: 'Giám đốc'
    }
];
const salaryType = [
    {
        value: 1,
        label: 'USD'
    },
    {
        value: 0,
        label: 'VND'
    },
];
const salaryFrom = [
    {
        value: 5000000,
        label: '5000000'
    },
    {
        value: 10000000,
        label: '10000000'
    },
    {
        value: 15000000,
        label: '15000000'
    },
    {
        value: 20000000,
        label: '20000000'
    },
];
const salaryTo = [
    {
        value: 10000000,
        label: '10000000'
    },
    {
        value: 15000000,
        label: '15000000'
    },
    {
        value: 20000000,
        label: '20000000'
    },
    {
        value: 50000000,
        label: '50000000'
    },
];
const expFrom = [
    {
        value: 1,
        label: 'Từ 1 năm'
    },
    {
        value: 2,
        label: 'Từ 2 năm'
    },
    {
        value: 5,
        label: 'Từ 5 năm'
    },
]

export const SearchFilter = () => {
    const navi = useNavigation()
    const {
        handleSubmit,
        control,
    } = useForm();

    const onSubmit = values => {
        // console.log(values)
        // console.log({
        //     title: values.title,
        //     salary_type: values.salaryType.value,
        //     salary_from: values.salaryFrom.value,
        //     exp_years_from: values.yearExp.value,
        //     position_id: values.position.value,
        //     salary_to: values.salaryTo.value,
        // });
        navi.navigate('SearchResult', {
            title: { value: values.title },
            salary_type: values.salaryType,
            salary_from: values.salaryFrom,
            exp_years_from: values.yearExp,
            position_id: values.position,
            salary_to: values.salaryTo,
        })
    };

    return (
        <ScreenLayout title={'Search Filter'} desc={'Find your dream job'} notFooter contentHeight={'100%'}>
            <Controller
                control={control}
                render={({
                             field: {
                                 onChange,
                                 value
                             }
                         }) => (
                    <SearchInput
                        placeholder={'Let\'s find your dream job!'}
                        onChange={onChange}
                        value={value}
                    />
                )}
                name="title"
            />
            <ScrollView>
                <View width={'100%'} marginT-15 paddingT-20 paddingB-80 paddingH-10>
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
                                    placeholder={'Vị trí'}
                                    onChange={onChange}
                                    value={value}
                                    data={position}
                                />
                            )}
                            name="position"
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
                                    placeholder={'Năm kinh nghiệm'}
                                    onChange={onChange}
                                    value={value}
                                    data={expFrom}
                                />
                            )}
                            name="yearExp"
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
                                    placeholder={'Mức lương từ'}
                                    onChange={onChange}
                                    value={value}
                                    data={salaryFrom}
                                />
                            )}
                            name="salaryFrom"
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
                                    placeholder={'Mức lương đến'}
                                    onChange={onChange}
                                    value={value}
                                    data={salaryTo}
                                />
                            )}
                            name="salaryTo"
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
                                    placeholder={'Lương'}
                                    onChange={onChange}
                                    value={value}
                                    data={salaryType}
                                />
                            )}
                            name="salaryType"
                        />
                    </View>
                    <StyledButton onPress={handleSubmit(onSubmit)} label={'Search'}/>
                </View>
            </ScrollView>

        </ScreenLayout>
    )
}
