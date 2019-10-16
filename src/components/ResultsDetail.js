import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{result.title}</Text>
      <Text>
        {result.size} Size, {result.wordcount} Words
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      marginLeft: 15
    },
    image: {
      width: 250,
      height: 120,
      borderRadius: 4,
      marginBottom: 5
    },
    name: {
      fontWeight: 'bold'
    }
  });
  
  export default ResultsDetail;
  