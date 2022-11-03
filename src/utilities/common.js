import { Alert } from 'react-native';
import {
    Catalog1,
    Catalog2,
    Catalog3,
    Catalog4,
    Catalog5,
    Catalog6,
    Catalog7,
    Catalog8,
    Catalog9,
    Catalog10,
    Catalog11,
    Catalog12,
    Catalog13,
    Catalog14,
    Catalog15,
    Catalog16,
    Catalog17,
    Catalog18,
    Catalog19, Images,
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
        Catalog4,
        Catalog5,
        Catalog6,
        Catalog7,
        Catalog8,
        Catalog9,
        Catalog10,
        Catalog11,
        Catalog12,
        Catalog13,
        Catalog14,
        Catalog15,
        Catalog16,
        Catalog17,
        Catalog18,
        Catalog19,
    ];
    const randomIndex = Math.floor(Math.random() * catalogIcons.length);
    return catalogIcons[randomIndex];
};

export const randomCompanyImage = () => {
    const {
        company1,
        company2,
        company3,
        company4,
        company5,
        company6
    } = Images;
    const company = [company1, company2, company3, company4, company5, company6];

    return new Array(3).map(() => company[Math.floor(Math.random() * company.length)])
};
