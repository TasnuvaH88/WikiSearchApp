import react, {useState, useEffect} from "react";
import { View, Text, Button, Linking } from "react-native";


const ResultsDetailScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const pageid = navigation.getParam('pageid');
 

const getInfo = async id => {
  const response = await axios.get('https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids='
  +id+'&inprop=url&format=json');
  setResult(response.data.query.pages)
};
useEffect(() => {
  getInfo(pageid);
}, []);
  return (
    <View>
      <Text>{result.title}</Text>
      <Button
        onPress={() => navigation.navigate('HomeScreen')}
      >Go Back to Search Screen</Button>
      <Button
        onPress={() => Linking.openURL('https://www.anthem.com')}>
      Go to Anthem Site</Button>
    </View>
  );
};

export default ResultsDetailScreen;
