import  {useState} from 'react';
import axios from 'axios';

export default () => {
const [res, setResult] = useState([]);
const [errMessage, setErrMessage] = useState();

const getInfo = async id => {
  try {
    const response = await axios.get(
      'https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=' +
        id +
        '&inprop=url&format=json'
    );
    setResult(response.data.query.pages);
  } catch (err) {
    setErrMessage('Something went wrong');
  }
};
return [getInfo, res, errMessage];
};