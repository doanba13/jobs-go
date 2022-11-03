import { ScreenLayout } from 'screens/components';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import WideJobCard from 'screens/components/card/WideJobCard';
import React from 'react';
import { useQuery } from 'react-query';
import { LoadingScreen } from 'components';

export const FavoriteJob = ({ route }) => {
    const {
        fetcherKey,
        apiFetcher,
        title,
        desc
    } = route.params;

    const {
        data,
        isLoading
    } = useQuery(fetcherKey, apiFetcher);

    return (
        <>
            {isLoading && <LoadingScreen/>}
            <ScreenLayout title={title} desc={desc} contentHeight={'100%'}
                          notFooter>
                <ScrollView>
                    <View width={'100%'} paddingB-80 paddingH-10>
                        <View paddingV-25>
                            {data && data.jobs.map((el) => <WideJobCard detail={el}/>)}
                        </View>
                    </View>
                </ScrollView>
            </ScreenLayout>
        </>
    )
}
