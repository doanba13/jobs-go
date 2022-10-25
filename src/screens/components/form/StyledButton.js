import { Button } from 'react-native-ui-lib';
import React from 'react';
import { StyleSheet } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { Fonts } from 'assets/Fonts';

export const StyledButton = ({
                                 label,
                                 onPress,
                                 bg,
                                 color,
                                 width = '100%'
                             }) => {
    return (
        <Button
            style={[style.button, {
                width
            }]}
            labelStyle={[style.font, color]}
            label={label}
            backgroundColor={bg || 'rgb(183,255,163)'}
            onPress={onPress}
        />
    );
};

const style = StyleSheet.create({
    button: {
        borderRadius: 12,
        ...boxWithShadow,
        elevation: 10,
        fontStyle: 24,
        width: '100%',
        zIndex: 10,
    },
    font: {
        fontSize: 24,
        fontFamily: Fonts.ExtraBold,
        color: '#3b3b3b',
    },
});
