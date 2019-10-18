import React, {useEffect} from 'react';
import { View, Text, Button, Linking } from 'react-native';
import useResult from '../hooks/useResult';
import { withNavigation } from 'react-navigation';
import { WebView} from 'react-native';

const ResultsDetailScreen = ( {navigation}) => {
  const pageid = navigation.getParam('pageid');
  const [getInfo, res, errMessage] = useResult();

useEffect(() => {
 getInfo(pageid);
}, []);

console.log(res);


  return (
    <View>
  
      <Text>Link</Text>
      {errMessage ? <Text>{errMessage}</Text> : null}
      <Button
        title = 'HOME'
        onPress={() => navigation.navigate('HomeScreen')}
      ></Button>
      <Button
       title='ANTHEM SITE'
        onPress={() => Linking.openURL('https://www.anthem.com')}>
     </Button>
    
    </View>
  );


};

export default withNavigation(ResultsDetailScreen);
