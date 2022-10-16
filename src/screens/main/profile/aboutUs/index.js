import React from 'react'
import { Image, Text, View } from 'react-native-ui-lib';
import { Images } from 'assets';

export const AboutUs = () => {
    return (
        <View backgroundColor={'#ffffff'} height={'100%'} paddingL-40 centerV>
            <View center>
                <Image marginB-40 marginR-30 source={Images.logo2} width={240} height={120}/>
            </View>
            <View paddingV-10>
                <Text marginB-2 fs19 font-bold textBlack>Nguyễn Doãn Ba - FE</Text>
                <Text marginT-2 fs14 font-medium black50>ba.nguyendoan133@gmail.com </Text>
                <Text marginT-2 fs14 font-medium black50>github.com/doanba13</Text>
            </View>
            <View paddingV-10>
                <Text marginB-2 fs19 font-bold textBlack>Nguyễn Văn Hiếu - BE</Text>
                <Text marginT-2 fs14 font-medium black50>github.com/halahieunguyen</Text>
            </View>
            <View paddingV-10>
                <Text marginB-2 fs19 font-bold textBlack>Trần Thị Kim Liên</Text>
                <Text marginT-2 fs14 font-medium black50>bottom text</Text>
            </View>
        </View>
    )
}
