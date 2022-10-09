import React from 'react'
import { Picker, View } from 'react-native-ui-lib';

const { Item } = Picker

const FilterInput = ({
                         placeholder,
                         data,
                         value,
                         onChange
                     }) => {
    return (
        <View>
            <Picker value={value} onChange={onChange} placeholder={placeholder} styl>
                {data.map(({
                               value,
                               label
                           }) => <Item key={value} value={value} label={label}/>)}
            </Picker>
        </View>
    )
}

export default FilterInput
