import { Images, Close } from 'assets';
import { Colors } from 'assets/Colors';
import { PrimaryButton } from 'screens';
import React from 'react';
import {
    ImageBackground,
    Modal as ModalUI,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Text, View } from 'react-native-ui-lib';

export const Modal = ({
    visible,
    children,
    text,
    description,
    agreeButton,
    cancelButton,
    iconClose,
    onClose,
    loading,
}) => {
    const isHasAgreeButton = agreeButton && agreeButton.text;
    const isHasCancelButton = cancelButton && cancelButton.text;

    return (
        <View>
            <ModalUI animationType="slide" transparent={true} visible={visible}>
                <View style={styles.container}>
                    <View style={styles.modalView} br20>
                        <ImageBackground
                            source={Images.background2}
                            resizeMode="cover"
                            style={styles.background}
                        >
                            {iconClose && (
                                <TouchableOpacity
                                    onPress={onClose}
                                    style={{
                                        position: 'absolute',
                                        right: 22,
                                        top: 25,
                                        zIndex: 1,
                                    }}
                                >
                                    <Close />
                                </TouchableOpacity>
                            )}
                            <ScrollView>
                                <View
                                    padding-24
                                    paddingB-36
                                    pointerEvents={loading ? 'none' : 'auto'}
                                >
                                    <Text white fs24 fw9 font-black center>
                                        {text}
                                    </Text>
                                    <View marginV-16>
                                        {description && (
                                            <Text
                                                fs15
                                                white
                                                fw3
                                                font-light
                                                center
                                            >
                                                {description}
                                            </Text>
                                        )}
                                    </View>
                                    {children}
                                    <View flex row>
                                        {isHasAgreeButton && (
                                            <View
                                                flex-1
                                                row
                                                center
                                                marginT-15
                                                paddingR-15={
                                                    !!isHasCancelButton
                                                }
                                            >
                                                <PrimaryButton
                                                    onPress={
                                                        agreeButton.onPress
                                                    }
                                                    text={agreeButton.text}
                                                    loading={loading}
                                                    style={{
                                                        width:
                                                            isHasCancelButton &&
                                                            '100%',
                                                    }}
                                                />
                                            </View>
                                        )}
                                        {isHasCancelButton && (
                                            <View flex-1 row center marginT-15>
                                                <PrimaryButton
                                                    onPress={
                                                        cancelButton.onPress
                                                    }
                                                    text={cancelButton.text}
                                                    loading={loading}
                                                    style={{
                                                        width:
                                                            isHasAgreeButton &&
                                                            '100%',
                                                    }}
                                                    border
                                                />
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </ScrollView>
                        </ImageBackground>
                    </View>
                </View>
            </ModalUI>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: Colors.black45,
    },
    modalView: {
        alignItems: 'center',
        width: '90%',
        overflow: 'hidden',
    },
    background: {
        width: '100%',
        position: 'relative',
    },
});
