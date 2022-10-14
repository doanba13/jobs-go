import ScreenLayout from 'screens/components/layout/ScreenLayout';
import { ScrollView } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import WideJobCard from 'screens/components/card/WideJobCard';
import React from 'react';

const data = {
    title: 'Senior Frontend Developer',
    company: 'Facebook',
    salary: '4000-5000',
    location: 'Cau Giay, Hanoi',
    tags: ['Senior', 'Full-time', 'Developer'],
    duration: 2
}

export const FavoriteJob = () => {
    return (
        <ScreenLayout title={'Favorite Jobs'} desc={'Apply your most suitable job!'} contentHeight={'100%'} notFooter>
            <ScrollView>
                <View width={'100%'} paddingT-10 paddingB-80 paddingH-10>
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
