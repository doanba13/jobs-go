import { BorderRadiuses, Colors, Typography } from 'react-native-ui-lib';

import { Fonts } from 'assets/Fonts';
import { Colors as ColorsAsset } from 'assets/Colors';

import { Platform } from 'react-native';
import { scaleFont } from 'utilities';

Colors.loadColors({
    white: ColorsAsset.white,
    white50: ColorsAsset.white50,
    black50: ColorsAsset.black25,
    textBlack: ColorsAsset.textBlack,
    marinerBlue: ColorsAsset.marinerBlue,
    aluminiumGrey: ColorsAsset.aluminiumGrey,
    wildWatermelonRed: ColorsAsset.wildWatermelonRed,
    error: ColorsAsset.error,
    greyChateau: ColorsAsset.greyChateau,
    success: ColorsAsset.success,
});

BorderRadiuses.loadBorders({
    br30: 30,
    br20: 20,
    br15: 15,
    br10: 10,
    br5: 5,
});

Typography.loadTypographies({
    'font-black': {
        fontFamily: Fonts.Black, // font weight 900
    },
    'font-bold': {
        fontFamily: Fonts.Bold, // 800
    },
    'font-extraBold': {
        fontFamily: Fonts.ExtraBold, // 700
    },
    'font-extraLight': {
        fontFamily: Fonts.ExtraLight, // 600
    },
    'font-light': {
        fontFamily: Fonts.Light, // 500
    },
    'font-medium': {
        fontFamily: Fonts.Medium, // 400
    },
    'font-semibold': {
        fontFamily: Fonts.Semibold, // 300
    },
    'font-regular': {
        fontFamily: Fonts.Regular, // 200
    },
    'font-thin': {
        fontFamily: Fonts.Thin, // 100
    },
    bold: {
        fontWeight: 'bold',
    },
    fs120: {
        fontSize: scaleFont(120),
    },
    fs96: {
        fontSize: scaleFont(96),
    },
    fs60: {
        fontSize: scaleFont(60),
    },
    fs48: {
        fontSize: scaleFont(48),
    },
    fs35: {
        fontSize: scaleFont(35),
    },
    fs30: {
        fontSize: scaleFont(30),
    },
    fs26: {
        fontSize: scaleFont(26),
    },
    fs24: {
        fontSize: scaleFont(24),
    },
    fs22: {
        fontSize: scaleFont(22),
    },
    fs20: {
        fontSize: scaleFont(20),
    },
    fs19: {
        fontSize: scaleFont(19),
    },
    fs18: {
        fontSize: scaleFont(18),
    },
    fs17: {
        fontSize: scaleFont(17),
    },
    fs16: {
        fontSize: scaleFont(16),
    },
    fs15: {
        fontSize: scaleFont(15),
    },
    fs14: {
        fontSize: scaleFont(14),
    },
    fs13: {
        fontSize: scaleFont(13),
    },
    fs12: {
        fontSize: scaleFont(12),
    },
    fs10: {
        fontSize: scaleFont(10),
    },
    fw9: {
        fontWeight: Platform.OS === 'ios' ? '900' : 'bold',
    },
    fw8: {
        fontWeight: Platform.OS === 'ios' ? '800' : 'bold',
    },
    fw7: {
        fontWeight: Platform.OS === 'ios' ? '700' : 'bold',
    },
    fw6: {
        fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    },
    fw5: {
        fontWeight: Platform.OS === 'ios' ? '500' : 'normal',
    },
    fw4: {
        fontWeight: Platform.OS === 'ios' ? '400' : 'normal',
    },
    fw3: {
        fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
    },
    fw2: {
        fontWeight: Platform.OS === 'ios' ? '200' : 'normal',
    },
    fw1: {
        fontWeight: Platform.OS === 'ios' ? '100' : 'normal',
    },
});
