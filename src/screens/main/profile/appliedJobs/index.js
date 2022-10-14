import React from 'react';
import ScreenLayout from 'screens/components/layout/ScreenLayout';
import { Text, View } from 'react-native-ui-lib';

export const AppliedJobs = () => {
    return (
        <ScreenLayout title={'Your applied jobs'} desc={'Make your dream job comes true!'} notFooter
                      contentHeight={'100%'}>
            <View>
                <Text>Hallo</Text>
            </View>
        </ScreenLayout>
    )
}
