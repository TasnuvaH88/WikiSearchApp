import React, {useEffect} from 'react';
import { View, Text, Button, Linking } from 'react-native';
import useResult from '../hooks/useResult';
import { withNavigation } from 'react-navigation';

const ResultsDetailScreen = () => {
  const pageid = navigation.getParam('pageid');
  const [getInfo, res] = useResult();
 
useEffect(() => {
  getInfo(pageid);
}, []);


  return (
    <View>
      <Text>{res.title}</Text>
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
      >Go Back to Search Screen</Button>
      <Button
        onPress={() => Linking.openURL('https://www.anthem.com')}>
      Go to Anthem Site</Button>
    </View>
  );


};

export default withNavigation(ResultsDetailScreen);
