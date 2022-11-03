import React from 'react'
import { ScreenLayout, CvCard } from 'screens/components';
import { View } from 'react-native-ui-lib';
import { useQuery } from 'react-query';
import { cvApi } from 'apis';
import { LoadingScreen } from 'components';

export const ListCV = ({ navigation }) => {
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
                                                                                onPress={() => navigation.navigate('CvDetail', { id: data_cv_id })}/>)}
            </View>
        </ScreenLayout>
    )
}
