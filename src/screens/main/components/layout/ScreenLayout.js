import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import { HeaderPath } from 'assets';
import { StyleSheet } from 'react-native';

const ScreenLayout = ({ children }) => {
    return (
        <View flex spread>
            <View style={{ height: '85%', zIndex: 1 }}>
                <View style={styles.header}>
                    <HeaderPath style={styles.path}/>
                    <Text marginB-5 fs24 textBlack font-extraBold>Suggested Jobs</Text>
                    <Text fs18 textBlack font-medium>Hey! Let's discover our suggested jobs for you.</Text>
                </View>
                {children}
            </View>
            <View style={styles.footer}/>
        </View>
    );
};

export default ScreenLayout;

const styles = StyleSheet.create({
    path: {
        position: 'absolute',
        top: 0,
        right: -15,
    },
    header: {
        height: '25%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: 'rgba(71, 220, 67, 0.34)',
        position: 'relative',
        paddingTop: 60,
        paddingHorizontal: 20,
        marginBottom: 6,
    },
    footer: {
        backgroundColor: '#A4DCC6',
        width: '130%',
        marginLeft: '-15%',
        borderTopLeftRadius: 200,
        borderTopRightRadius: 200,
        zIndex: 0,
        height: '30%',
        marginBottom: '-30%',
    },
});
