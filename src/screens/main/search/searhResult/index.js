import { Incubator, Text, View } from 'react-native-ui-lib';
import React from 'react'
import ScreenLayout from 'screens/components/layout/ScreenLayout';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { Location, Reddit } from 'assets';
import WideJobCard from 'screens/components/card/WideJobCard';

const { TextField } = Incubator;

const data = {
    title: 'Senior Frontend Developer',
    company: 'Facebook',
    salary: '4000-5000',
    location: 'Cau Giay, Hanoi',
    tags: ['Senior', 'Full-time', 'Developer'],
    duration: 2
}

export const SearchResult = () => {
    return (
        <ScreenLayout title={'Search Results'} desc={'Find your dream job!'} contentHeight={'90%'}>
            <View marginH-20 style={{
                width: '90%',
                position: 'absolute',
                top: 140,
                zIndex: 10,
            }}>
                <TextField
                    placeholder={'UX/UI Designer'}
                    placeholderTextColor={'rgba(0,0,0,1)'}
                    style={style.styledInput}
                />
            </View>
            <ScrollView>
                <View width={'100%'} paddingT-35 paddingB-80 paddingH-10>
                    <Text textBlack fs18 font-medium>
                        Hey! See what we find for you
                    </Text>
                    <View paddingV-25>
                        <WideJobCard detail={data}/>
                        <WideJobCard detail={data}/>
                        <WideJobCard detail={data}/>
                        <WideJobCard detail={data}/>
                        <WideJobCard detail={data}/>
                    </View>
                </View>
            </ScrollView>
        </ScreenLayout>
    )
}

const style = StyleSheet.create({
    styledInput: {
        borderStyle: 'solid',
        width: '100%',
        borderWidth: 0,
        borderRadius: 12,
        paddingLeft: 10,
        backgroundColor: '#fff',
        ...boxWithShadow,
        elevation: 12,
        paddingTop: 6,
        paddingBottom: 6,
        zIndex: 1,
    },
    styledIcon: {
        position: 'absolute',
        top: 9,
        left: 10,
        zIndex: 2,
    }
});
