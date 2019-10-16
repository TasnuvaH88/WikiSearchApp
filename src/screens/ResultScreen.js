import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet, FlatList} from 'react-native';
import useResults from '../hooks/useResults';

const ResultScreen = (search, {navigation}) => {
  const userTerm = (search.navigation.state.params.search);
  const [searchAPI, results, errorMessage] = useResults();


    useEffect(() => {
    searchAPI(userTerm);
  }, [])

 
  return(
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator
          data={results}
          keyExtractor={result => result.pageid}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ResultsDetail', {item: item.snippet})
                }
              >
                <Text>{item.title}</Text>
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
    
 

export default ResultScreen;
