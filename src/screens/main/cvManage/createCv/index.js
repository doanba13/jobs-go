import React, { useEffect } from 'react'
import { ScreenLayout, StyledButton } from 'screens/components';
import { Text, View } from 'react-native-ui-lib';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AboutUs, ExpandRight, Heart, User } from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import { useMutation } from 'react-query';
import { cvApi } from 'apis';
import { LoadingScreen } from 'components';
import Toast from 'react-native-simple-toast';
import { resetCvStore } from 'store/createCv';

export const CreateCV = () => {
    const dispatch = useDispatch();
    const cv = useSelector(state => state.createCv);
    const {
        isLoading,
        data,
        mutate: onCreateCv
    } = useMutation(cvApi.createCv);

    useEffect(() => {
        if (data?.success) {
            console.log('run')
            Toast.show('🥰 Create CV Successfully!', Toast.LONG)
            dispatch(resetCvStore());
        }
    }, [data])

    const handlerCreateCv = () => {
        onCreateCv(cv)
    }

    return (
        <>
            {isLoading && <LoadingScreen/>}
            <ScreenLayout title={'Create new CV'} desc={'Show your skills to Employee!'} contentHeight={'100%'}
                          notFooter>
                <View backgroundColor={'#ffffff'} height={'100%'} paddingH-20>
                    <CvSection title={'Profile'} icon={<User/>} navigateTo={'CVProfile'}/>
                    <CvSection title={'Education'} icon={<Heart/>} navigateTo={'Education'}/>
                    <CvSection title={'Experience'} icon={<AboutUs/>} navigateTo={'Experience'}/>
                    <CvSection title={'Certification'} icon={<AboutUs/>} navigateTo={'Certification'}/>
                    <CvSection title={'Skill'} icon={<Heart/>} navigateTo={'Skill'}/>
                    <CvSection title={'Award'} icon={<Heart/>} navigateTo={'Award'}/>
                    <View marginT-250>
                        <StyledButton label={'Create!'} onPress={handlerCreateCv}/>
                    </View>
                </View>
            </ScreenLayout>
        </>
    );
}

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
