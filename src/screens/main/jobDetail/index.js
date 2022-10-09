import React, { useState } from 'react';
import { Text, View } from 'react-native-ui-lib';
import { Location, Reddit, Character3 } from 'assets';
import { ScrollView, StyleSheet } from 'react-native';
import { boxWithShadow } from 'utilities/boxShadow';
import { Colors } from 'assets/Colors';
import StyledButton from 'screens/components/form/StyledButton';
import { Modal } from 'components';

export const JobDetail = () => {
    const [tab, setTab] = useState(1);
    const [visible, setVisible] = useState(false)

    return (
        <>
            <Modal
                text={'JAJAJAJ'}
                description={'HAHAHAHAH'}
                visible={visible}
                onClose={() => setVisible(false)}
                loading={true}
                iconClose={true}
                agreeButton={{
                    onPress: () => console.log('ngu'),
                    text: 'Apply'
                }}
            />
            <View backgroundColor={'#f5f5f5'} height={'100%'}>
                <View style={styles.container}>
                    <View paddingB-40 width={'100%'}>
                        <Text style={{ width: '100%' }} textBlack fs24 font-extraBold>FrontEnd Developer</Text>
                        <Reddit style={styles.companyLogo}/>
                    </View>
                    <View row centerV marginB-20>
                        <Text style={styles.tag} font-medium textBlack>Developer</Text>
                        <Text marginL-30>20 March 2022</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text fs30 font-light textBlack>2000-4000$</Text>
                        <Text black50>Per month</Text>
                        <View marginT-10 row centerV>
                            <Location/>
                            <Text marginL-5 marginB-2>Cau Giay, Hanoi</Text>
                        </View>
                        <Character3 style={styles.character}/>
                    </View>
                    <View paddingH-35 marginT-20 row spread>
                        <Text style={tab === 1 ? styles.active : styles.inactive} onPress={() => setTab(1)}>Job
                            Description</Text>
                        <Text style={tab === 2 ? styles.active : styles.inactive}
                              onPress={() => setTab(2)}>Benefit</Text>
                        <Text style={tab === 3 ? styles.active : styles.inactive} onPress={() => setTab(3)}>Company
                            info</Text>
                    </View>
                </View>
                <View style={styles.descContainer}>
                    <ScrollView>
                        {tab === 1 && <Text textAlign={'justify'}>
                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.

                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.
                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.

                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.
                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.

                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.
                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.

                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.
                        </Text>}
                        {tab === 2 && <Text textAlign={'justify'}>
                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.
                        </Text>}
                        {tab === 3 && <Text textAlign={'justify'}>
                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.
                            Dolor velit in duis pariatur ut nostrud exercitation ex voluptate Lorem officia nisi. Sunt
                            laborum in quis nostrud adipisicing mollit. Dolore incididunt consequat dolore laboris id
                            cillum. Et anim do cupidatat esse duis. Aliquip nostrud labore pariatur qui. Pariatur
                            proident
                            ex id ea laborum eu. Aliquip aliquip mollit officia exercitation excepteur.
                        </Text>}
                    </ScrollView>
                </View>
                <View paddingH-40>
                    <StyledButton onPress={() => setVisible(true)} label={'Apply now'}/>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: '45%',
        width: '100%',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        paddingHorizontal: 15,
        paddingTop: 60,
        backgroundColor: '#fff'
    },
    descContainer: {
        height: '47%',
        paddingHorizontal: 20,
        paddingVertical: 15,

    },
    companyLogo: {
        position: 'absolute',
        right: 0,
        top: -15
    },
    infoContainer: {
        position: 'relative',
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 15,
        paddingVertical: 15,
        ...boxWithShadow,
        elevation: 12,
        borderRadius: 20,
    },
    tag: {
        borderRadius: 10,
        padding: 5,
        paddingHorizontal: 10,
        backgroundColor: '#D6F5FF',
    },
    character: {
        position: 'absolute',
        right: -20,
        bottom: -10
    },
    active: {
        borderBottomWidth: 2,
        fontWeight: '600',
        borderColor: '#83ea9a'
    },
    inactive: {
        color: Colors.black45,
    }
})
