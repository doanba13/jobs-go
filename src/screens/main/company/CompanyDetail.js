import React, { useMemo, useState } from 'react';
import { Text, View } from 'react-native-ui-lib';
import { ScrollView, StyleSheet } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { Colors } from 'assets/Colors';
import { StyledButton } from 'screens/components';
import { LoadingScreen, Modal } from 'components';
import { randomCatalog } from 'utilities';
import { useQuery } from 'react-query';
import { companyApi } from 'apis';

export const CompanyDetail = ({
                                  route,
                                  navigation
                              }) => {
    const Icon = useMemo(() => randomCatalog(), [])
    const { id } = route.params;

    const {
        data,
        isLoading
    } = useQuery(['get-company-detail', id], () => companyApi.getCompanyDetail(id))

    return (
        <>
            {isLoading && <LoadingScreen/>}
            {data &&
                <View backgroundColor={'#f5f5f5'} height={'100%'}>
                    <View style={styles.container}>
                        <View paddingB-40 width={'100%'}>
                            <View width={'70%'}>
                                <Text style={{ width: '100%' }} textBlack fs24 font-extraBold>{data.name}</Text>
                            </View>
                            <Icon style={styles.companyLogo}/>
                        </View>
                        <Text black50 fs14 font-medium>{data.short_description}</Text>
                        <View row centerV marginB-20 marginT-15>
                            <Text style={styles.tag} font-medium textBlack>{data.size}00 employee</Text>
                        </View>
                    </View>
                    <View style={styles.descContainer}>
                        <ScrollView>
                            <Text textAlign={'justify'}>
                                {data.description}
                            </Text>
                        </ScrollView>
                    </View>
                    <View paddingH-40>
                        <StyledButton onPress={() => navigation.navigate('CompanyJob', { id })} label={'View Jobs'}/>
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
        position: 'absolute',
        right: 15,
        top: 0,
        transform: [{
            scale: 1.7
        }]
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
