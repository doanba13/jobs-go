import { Colors } from 'assets/Colors';
import { scaleSize } from 'utilities';
import React from 'react';
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Text, View } from 'react-native-ui-lib';

export const PrimaryButton = ({
    text,
    onPress,
    loading,
    style,
    border,
    small,
    disabled,
}) => {
    return (
        <TouchableOpacity style={style} disabled={disabled} onPress={onPress}>
            {border ? (
                <View style={[styles.button, styles.borderButton]}>
                    <View flex centerV centerH>
                        {loading ? (
                            <ActivityIndicator color={Colors.white} />
                        ) : (
                            <Text wildWatermelonRed fs17 fw8 font-extraBold>
                                {text}
                            </Text>
                        )}
                    </View>
                </View>
            ) : (
                <LinearGradient
                    colors={
                        disabled
                            ? ['#676767', '#676767']
                            : ['#FF5789', '#FF9B9C97']
                    }
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={small ? styles.smallButton : styles.button}
                >
                    <View flex centerV centerH>
                        {loading ? (
                            <ActivityIndicator color={Colors.white} />
                        ) : (
                            <Text
                                white={!disabled}
                                white50={disabled}
                                fs17={!small}
                                fs15={small}
                                fw8
                                font-extraBold
                            >
                                {text}
                            </Text>
                        )}
                    </View>
                </LinearGradient>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backdropFilter: 'blur(114px)',
        height: scaleSize(50),
        borderRadius: 30,
        paddingHorizontal: 30,
    },
    smallButton: {
        backdropFilter: 'blur(114px)',
        height: scaleSize(36),
        borderRadius: 30,
        paddingHorizontal: 20,
    },
    borderButton: {
        borderWidth: 1.5,
        borderColor: Colors.wildWatermelonRed,
    },
});
