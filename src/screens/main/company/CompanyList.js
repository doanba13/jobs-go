import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import { useQuery } from 'react-query';
import { companyApi } from 'apis';
import { LoadingScreen } from 'components';
import { CompanyCard, ScreenLayout } from 'screens/components';
import { ScrollView } from 'react-native';

export const CompanyList = ({ navigation }) => {
    const {
        data,
        isLoading
    } = useQuery('get-all-company', companyApi.getAllCompany)

    console.log(data)

    return (
        <ScreenLayout contentHeight={'100%'} desc={'More than 100+ company join us!'} title={'Company'} notFooter>
            {isLoading && <LoadingScreen/>}
            <ScrollView>
                <View paddingH-15 paddingB-30>
                    {data &&
                        data.companies.map(({
                                                id,
                                                name
                                            }) => <CompanyCard key={id} title={name} onPress={() => {
                            navigation.navigate('CompanyDetail', { id })
                        }}/>)
                    }
                </View>
            </ScrollView>
        </ScreenLayout>
    )
}
