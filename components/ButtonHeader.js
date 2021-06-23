import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import {StyleSheet} from 'react-native';

import colors from '../constants/colors';

const ButtonHeader = props => {
    return (
    <HeaderButton {...props} 
    IconComponent={Ionicons} 
    iconSize={23}
    color='white'
    />
    
    );
};

const styles= StyleSheet.create({

});
export default ButtonHeader;