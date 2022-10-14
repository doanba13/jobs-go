import React from 'react';
import { Image, Text, View } from 'react-native-ui-lib';
import { AboutUs, ExpandRight, Heart, Images, UserFill } from 'assets';
import { TouchableOpacity } from 'react-native';
import StyledButton from 'screens/components/form/StyledButton';
import { useDispatch } from 'react-redux';
import { onLogout } from 'store/auth';
import { useNavigation } from '@react-navigation/native';

export const ProfileManager = () => {
    const dispatch = useDispatch()

    return (
        <View backgroundColor={'#ffffff'} height={'100%'} paddingH-20>
            <View paddingT-40 marginB-20 row centerV>
                <Image source={Images.logo} height={80} width={80}/>
                <View marginL-5>
                    <Text marginB-2 fs19 font-bold textBlack>Nguyễn Doãn Ba</Text>
                    <Text marginT-2 fs14 font-medium black50>ba.nguyendoan133@gmail.com</Text>
                </View>
            </View>
            <ProfileOption title={'Personal Data'} icon={<UserFill/>}/>
            <ProfileOption title={'Favorite Jobs'} icon={<Heart/>} navigateTo={'FavoriteJob'}/>
            <ProfileOption title={'About Us'} icon={<AboutUs/>}/>
            <ProfileOption title={'Buy Premium'} icon={<Heart/>}/>
            <ProfileOption title={'To to..., idk'} icon={<Heart/>}/>

            <View marginT-200>
                <StyledButton onPress={() => dispatch(onLogout())}
                              label={'Log out!'} bg={'#ffa39e'}
                              color={{ color: '#f1f4ff' }}
                />
            </View>
        </View>
    )
}

const ProfileOption = ({
                           title,
                           icon,
                           navigateTo
                       }) => {
    const navi = useNavigation()

    return (
        <TouchableOpacity onPress={() => navi.navigate(navigateTo)}>
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
