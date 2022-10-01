import { Colors } from 'assets/Colors';
import { scaleSize } from 'utilities/responsive';
import React from 'react';
import { StyleSheet } from 'react-native';
import { TextField, View, Text } from 'react-native-ui-lib';

export const StyledTextInput = ({
    placeholder,
    onChange,
    value,
    onBlur,
    icon,
    type,
    error,
}) => {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.icon}>{icon}</View>
                <TextField
                    secureTextEntry={type === 'password'}
                    hideUnderline
                    style={styles.textInput}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholder={placeholder}
                />
            </View>
            {error && (
                <Text error marginL-22 marginT-2>
                    {error}
                </Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black25,
        height: scaleSize(50),
        borderRadius: 100,
        position: 'relative',
    },
    icon: {
        position: 'absolute',
        top: '50%',
        transform: [
            { translateY: scaleSize(-6.5) },
            { translateX: scaleSize(20) },
        ],
    },
    textInput: {
        backgroundColor: Colors.black25,
        borderRadius: 100,
        height: scaleSize(50),
        paddingLeft: scaleSize(53),
        paddingRight: scaleSize(20),
        color: Colors.white,
    },
});
