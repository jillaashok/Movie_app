import { Dimensions, Platform, PixelRatio } from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;

export const normalize = (size) => {
    const scale = screenWidth / 375;
    const newSize = size * scale;
    if (Platform.OS == 'ios') {
        return Math.round(PixelRatio.roundToNearestPixel(newSize))
    }
    else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
}
export const colors = {
    butterscotch: '#f4b243',
    indian_yellow: '#E2AB4E',
    black: '#000000',
    grey: '#919290',
    white: '#FFFFFF'
}

export const size = {
    big: normalize(47),
    xxx_medium: normalize(45),
    xx_medium: normalize(40),
    x_medium: normalize(36),
    medium: normalize(32),
    x_normal: normalize(29),
    normal: normalize(26),
    regular: normalize(24),
    xxxx_small: normalize(22),
    xxx_small: normalize(20),
    xx_small: normalize(18),
    x_small: normalize(16),
    small: normalize(15),
    xxxx_tiny: normalize(14),
    xxx_tiny: normalize(12),
    xx_tiny: normalize(10),
    x_tiny: normalize(8),
    tiny: normalize(6)
}