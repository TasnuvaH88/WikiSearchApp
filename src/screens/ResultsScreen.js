import React, { useEffect} from 'react';
import {
  View,
  StyleSheet,
  FlatList, Button
} from 'react-native';
import useResults from '../hooks/useResults';
import { withNavigation } from 'react-navigation';

const ResultsScreen = ({navigation}) => {
  const userTerm = navigation.getParam('search');
  const [searchAPI, results] = useResults();
  

  useEffect(() => {
    searchAPI(userTerm);
  }, []);
 
 
  return (
    <View style={styles.container}>
       <FlatList
          data={results}
          keyExtractor={result => result.pageid}
          renderItem={({ item }) => {
            return (
              <Button
              style={styles.text}
               title={item.title}
                onPress={() => navigation.navigate('ResultsDetail', {pageid: item.pageid})
                }>More Info</Button>
              )
              }}
             />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsScreen);
