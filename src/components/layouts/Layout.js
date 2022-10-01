import { Images } from 'assets';
import React from 'react';
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Platform,
} from 'react-native';
import { View } from 'react-native-ui-lib';
import { scaleSize } from 'utilities';

export const Layout = ({ children, bg2, isScroll }) => {
    return (
        <ImageBackground
            source={bg2 ? Images.background2 : Images.background1}
            resizeMode="cover"
            style={styles.container}
        >
            {isScroll ? (
                <ScrollView width="100%" height="100%">
                    <View style={styles.main} width="100%" height="100%">
                        {children}
                    </View>
                </ScrollView>
            ) : (
                <View style={styles.main} width="100%" height="100%">
                    {children}
                </View>
            )}
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        paddingTop: Platform.OS === 'ios' ? scaleSize(80) : scaleSize(30),
    },
});
