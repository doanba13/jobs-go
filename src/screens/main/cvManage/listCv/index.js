import React, { useMemo } from 'react'
import { ScreenLayout } from 'screens/components';
import { Text, View } from 'react-native-ui-lib';
import { randomCatalog } from 'utilities';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { ExpandRight } from 'assets';
import { useQuery } from 'react-query';
import { cvApi } from 'apis';
import { LoadingScreen } from 'components';
import { useNavigation } from '@react-navigation/native';

export const ListCV = () => {
    const {
        data: resData,
        isLoading
    } = useQuery('list-all-cv', cvApi.listAllCv);

    return (
        <ScreenLayout contentHeight={'100%'} title={'All your CV'} desc={'Select a CV to see detail or update info'}
                      notFooter>
            <View paddingH-10>
                {isLoading ? <LoadingScreen/> : resData.data.map(({
                                                                      title,
                                                                      data_cv_id
                                                                  }) => <CvCard key={data_cv_id} title={title}
                                                                                id={data_cv_id}/>)}
            </View>
        </ScreenLayout>
    )
}

const CvCard = ({
                    title,
                    id
                }) => {
    const navi = useNavigation();
    const Icon = useMemo(() => randomCatalog(), []);

    return (
        <TouchableWithoutFeedback onPress={() => navi.navigate('CvDetail', { id })}>
            <View style={styles.container} marginT-15 paddingV-15 paddingR-10 paddingL-15 row spread centerV>
                <View row centerV>
                    <Icon style={styles.icon}/>
                    <Text fs16 textBlack font-medium marginL-15>
                        {title}
                    </Text>
                </View>
                <ExpandRight/>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        ...boxWithShadow,
        elevation: 15,
        backgroundColor: '#f5f5f5',
        borderRadius: 15,
    },
    icon: {
        transform: [{
            scale: 1.2
        }],
    }
})
