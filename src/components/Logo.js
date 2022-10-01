import { Images } from 'assets';
import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native-ui-lib';
import { scaleSize } from 'utilities';

export const Logo = ({ height, width, mode }) => {
    return (
        <Image
            style={{ height: scaleSize(height), width: scaleSize(width) }}
            source={Images.logo}
            resizeMode={mode}
        />
    );
};

Logo.propTypes = {
    height: PropTypes.number,
    mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
    width: PropTypes.number,
};

Logo.defaultProps = {
    height: 200,
    mode: 'contain',
    width: 200,
};
