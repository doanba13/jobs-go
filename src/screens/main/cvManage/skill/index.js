import { Text, View } from 'react-native-ui-lib';
import React, { useEffect, useRef, useState } from 'react';
import { StyledButton, StyledInput, ScreenLayout } from 'screens/components';
import { ScrollView, TouchableOpacity } from 'react-native';
import { User } from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import { setCvSkill } from 'store/createCv';
import { cloneDeep } from 'lodash';

const fieldProps = {
    title: '',
    description: ''
}

export const SkillsSection = ({ navigation }) => {
    const dispatch = useDispatch();
    const { skillrate } = useSelector(state => state.createCv)
    const [fields, setField] = useState([cloneDeep(fieldProps)]);
    const scrollRef = useRef();

    useEffect(() => {
        if (skillrate.length > 0) {
            setField(cloneDeep(skillrate))
        }
    }, [skillrate])

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
        <ScreenLayout contentHeight={'100%'} desc={'Describe your skills!'} title={'Skills'} notFooter>
            <ScrollView ref={scrollRef}>
                {fields.map((field, idx) => (
                    <View key={idx} paddingH-10 paddingB-15>
                        <StyledInput placeholder={'Skill'} value={field.title} name={'title'}
                                     onChange={event => handleFormChange(idx, event, 'title')} Icon={User}/>

                        <StyledInput placeholder={'Description'} value={field.description} name={'description'}
                                     onChange={event => handleFormChange(idx, event, 'description')} Icon={User}/>

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
                        dispatch(setCvSkill(fields))
                        navigation.goBack()
                    }}
                    label={'Submit'}
                    width={'45%'}/>
            </View>
        </ScreenLayout>
    )
}
