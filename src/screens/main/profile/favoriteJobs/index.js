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
        desc,
        type
    } = route.params;

    console.log(type)

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
                        {data &&
                            <View paddingV-25>
                                {type !== 'APPLY' && data.jobs.map((el) => <WideJobCard detail={el}/>)}
                                {type === 'APPLY' && data.map((el) => <WideJobCard detail={el.job}/>)}
                            </View>
                        }
                    </View>
                </ScrollView>
            </ScreenLayout>
        </>
    )
}
