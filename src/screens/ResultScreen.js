import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import useResults from '../hooks/useResults';

const ResultScreen = (search) => {
  const userTerm = (search.navigation.state.params.search);
  const [searchAPI, response, errorMessage] = useResults();

  useEffect(() => {
    searchAPI(userTerm);
  }, []);

  
    
return(
    <View style={Styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ResultsShow', { id: item.id })
              }
            >
              <ResultsDetail result={item} />
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
