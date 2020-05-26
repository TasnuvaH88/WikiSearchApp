import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6495ED',
    },
    headerText: {
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    searchInput: {
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        paddingLeft: 1
    }
});

export default Styles;