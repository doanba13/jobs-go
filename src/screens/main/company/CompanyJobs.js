import { ScreenLayout } from 'screens/components';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import WideJobCard from 'screens/components/card/WideJobCard';
import React from 'react';
import { useQuery } from 'react-query';
import { companyApi } from 'apis';
import { LoadingScreen } from 'components';

const datad = {
    title: 'Senior Frontend Developer',
    company: 'Facebook',
    salary: '4000-5000',
    location: 'Cau Giay, Hanoi',
    tags: ['Senior', 'Full-time', 'Developer'],
    duration: 2
}

export const CompanyJobs = ({ route }) => {
    const { id } = route.params
    const {
        data,
        isLoading
    } = useQuery(['get-company-job', id], () => companyApi.getCompanyJobs(id))

    console.log(data)

    return (
        <ScreenLayout title={'Favorite Jobs'} desc={'Apply your most suitable job!'} contentHeight={'100%'} notFooter>
            <ScrollView>
                <View width={'100%'} paddingT-10 paddingB-80 paddingH-10>
                    {isLoading ? <LoadingScreen/> : <View paddingV-25>
                        <WideJobCard detail={datad}/>
                    </View>}
                </View>
            </ScrollView>
        </ScreenLayout>
    )
}
