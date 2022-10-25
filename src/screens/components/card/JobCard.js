import { Text, View } from 'react-native-ui-lib';
import { Location } from 'assets';
import React from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { useNavigation } from '@react-navigation/native';
import { randomCatalog } from 'utilities';

const convertSalary = (from, to) => {
    const convertedFrom = from.toString().slice(0, from.toString().length - 6) || 'Up to';
    const convertedTo = to.toString().slice(0, to.toString().length - 6);

    console.log(from.toString())

    return `${convertedFrom} - ${convertedTo}`
}

const JobCard = ({ jobInfo }) => {
    const {
        title,
        quantity,
        company,
        location,
        salary_from,
        salary_to,
        id
    } = jobInfo;

    const navi = useNavigation()

    const Icon = randomCatalog();

    return (
        <TouchableWithoutFeedback onPress={() => navi.navigate('JobDetail', { id })}>
            <View style={jobCard.container}>
                <Icon style={jobCard.logo}/>
                <Text paddingB-5 textBlack fs19 font-bold marginB-8>{title}</Text>
                <Text black50 fs16 font-bold>{company.name}</Text>
                <View paddingV-10 flex row>
                    <Text fs10 style={jobCard.categoryTag} marginR-10 textBlack>
                        {quantity} employee
                    </Text>
                </View>
                <View flex row spread centerV>
                    <View marginT-2 flex row centerV>
                        <Location/>
                        <Text marginL-5 marginB-2 fs12 textBlack>{location || 'Hanoi'}</Text>
                    </View>
                    <Text fs14 font-bold
                          textBlack>{convertSalary(salary_from, salary_to)} Mil/month</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default JobCard;

const jobCard = StyleSheet.create({
    container: {
        width: '90%',
        height: '91%',
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
    logo: {
        position: 'absolute',
        left: 20,
        top: 20,
        zIndex: 2,
        transform: [{
            scale: 1.7
        }]
    },
});
