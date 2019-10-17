import React from 'react';
import { View, Text, StyleSheet  FlatList,
    TouchableOpacity
  } from 'react-native';
  import { withNavigation } from 'react-navigation';
  import ResultsDetail from './ResultsDetail';

const ResultsList = ({ title, results, navigation }) => {
  const detailedDisplay = () => navigation.navigate('ResultsDetail', {result});

  return (
    <View style={styles.container}>
    
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsDetail', { title: item.title })
              }
            >
             
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginLeft: 15,
      marginBottom: 5
    },
    container: {
      marginBottom: 10
    }
  });
  
  export default withNavigation(ResultsList);
  