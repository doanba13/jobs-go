import { Dimensions, Platform, PixelRatio } from 'react-native';
const { height: windowHeight, width: windowWidth } = Dimensions.get('window');
const SCREEN_WIDTH = windowWidth < windowHeight ? windowWidth : windowHeight;

// Guideline sizes are based on standard ~5" screen mobile device
const GUIDELINE_BASE_WIDTH = 350;

export const scaleSize = size => (SCREEN_WIDTH / GUIDELINE_BASE_WIDTH) * size;

export const scaleFont = fontSize => {
    const newSize = scaleSize(fontSize);
    switch (Platform.OS) {
        case 'ios':
            if (Platform.isPad) {
                return Math.round(PixelRatio.roundToNearestPixel(newSize));
            }
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        case 'android':
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
        default:
            return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }
};

export const screenSize = {
    width: windowWidth,
    height: windowHeight,
};
