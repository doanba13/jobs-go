import { Colors } from 'assets/Colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { Layout, Logo } from 'screens';
import { SocialButtons } from '.';

export const AuthLayout = ({ children, text }) => {
    return (
        <Layout isScroll>
            <View paddingB-80>
                <View row centerV paddingH-10>
                    <Logo width={80} height={80} />
                    <View>
                        <Text white fs24 fw9 font-black>
                            Amonino
                        </Text>
                        <Text fs15 white fw3 font-light>
                            Learn English Online
                        </Text>
                    </View>
                </View>
                <View marginT-10 style={styles.divider1} />
                <View style={styles.divider2} />
                <View paddingH-32 paddingT-25>
                    <View paddingH-8 paddingB-22>
                        <Text white fs24 fw9 font-black>
                            {text}
                        </Text>
                    </View>
                    {children}
                    <SocialButtons text={text} />
                </View>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    divider1: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.white,
    },
    divider2: {
        height: 5,
        width: '100%',
        backgroundColor: `${Colors.white}25`,
    },
});
