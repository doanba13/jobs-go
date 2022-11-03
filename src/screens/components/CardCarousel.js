import { Carousel, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import JobCard from 'screens/components/card/JobCard';
import React from 'react';
import { scaleSize } from 'utilities';
import { useNavigation } from '@react-navigation/native';
import { useQuery } from 'react-query';
import { LoadingScreen } from 'components';

const CardCarousel = ({
                          title,
                          params,
                          apiFetcher,
                          fetcherKey
                      }) => {
    const navigate = useNavigation();

    const {
        data,
        isLoading
    } = useQuery(fetcherKey, apiFetcher);

    return (
        <>
            {isLoading && <LoadingScreen/>}
            {data && (
                <>
                    <View style={{
                        height: '5%',
                        marginTop: 10,
                        paddingHorizontal: '3%',
                    }}>
                        <View flex row spread centerV>
                            <Text textBlack fs20 font-medium>
                                {title}
                            </Text>
                            <TouchableOpacity backgroundColor={'transparent'}
                                              onPress={() => navigate.navigate('FavoriteJob', {
                                                  ...params,
                                                  fetcherKey,
                                                  apiFetcher
                                              })}>
                                <Text textBlack fs12 font-light>{params ? 'View more' : ''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        height: scaleSize(210),
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Carousel>
                            {data.jobs.map((job, idx) => <JobCard key={idx} jobInfo={job}/>)}
                        </Carousel>
                    </View>
                </>
            )}
        </>
    );
};

export default CardCarousel;
