import React, { useState } from 'react';
import { Text, View } from 'react-native-ui-lib';
import { Location, Character3 } from 'assets';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { Colors } from 'assets/Colors';
import { StyledButton } from 'screens/components';
import { LoadingScreen } from 'components';
import { useMutation, useQuery } from 'react-query';
import { jobApi } from 'apis';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFavoriteJob } from 'utilities';

const convertSalary = (from, to) => {
    const convertedFrom = from.toString().slice(0, from.toString().length - 6) || 'Up to';
    const convertedTo = to.toString().slice(0, to.toString().length - 6);
    return `${convertedFrom} - ${convertedTo}`
}

export const JobDetail = ({
                              route,
                              navigation
                          }) => {
    const [tab, setTab] = useState(1);
    const { id } = route.params;

    const {
        onFavoriteClick,
        isFav
    } = useFavoriteJob(id);

    console.log(isFav)

    const {
        data,
        isLoading
    } = useQuery(['get-job-detail', id], () => jobApi.getjobDetail(id))

    return (
        <>
            {isLoading && <LoadingScreen/>}
            {data &&
                <View backgroundColor={'#f5f5f5'} height={'100%'}>
                    <View style={styles.container}>
                        <View paddingB-40 width={'100%'} row center>
                            <View width={'70%'}>
                                <Text style={{ width: '100%' }} numberOfLines={2} textBlack fs24
                                      font-extraBold>{data.title}</Text>
                                <Text black50 fs16 font-bold>{data.company.name}</Text>
                            </View>
                            <View marginB-20 marginL-40 style={styles.companyLogo}>
                                <TouchableOpacity onPress={onFavoriteClick}>
                                    <Ionicons name={isFav ? 'heart' : 'heart-outline'} color={'red'} size={60}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View row centerV marginB-20>
                            <Text style={styles.tag} font-medium textBlack>{data.quantity} employee</Text>
                            <Text marginL-30>{data.created_at.slice(0, 10)}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text fs30 font-light
                                  textBlack>{convertSalary(data.salary_from, data.salary_to)} Triệu</Text>
                            <Text black50>Per month</Text>
                            <View marginT-10 row centerV>
                                <Location/>
                                <Text marginL-5 marginB-2>Cau Giay, Hanoi</Text>
                            </View>
                            <Character3 style={styles.character}/>
                        </View>
                        <View paddingH-35 marginT-20 row spread>
                            <Text style={tab === 1 ? styles.active : styles.inactive} onPress={() => setTab(1)}>Job
                                Description</Text>
                            <Text style={tab === 2 ? styles.active : styles.inactive}
                                  onPress={() => setTab(2)}>Benefit</Text>
                            <Text style={tab === 3 ? styles.active : styles.inactive} onPress={() => setTab(3)}>Company
                                info</Text>
                        </View>
                    </View>
                    <View style={styles.descContainer}>
                        <ScrollView>
                            {tab === 1 && <Text textAlign={'justify'}>
                                {data.description}
                                {data.job_requirement}
                            </Text>}
                            {tab === 2 && <Text textAlign={'justify'}>
                                {data.job_benefit}
                            </Text>}
                            {tab === 3 && <Text textAlign={'justify'}>
                                {data.company.description}
                            </Text>}
                        </ScrollView>
                    </View>
                    <View paddingH-40>
                        <StyledButton onPress={() => navigation.navigate('ApplyJob', { id })} label={'Apply now'}/>
                    </View>
                </View>}
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingHorizontal: 15,
        paddingTop: 30,
        paddingBottom: 15,
        backgroundColor: '#fff',
    },
    descContainer: {
        height: '40%',
        paddingHorizontal: 20,
        paddingBottom: 30,
        paddingTop: 10,

    },
    companyLogo: {
        width: '20%'
    },
    infoContainer: {
        position: 'relative',
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 15,
        paddingVertical: 15,
        ...boxWithShadow,
        elevation: 12,
        borderRadius: 20,
    },
    tag: {
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#D6F5FF',
    },
    character: {
        position: 'absolute',
        right: -20,
        bottom: -10
    },
    active: {
        borderBottomWidth: 2,
        fontWeight: '600',
        borderColor: '#83ea9a'
    },
    inactive: {
        color: Colors.black45,
    }
})
