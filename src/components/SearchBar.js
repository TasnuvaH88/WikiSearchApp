import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Styles from './Styles.js';


const SearchBar = ({ search, onSearch, onSearchSubmit }) => {
    return (
        <View>
            <TextInput
            style={Styles.searchInput}
            placeholder="What would you like to search?"
            value = {search}
            onChangeText = {onSearch}
            onEndEditing={onSearchSubmit}></TextInput>
            </View>
    )
}

export default SearchBar;