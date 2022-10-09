import { Text, View } from 'react-native-ui-lib';
import React from 'react'
import ScreenLayout from 'screens/components/layout/ScreenLayout';
import { ScrollView } from 'react-native';
import WideJobCard from 'screens/components/card/WideJobCard';
import SearchInput from 'screens/main/search/component/SearchInput';

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
        <ScreenLayout title={'Search Results'} desc={'Find your dream job!'} contentHeight={'100%'} notFooter>
            <SearchInput placeholder={'UX/UI Designer'}/>
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
