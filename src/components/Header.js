import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from './Styles.js';

const Header = () => {
    return (
       <View style={Styles.header}>
           <Text style={Styles.headerText}>Search Here</Text>
       </View>
    );
};


export default Header;