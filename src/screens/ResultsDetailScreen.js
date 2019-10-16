import react from 'react';
import { View, Text} from 'react-native';
import ResultScreen from '../screens/ResultScreen';
import { createStackNavigator } from 'react-navigation-stack';
import {createAppContainer } from 'react-navigation';

const ResultsDetailScreen = () => {
  const itemInfo = navigation.getParam('')
    return (
        <View>
            <Text>Details</Text>
           <Button
           title="Go Back to Search Screen"
           onPress={() => 
        navigation.navigate('HomeScreen')}></Button>
        </View>
        
    )

}

export default ResultsDetailScreen;