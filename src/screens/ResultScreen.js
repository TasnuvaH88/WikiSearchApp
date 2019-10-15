import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import searchAPI from '../hooks/useResults';

const ResultScreen = (search) => {
  const userTerm = (search.navigation.state.params.search);
  searchAPI(userTerm);
  
    
return(
    <View>
        <Text>Results</Text>
    </View>
    );
};



export default ResultScreen;
