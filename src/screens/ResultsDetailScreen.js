import React, {useEffect, useState} from 'react';
import { View, Text, WebView, Button, Linking, StyleSheet } from 'react-native';
import useResult from '../hooks/useResult';
import { withNavigation } from 'react-navigation';



const ResultsDetailScreen = ( {navigation}) => {
  const pageid = navigation.getParam('pageid');
  const [getInfo, res, errMessage] = useResult();
  //Makes a second API call to retrieve an object set to pageid val
useEffect(() => {
 getInfo(pageid);
}, []);
  
//Function that allows navigation using unique ID to retrieve link prop
var resLink;
 for (var p in res ) {
    resLink = res[p].fullurl;
   
};


   return (

     <View style={styles.container} >
        <WebView
       style={styles.WebViewStyle}
       source={{uri: `${resLink}`}} 
       javaScriptEnabled={true}
       domStorageEnabled={true}/>
      
       {errMessage ? <Text>{errMessage}</Text> : null}
      <Button
        title = 'HOME'
        onPress={() => navigation.navigate('Home')}
      ></Button>
      <Button
       title='ANTHEM SITE'
        onPress={() => Linking.openURL('https://www.anthem.com')}>
     </Button>
    
    </View>
  );

  
};
const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
    },
  });

export default withNavigation(ResultsDetailScreen);
