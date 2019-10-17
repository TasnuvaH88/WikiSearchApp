import React, { useEffect} from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList, Button
} from "react-native";
import useResults from '../hooks/useResults';
import { withNavigation } from 'react-navigation';

const ResultScreen = (search, {navigation}) => {
  const userTerm = (search.navigation.state.params.search);
  const [searchAPI, results] = useResults();
  
  //const [resp, returnURL] = secondCall();
  

  useEffect(() => {
    searchAPI(userTerm);
  }, []);
 console.log(results);
 

  return (
    <View style={styles.container}>
       <FlatList
          data={results}
          keyExtractor={result => result.pageid}
          renderItem={({ item }) => {
            return (
              <Button
               title={item.title}
                onPress={() => navigation.navigate('ResultsDetail', {pageid: item.pageid})
                }></Button>
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

export default withNavigation(ResultScreen);
