import { Colors } from 'assets/Colors';
import { Facebook, Google } from 'assets/Svg';
import { navigate } from 'navigators/utils';
import { scaleSize } from 'utilities';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-ui-lib';

export const SocialButtons = ({ text }) => {
    return (
        <View>
            <View row centerV marginV-36>
                <View style={styles.dividerBlack} />
                <View paddingH-15>
                    <Text white fs15 fw5 font-medium>
                        Or {text} with
                    </Text>
                </View>
                <View style={styles.dividerBlack} />
            </View>
            <TouchableOpacity>
                <View
                    bg-marinerBlue
                    style={styles.button}
                    row
                    centerV
                    paddingL-12
                >
                    <Facebook />
                    <View flex centerV marginL-36>
                        <Text white fs17 fw5 fonr-medium>
                            {text} with Facebook
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            <View marginV-10 />
            <TouchableOpacity>
                <View
                    bg-aluminiumGrey
                    style={styles.button}
                    row
                    centerV
                    paddingL-12
                >
                    <Google />
                    <View flex centerV marginL-36>
                        <Text white fs17 fw5 fonr-medium>
                            {text} with Google
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
            {text === 'Log In' && (
                <View row center marginT-20>
                    <Text white fs15 fw5 font-medium>
                        Don't have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigate('Signup')}>
                        <Text wildWatermelonRed fs15 fw7 font-bold marginL-10>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            {text === 'Register' && (
                <View row center marginT-20>
                    <Text white fs15 fw5 font-medium>
                        Already have an account?
                    </Text>
                    <TouchableOpacity onPress={() => navigate('Login')}>
                        <Text wildWatermelonRed fs15 fw7 font-bold marginL-10>
                            Log In
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        backdropFilter: 'blur(114px)',
        height: scaleSize(50),
        borderRadius: 30,
    },
    dividerBlack: {
        backgroundColor: Colors.black25,
        height: 1,
        borderRadius: 90,
        flex: 1,
    },
});
