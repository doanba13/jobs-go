import React from 'react'
import { Text, View } from 'react-native-ui-lib';
import { Location } from 'assets';
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

const WideJobCard = ({ detail }) => {
    const {
        title,
        quantity,
        company,
        location,
        salary_from,
        salary_to,
        id
    } = detail

    const navi = useNavigation()
    const Icon = randomCatalog();

    return (
        <TouchableWithoutFeedback onPress={() => navi.navigate('JobDetail', { id })}>
            <View style={cardStyle.container}>
                <Icon style={cardStyle.logo}/>
                <Text paddingT-10 textBlack fs14 font-bold numberOfLines={1}>{title}</Text>
                <Text black50 fs12 font-bold>{company?.name || title}</Text>
                <Text marginT-5 textBlack fs12 font-medium>{convertSalary(salary_from, salary_to)} Mil/month</Text>
                <View marginT-2 flex row centerV spread>
                    <View row>
                        <Location/>
                        <Text black50 fs10>{location || 'Hanoi'}</Text>
                    </View>
                    <Text fs10 style={cardStyle.categoryTag} textBlack>{quantity} applied</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default WideJobCard;

const cardStyle = StyleSheet.create({
    container: {
        position: 'relative',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 80,
        paddingRight: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        ...boxWithShadow,
        elevation: 12,
        zIndex: 1,
        marginBottom: 10,
    },
    logo: {
        position: 'absolute',
        left: 20,
        top: 35,
        zIndex: 2,
        transform: [{
            scale: 1.7
        }]
    },
    timeLeft: {
        position: 'absolute',
        right: 15,
        top: 35,
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
})
