import { Images, Close } from 'assets';
import { Colors } from 'assets/Colors';
import React from 'react';
import {
    Modal as ModalUI,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import StyledButton from 'screens/components/form/StyledButton';

export const Modal = ({
                          visible,
                          children,
                          text,
                          description,
                          agreeButton,
                          iconClose,
                          onClose,
                          loading,
                      }) => {
    return (
        <View>
            <ModalUI animationType="slide" transparent={true} visible={visible}>
                <View style={styles.container}>
                    <View style={styles.modalView} br20>
                        <View
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
                                    <Close/>
                                </TouchableOpacity>
                            )}
                            <ScrollView>
                                <View
                                    padding-24
                                    paddingB-36
                                    pointerEvents={loading ? 'none' : 'auto'}
                                >
                                    <Text textBlack fs24 fw9 font-black center>
                                        {text}
                                    </Text>
                                    <View marginV-16>
                                        {description && (
                                            <Text
                                                fs15
                                                textBlack
                                                fw3
                                                font-light
                                                center
                                            >
                                                {description}
                                            </Text>
                                        )}
                                    </View>
                                    {children}

                                    <StyledButton
                                        onPress={agreeButton.onPress}
                                        label={agreeButton.text}
                                        loading={loading}
                                    />
                                    {/* {isHasCancelButton && ( */}
                                    {/*     <View flex-1 row center marginT-15> */}
                                    {/*         <StyledButton */}
                                    {/*             onPress={ */}
                                    {/*                 cancelButton.onPress */}
                                    {/*             } */}
                                    {/*             label={cancelButton.text} */}
                                    {/*             loading={loading} */}
                                    {/*             style={{ */}
                                    {/*                 width: */}
                                    {/*                     isHasAgreeButton && */}
                                    {/*                     '100%', */}
                                    {/*             }} */}
                                    {/*             border */}
                                    {/*         /> */}
                                    {/*     </View> */}
                                    {/* )} */}

                                </View>
                            </ScrollView>
                        </View>
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
        backgroundColor: '#fff'
    },
});
