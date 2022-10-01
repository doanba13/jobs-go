import { Colors } from 'assets/Colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export const LoadingScreen = ({ text }) => {
    return (
        <Spinner
            visible={true}
            textContent={text}
            textStyle={styles.spinnerTextStyle}
            overlayColor={Colors.black60}
        />
    );
};

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: Colors.white,
    },
});
