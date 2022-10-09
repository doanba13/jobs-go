import React from 'react';
import { Incubator, View } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';

const { TextField } = Incubator;

const SearchInput = ({ placeholder }) => {
    return (
        <View marginH-20 style={{
            width: '90%',
            position: 'absolute',
            top: 140,
            zIndex: 10,
        }}>
            <TextField
                placeholder={placeholder}
                placeholderTextColor={'rgba(0,0,0,1)'}
                style={style.styledInput}
            />
        </View>
    )
}

export default SearchInput;

const style = StyleSheet.create({
    styledInput: {
        borderStyle: 'solid',
        width: '100%',
        borderWidth: 0,
        borderRadius: 12,
        paddingLeft: 10,
        backgroundColor: '#fff',
        ...boxWithShadow,
        elevation: 12,
        paddingTop: 6,
        paddingBottom: 6,
        zIndex: 1,
    },
    styledIcon: {
        position: 'absolute',
        top: 9,
        left: 10,
        zIndex: 2,
    }
});
