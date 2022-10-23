import React from 'react'
import { Text, View } from 'react-native-ui-lib';
import { Location, Reddit } from 'assets';
import { StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { useNavigation } from '@react-navigation/native';
import { randomCatalog } from 'utilities';

const WideJobCard = ({ detail }) => {
    const {
        title,
        company,
        salary,
        location,
        tags,
        duration
    } = detail

    const id = 667371;

    const navi = useNavigation()
    const Icon = randomCatalog();

    return (
        <TouchableWithoutFeedback onPress={() => navi.navigate('JobDetail', { id })}>
            <View style={cardStyle.container}>
                <Icon style={cardStyle.logo}/>
                <Text paddingT-10 textBlack fs14 font-bold>{title}</Text>
                <Text black50 fs12 font-bold>{company} | {salary}$</Text>
                <View marginT-2 flex row centerV>
                    <Location/>
                    <Text black50 fs10>{location}</Text>
                </View>
                <View paddingV-10 flex row>
                    {
                        tags.map((tag, i) =>
                            <Text key={i} fs10 style={cardStyle.categoryTag} marginR-10
                                  textBlack>{tag}</Text>)
                    }
                </View>
                <Text style={cardStyle.timeLeft} fs12 textBlack>{duration} days left!</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default WideJobCard;

const cardStyle = StyleSheet.create({
    container: {
        position: 'relative',
        paddingTop: 10,
        paddingBottom: 5,
        paddingLeft: 80,
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
        top: 30,
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
