import { Text, View } from 'react-native-ui-lib';
import React, { useEffect, useRef, useState } from 'react';
import { StyledButton, StyledInput, ScreenLayout } from 'screens/components';
import { ScrollView, TouchableOpacity } from 'react-native';
import { User } from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import { setCvCertification } from 'store/createCv';
import { cloneDeep } from 'lodash';

const fieldProps = {
    start: '',
    name: ''
}

export const Certification = ({ navigation }) => {
    const dispatch = useDispatch();
    const { certification } = useSelector(state => state.createCv)
    const [fields, setField] = useState([cloneDeep(fieldProps)]);
    const scrollRef = useRef();

    useEffect(() => {
        if (certification.length > 0) {
            setField(cloneDeep(certification))
        }
    }, [certification])

    const handleFormChange = (idx, e, name) => {
        const data = [...fields];
        data[idx][name] = e;
        setField(data)
    }

    const addFields = () => {
        setField([...fields, cloneDeep(fieldProps)])
        scrollRef.current.scrollToEnd({ animated: true })
    }

    const removeFields = (index) => {
        if (fields.length === 1) return;
        const data = [...fields];
        data.splice(index, 1)
        setField(data)
    }

    return (
        <ScreenLayout contentHeight={'100%'} desc={'Describe your awards!'} title={'Awards'} notFooter>
            <ScrollView ref={scrollRef}>
                {fields.map((field, idx) => (
                    <View key={idx} paddingH-10 paddingB-15>
                        <StyledInput placeholder={'Start'} value={field.start} name={'start'}
                                     onChange={event => handleFormChange(idx, event, 'start')} Icon={User}/>

                        <StyledInput placeholder={'Name'} value={field.name} name={'name'}
                                     onChange={event => handleFormChange(idx, event, 'name')} Icon={User}/>

                        <TouchableOpacity onPress={removeFields}>
                            <Text
                                style={{
                                    width: '99%',
                                    textAlign: 'right',
                                    marginTop: 5
                                }}
                            >
                                Remove section
                            </Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </ScrollView>
            <View paddingH-30 paddingV-10 backgroundColor={'rgba(0,0,0,0)'} row spread>
                <StyledButton onPress={addFields} label={'More'} width={'45%'} bg={'#f2f2f2'}/>
                <StyledButton
                    onPress={() => {
                        dispatch(setCvCertification(fields))
                        navigation.goBack();
                    }}
                    label={'Submit'}
                    width={'45%'}/>
            </View>
        </ScreenLayout>
    )
}
