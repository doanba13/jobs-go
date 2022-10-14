import { Text, View } from 'react-native-ui-lib';
import { Location } from 'assets';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { useNavigation } from '@react-navigation/native';

const JobCard = ({ jobInfo }) => {
    const {
        title,
        tags,
        company,
        location,
        salary
    } = jobInfo;

    const navi = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={() => navi.navigate('JobDetail')}>
            <View style={jobCard.container}>
                <Text paddingB-5 textBlack fs22 font-bold marginB-8>{title}</Text>
                <Text black50 fs20 font-bold>{company}</Text>
                <View paddingV-10 flex row>
                    {tags.map((tag, i) => <Text key={i} fs10 style={jobCard.categoryTag} marginR-10
                                                textBlack>{tag}</Text>)}
                </View>
                <View flex row spread centerV>
                    <View marginT-2 flex row centerV>
                        <Location/>
                        <Text marginL-5 marginB-2 fs12 textBlack>{location}</Text>
                    </View>
                    <Text fs14 font-bold textBlack>{salary}$/month</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JobCard;

const jobCard = StyleSheet.create({
    container: {
        width: '90%',
        height: '90%',
        marginHorizontal: '5%',
        backgroundColor: '#FCFCFC',
        borderRadius: 12,
        ...boxWithShadow,
        elevation: 10,
        paddingHorizontal: 10,
        paddingTop: 75,
        paddingBottom: 5,
        marginTop: 5,
    },
    categoryTag: {
        backgroundColor: 'rgb(226,245,255)',
        paddingHorizontal: 10,
        paddingTop: 2,
        height: 20,
        borderRadius: 25,
        marginRight: 5,
        ...boxWithShadow,
        elevation: 5,
    },
});
