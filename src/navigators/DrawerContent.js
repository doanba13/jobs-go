import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Avatar, Text, TouchableOpacity, View } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, onLogout } from 'store/auth';
import { getInitials } from 'utilities';
import { useAuth } from 'hooks';

export const DrawerContent = props => {
    const { state } = props;
    const { routes, index } = state;
    const focusedRoute = routes[index].name;
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View flex-1>
                    <View paddingL-20>
                        <View marginV-20 marginT-40>
                            <View
                                flex
                                centerV
                                centerH
                                width={100}
                                height={100}
                                style={{
                                    borderRadius: 200,
                                    backgroundColor: '#3F60B2',
                                }}
                            >
                                <Text white fs35 font-bold>
                                    {getInitials(user.name)}
                                </Text>
                            </View>
                            <Text fs24 white font-extraBold marginT-10>
                                {user.name}
                            </Text>
                        </View>
                        {[
                            {
                                text: '🏚 Home',
                                key: 'Home',
                            },
                            {
                                text: '️🏆 Ranks',
                                key: 'Rank',
                            },
                            {
                                text: '👱 Profile',
                                key: 'UserInfo',
                            },
                        ].map(item => {
                            const isActive = item.key === focusedRoute;
                            return (
                                <TouchableOpacity
                                    key={item.key}
                                    onPress={() => {
                                        props.navigation.navigate(item.key);
                                    }}
                                    marginT-15
                                    paddingV-10
                                    paddingH-20
                                    style={{
                                        borderTopLeftRadius: 50,
                                        borderBottomLeftRadius: 50,
                                        borderWidth: isActive ? 0 : 1,
                                        borderColor: '#eaeaea',
                                        backgroundColor: isActive
                                            ? '#3F60B2'
                                            : '#ffffff',
                                    }}
                                >
                                    <Text white={isActive} fs15>
                                        {item.text}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </DrawerContentScrollView>
            <TouchableOpacity onPress={() => dispatch(onLogout())} padding-30>
                <Text fs15 white font-bold>
                    📤 Đăng xuất
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({});
