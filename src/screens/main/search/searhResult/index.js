import { Text, View } from 'react-native-ui-lib';
import React from 'react'
import { ScreenLayout } from 'screens/components';
import { ScrollView } from 'react-native';
import { useQuery } from 'react-query';
import { jobApi } from 'apis';
import { LoadingScreen } from 'components';
import WideJobCard from 'screens/components/card/WideJobCard';
import { NotFound } from 'assets';

const convertUrl = (key, data) => {
    let query = '';
    key.forEach(el => {
        if (data[el]) query += `${el}=${data[el].value}&`
    })
    return query.slice(0, -1);
}

export const SearchResult = ({ route }) => {
    const queryParams = route.params;
    const queryKey = Object.keys(queryParams);

    const {
        data,
        isLoading
    } = useQuery(['search-job', queryParams], () => jobApi.searchJob(convertUrl(queryKey, queryParams)))
    console.log(data);

    return (
        <ScreenLayout title={'Search Results'} desc={'Find your dream job!'} contentHeight={'100%'} notFooter>
            <ScrollView>
                <View width={'100%'} paddingT-10 paddingB-80 paddingH-10>
                    <Text textBlack fs18 font-medium>
                        Hey! See what we find for you
                    </Text>
                    {isLoading && <LoadingScreen/>}
                    {data && (
                        data.jobs.length
                            ? <View paddingV-25>
                                {data.jobs.map(detail => <WideJobCard detail={detail}/>)}
                            </View>
                            : <>
                                <NotFound/>
                                <Text fs18 font-bold center style={{ marginTop: -100 }}>Sorry! We not found any job
                                    available.</Text>
                            </>
                    )}
                </View>
            </ScrollView>
        </ScreenLayout>
    )
}
