import react, {useState, useEffect} from "react";
import { View, Text, Button } from "react-native";


const ResultsDetailScreen = ({navigation}) => {
  const [result, setResult] = useState(null);
  const pageid = navigation.getParam('pageid');
 

const getInfo = async pageid => {
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
        title="Go Back to Search Screen"
        onPress={() => navigation.navigate('HomeScreen')}
      ></Button>
    </View>
  );
};

export default ResultsDetailScreen;
