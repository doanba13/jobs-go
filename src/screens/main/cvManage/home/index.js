import React from 'react'
import { ScreenLayout } from 'screens/components';
import { AboutUs, ExpandRight, Heart } from 'assets';
import { Text, View } from 'react-native-ui-lib';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

export const HomeCv = () => {
    return (
        <ScreenLayout title={'Manage your CV'} desc={'Take a look before apply new job!'} contentHeight={'100%'}
                      notFooter>
            <View backgroundColor={'#ffffff'} height={'100%'} paddingH-20>
                <CvSection title={'List all CV'} icon={<Heart/>} navigateTo={'ListCv'}/>
                <CvSection title={'Create new!'} icon={<AboutUs/>} navigateTo={'CreateCv'}/>
            </View>
        </ScreenLayout>
    )
};

const CvSection = ({
                       title,
                       icon,
                       navigateTo,
                       params
                   }) => {
    const navi = useNavigation()

    return (
        <TouchableOpacity onPress={() => navi.navigate(navigateTo, params)}>
            <View padding-10 row spread centerV>
                <View row centerV>
                    <View style={{ borderRadius: 12 }} center width={35} height={35}
                          backgroundColor={'#efefef'}>{icon}</View>
                    <Text marginL-10 fs16 font-medium>{title}</Text>
                </View>
                <ExpandRight/>
            </View>
        </TouchableOpacity>
    )
}
