import { Alert } from 'react-native';
import {
    Catalog1,
    Catalog2,
    Catalog3
} from 'assets';
import React from 'react';

export const showAlert = (subTitle, title = 'Error') => {
    Alert.alert(title, subTitle);
};

export const getInitials = string => {
    if (!string) return '';
    const names = string.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
};

export const randomCatalog = () => {
    const catalogIcons = [
        Catalog3,
        Catalog2,
        Catalog1,
    ];
    const randomIndex = Math.floor(Math.random() * catalogIcons.length);
    return catalogIcons[randomIndex];
};
