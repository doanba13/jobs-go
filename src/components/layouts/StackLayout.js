import { ArrowLeft } from 'assets/Svg';
import { goBack, navigate } from 'navigators/utils';
import React from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { Layout } from 'screens';

export const StackLayout = ({
    children,
    optionRight,
    navigateTo,
    scroll = true,
    textCenter,
}) => {
    const BoxWrapper = scroll ? ScrollView : View;
    const styles = scroll
        ? {
              width: '100%',
              height: '100%',
          }
        : {};
    return (
        <Layout bg2>
            <View width="100%" flex paddingB-50 centerH paddingH-18>
                <View width="100%" row centerV spread paddingH-6 paddingB-15>
                    <TouchableOpacity
                        onPress={() =>
                            navigateTo ? navigate(navigateTo) : goBack()
                        }
                    >
                        <ArrowLeft />
                    </TouchableOpacity>
                    {textCenter && (
                        <Text white fs17 font-semibold>
                            {textCenter}
                        </Text>
                    )}

                    <View>{optionRight}</View>
                </View>
                <BoxWrapper style={styles}>
                    <View height="100%">{children}</View>
                </BoxWrapper>
            </View>
        </Layout>
    );
};
