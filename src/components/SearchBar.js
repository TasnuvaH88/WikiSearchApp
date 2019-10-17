import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';


const SearchBar = ({ search, onSearch, onSearchSubmit }) => {
    
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="What would you like to search?"
            value = {search}
            onChangeText = {onSearch}
            onEndEditing={onSearchSubmit}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        paddingLeft: 1
    }
})
export default SearchBar;