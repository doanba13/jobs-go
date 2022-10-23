import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Incubator, Text, TouchableOpacity } from 'react-native-ui-lib';
import { Search, Character1, Character2 } from 'assets';
import { boxWithShadow, footer } from 'utilities/boxShadow';
import CardCarousel from 'screens/components/CardCarousel';
import { useNavigation } from '@react-navigation/native';
import { jobApi } from 'apis';

const { TextField } = Incubator;

const data = [
    {
        title: 'FrontEnd Developer',
        company: 'Reddit.co',
        tags: ['Senior', 'Full-time', 'Developer'],
        location: 'Cau Giay, Hanoi',
        salary: '2000-5000',
    },
    {
        title: 'BackEnd Developer',
        company: 'Giao hàng tiết kiệm',
        tags: ['Junior', 'Part-time', 'Senior'],
        location: 'Cau Giay, Hanoi',
        salary: 'Upto 8000',
    },
    {
        title: 'Project Manager',
        company: 'Viettel',
        tags: ['Full-time'],
        location: 'Hoan Kiem, Hanoi',
        salary: '1500-2000',
    },
    {
        title: 'Accountance',
        company: 'JWC.Co',
        tags: ['Full-time', 'Leader'],
        location: 'Hoan Kiem, Hanoi',
        salary: '2000-5000',
    },
    {
        title: 'DevOps',
        company: 'Facebook',
        tags: ['Senior', 'Full-time', 'Developer'],
        location: 'My Tho',
        salary: '200',
    },
];

export const HomeScreen = ({ navigation }) => {
    const { t } = useTranslation();
    const navi = useNavigation()

    return (
        <View style={{
            backgroundColor: '#EFFCFF',
            height: '100%',
            position: 'relative'
        }}>
            <View
                style={{
                    paddingHorizontal: '5%',
                    paddingTop: 50,
                    // backgroundColor: 'green',
                }}>
                <Text fs35 textBlack font-extraBold>
                    Hello
                </Text>
                <Text fs20 textBlack font-medium>
                    Have a good day!
                </Text>
                <View marginT-40 style={{
                    width: '100%',
                    position: 'relative'
                }}>
                    <Character1 style={style.character}/>
                    <TouchableOpacity onPress={() => navi.navigate('SearchFilter')}>
                        <Search style={style.styledIcon}/>
                        <View style={style.styledInput}>
                            <Text>Let's find your dream job!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <CardCarousel apiFetcher={jobApi.getAllJob} fetcherKey={'get-all-job'} to={'FavoriteJob'} data={data}
                          title={'Feature jobs'}/>
            <View style={{
                paddingHorizontal: '3%',
            }}>
                <Text textBlack fs20 font-medium>
                    Suggest job for you!
                </Text>
            </View>
            <View style={{
                paddingHorizontal: '5%',
                paddingVertical: 10,
                // backgroundColor: 'red',
            }}>
                <View style={suggested.container}>
                    <Character2 style={suggested.character}/>
                    <View style={{ width: '60%' }}>
                        <Text fs22 textBlack font-bold>A lot of job is waiting for you to discover!</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            marginTop: 25,
                            width: '40%'
                        }}
                        backgroundColor={'transparent'}
                        onPress={() => navi.navigate('Suggest')}
                    >
                        <Text color={'#94C9A9'} fs14 font-light>View more</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={suggested.footer}/>
        </View>
    );
};

const suggested = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        ...boxWithShadow,
        elevation: 12,
        paddingHorizontal: 10,
        paddingVertical: 14,
        zIndex: 2,
    },
    character: {
        position: 'absolute',
        right: -50,
        bottom: -51,
    },
    footer,
});

const style = StyleSheet.create({
    styledInput: {
        borderStyle: 'solid',
        width: '100%',
        borderWidth: 0,
        borderRadius: 12,
        paddingLeft: 40,
        backgroundColor: '#fff',
        ...boxWithShadow,
        elevation: 12,
        paddingVertical: 10,
        zIndex: 1,
    },
    styledIcon: {
        position: 'absolute',
        top: 9,
        left: 10,
        zIndex: 2,
    },
    character: {
        position: 'absolute',
        bottom: -5,
        right: -20,
    },
});
