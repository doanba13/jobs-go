import React from 'react';
import CardCarousel from 'screens/components/CardCarousel';
import { ScreenLayout } from 'screens/components';
import { ScrollView } from 'react-native';
import { View } from 'react-native-ui-lib';
import { jobApi } from 'apis';

export const SuggestedJob = () => {
    return (
        <ScreenLayout title={'Suggested Jobs'} desc={'Hey! Let\'s discover our suggested jobs for you.'}
                      contentHeight={'100%'}>
            <ScrollView>
                <View paddingB-200>
                    <CardCarousel
                        apiFetcher={jobApi.getItJob}
                        fetcherKey={'get-it-job'}
                        params={{
                            title: 'IT jobs',
                            desc: 'Top IT jobs are here!'
                        }}
                        title={'IT jobs'}
                    />
                    <CardCarousel
                        apiFetcher={jobApi.getManagerJob}
                        fetcherKey={'get-manager-job'}
                        params={{
                            title: 'Manager jobs',
                            desc: 'Challenger your career!'
                        }}
                        title={'Manager jobs'}
                    />
                    <CardCarousel
                        apiFetcher={jobApi.getInternJob}
                        fetcherKey={'get-intern-job'}
                        params={{
                            title: 'Internship jobs',
                            desc: 'Start your career!'
                        }}
                        title={'Internship jobs'}
                    />
                </View>
            </ScrollView>
        </ScreenLayout>
    );
};
