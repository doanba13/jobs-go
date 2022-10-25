import React from 'react'
import { ScreenLayout } from 'screens/components';
import { Text, View } from 'react-native-ui-lib';

export const ListCV = () => {
    return (
        <ScreenLayout contentHeight={'100%'} title={'All your CV'} desc={'Select a CV to see detail or update info'}
                      notFooter>
            <View>
                <Text>
                    Your CV List willl be here
                </Text>
            </View>
        </ScreenLayout>
    )
}
