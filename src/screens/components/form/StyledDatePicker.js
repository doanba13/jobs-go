import React from 'react';
import { DateTimePicker, Text, View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { Colors } from 'assets/Colors';

export const StyledDatePicker = ({
                                     placeholder,
                                     type,
                                     Icon,
                                     error,
                                     onBlur,
                                     onChange,
                                     value
                                 }) => {
    return (
        <View paddingT-5 style={{ position: 'relative' }}>
            <DateTimePicker
                placeholder={placeholder}
                placeholderTextColor={'rgba(0,0,0,0.5)'}
                style={style.styledInput}
                secureTextEntry={type === 'password'}
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onBlur={onBlur}
                onChange={(date) => onChange(date)}
            />
            <Icon style={style.icon}/>
            <Text marginV-5 marginL-40 fs12 color={Colors.error} font-light>{error}&nbsp;</Text>
        </View>
    );
};

const style = StyleSheet.create({
    styledInput: {
        borderStyle: 'solid',
        width: '100%',
        borderWidth: 0,
        borderRadius: 12,
        paddingLeft: 40,
        backgroundColor: '#fff',
        ...boxWithShadow,
        elevation: 13,
        paddingTop: 6,
        paddingBottom: 6,
        zIndex: 1,
    },
    icon: {
        position: 'absolute',
        top: 13,
        left: 10,
        zIndex: 2,
    },
});
