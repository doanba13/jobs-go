import React from 'react';
import { useQuery } from 'react-query';
import { LoadingScreen } from 'components';
import { ScreenLayout } from 'screens/components';
import WideJobCard from 'screens/components/card/WideJobCard';
import { ScrollView } from 'react-native';
import { jobApi } from 'apis';
import { View } from 'react-native-ui-lib';

export const FavoritedJob = () => {
    const { data, isLoading } = useQuery(
        'favorited-job',
        jobApi.getJobFavorite,
    );

    return (
        <>
            {isLoading && <LoadingScreen />}
            <ScreenLayout
                title={'Favorite jobs'}
                desc={'Here was jobs you like!'}
                contentHeight={'100%'}
                notFooter
            >
                <ScrollView>
                    <View width={'100%'} paddingB-80 paddingH-10>
                        <View paddingV-25>
                            {data &&
                                data.map(el => (
                                    <WideJobCard key={el.id} detail={el} />
                                ))}
                        </View>
                    </View>
                </ScrollView>
            </ScreenLayout>
        </>
    );
};
