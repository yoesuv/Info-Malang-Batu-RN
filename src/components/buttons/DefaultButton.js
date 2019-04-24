import React from 'react';
import { Button } from 'react-native';

import { THEME_COLOR } from '../../data/Colors';

const defaultButton = props => (
    <Button
        {...props}
        color={THEME_COLOR}/>
);

export default defaultButton;
