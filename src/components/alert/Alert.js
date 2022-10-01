import React from 'react';
import { Text, View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { Colors } from 'assets';

export const Alert = ({ message, isSuccess, clearMessage, ...props }) => {
    if (!message) return null;
    return (
        <View
            {...props}
            style={[
                styles.container,
                {
                    backgroundColor: isSuccess
                        ? `${Colors.success}50`
                        : `${Colors.persianRed}50`,
                    borderColor: isSuccess ? Colors.success : Colors.persianRed,
                },
            ]}
            padding-10
        >
            <Text white>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderRadius: 5,
    },
});
