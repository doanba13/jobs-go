import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import { Footer, HeaderPath } from 'assets';
import { StyleSheet } from 'react-native';

const ScreenLayout = ({
                          children,
                          title,
                          desc,
                          contentHeight,
                          notFooter
                      }) => {
    return (
        <View flex spread>
            <View style={{
                height: contentHeight,
                zIndex: 1
            }}>
                <View style={styles.header}>
                    <HeaderPath style={styles.path}/>
                    <Text marginB-5 fs24 textBlack font-extraBold>{title}</Text>
                    <Text fs18 textBlack font-medium>{desc}</Text>
                </View>
                {children}
            </View>
            {!notFooter && <Footer style={styles.footer}/>}
        </View>
    );
};

export default ScreenLayout;

const styles = StyleSheet.create({
    path: {
        position: 'absolute',
        top: 0,
        right: -20,
    },
    header: {
        height: '22%',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: 'rgba(71, 220, 67, 0.34)',
        position: 'relative',
        paddingTop: 40,
        paddingHorizontal: 20,
        marginBottom: 6,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
    },
});
