import { ScreenLayout } from 'screens/components';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import WideJobCard from 'screens/components/card/WideJobCard';
import React from 'react';
import { useQuery } from 'react-query';
import { LoadingScreen } from 'components';
import { jobApi } from 'apis';
import { NotFound } from 'assets';

export const FavoriteJobList = () => {
    const {
        data,
        isLoading
    } = useQuery('favorite-job', jobApi.getFavoriteJob);

    console.log(data)

    return (
        <>
            {isLoading && <LoadingScreen/>}
            <ScreenLayout title={'Favorite Jobs'} desc={'Discover your favorite jobs!'} contentHeight={'100%'}
                          notFooter>
                <ScrollView>
                    <View width={'100%'} paddingB-80 paddingH-10>
                        <View paddingV-25>
                            {
                                data
                                    ? <>
                                        {data.map(detail => <WideJobCard key={detail.id} detail={detail}/>)}
                                    </>
                                    : <>
                                        <NotFound/>
                                        <Text fs18 font-bold center style={{ marginTop: -100 }}>Ops! Go to home and discover
                                            more jobs</Text>
                                    </>
                            }
                        </View>
                    </View>
                </ScrollView>
            </ScreenLayout>
        </>
    )
}
