import { Carousel, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import JobCard from 'screens/components/card/JobCard';
import React from 'react';
import { scaleSize } from 'utilities';
import { useNavigation } from '@react-navigation/native';

const CardCarousel = ({
                          data,
                          title,
                          to
                      }) => {
    const navigate = useNavigation();

    return (
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
                    <TouchableOpacity backgroundColor={'transparent'} onPress={() => navigate.navigate(to)}>
                        <Text textBlack fs12 font-light>View more</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                height: scaleSize(210),
                // backgroundColor: 'green',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Carousel>
                    {data.map((job, idx) => <JobCard key={idx} jobInfo={job}/>)}
                </Carousel>
            </View>
        </>
    );
};

export default CardCarousel;
