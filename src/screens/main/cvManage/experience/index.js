import { Text, View } from 'react-native-ui-lib';
import React, { useEffect, useRef, useState } from 'react';
import { StyledButton, StyledInput, ScreenLayout } from 'screens/components';
import { ScrollView, TouchableOpacity } from 'react-native';
import { User } from 'assets';
import { useDispatch, useSelector } from 'react-redux';
import { setCvExperience } from 'store/createCv';
import { cloneDeep } from 'lodash';

const fieldProps = {
    start: '',
    end: '',
    description: '',
    position: '',
    company: '',
}

export const ExperienceSection = ({ navigation }) => {
    const dispatch = useDispatch();
    const { experience } = useSelector(state => state.createCv)
    const [fields, setField] = useState([cloneDeep(fieldProps)]);
    const scrollRef = useRef();

    useEffect(() => {
        if (experience.length > 0) {
            setField(cloneDeep(experience))
        }
    }, [experience])

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
        <ScreenLayout contentHeight={'100%'} desc={'Describe your education progress'} title={'Education'} notFooter>
            <ScrollView ref={scrollRef}>
                {fields.map((field, idx) => (
                    <View key={idx} paddingH-10 paddingB-15>
                        <StyledInput placeholder={'Company'} value={field.company} name={'company'}
                                     onChange={event => handleFormChange(idx, event, 'company')} Icon={User}/>

                        <StyledInput placeholder={'Position'} value={field.position} name={'position'}
                                     onChange={event => handleFormChange(idx, event, 'position')} Icon={User}/>

                        <StyledInput placeholder={'Description'} value={field.description} name={'description'}
                                     onChange={event => handleFormChange(idx, event, 'description')} Icon={User}/>

                        <StyledInput placeholder={'Start'} value={field.start} name={'start'}
                                     onChange={event => handleFormChange(idx, event, 'start')} Icon={User}/>

                        <StyledInput placeholder={'End'} value={field.end} name={'end'}
                                     onChange={event => handleFormChange(idx, event, 'end')} Icon={User}/>
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
                        dispatch(setCvExperience(fields))
                        navigation.goBack()
                    }}
                    label={'Submit'}
                    width={'45%'}/>
            </View>
        </ScreenLayout>
    )
}
