import  {useState} from 'react';

export default () => {
const [webLink, setLink] = useState([]);

const getLink = (myobj) => {
    for (var p in myobj) {
        setLink(myobj[p].fullurl);
        }
        console.log(webLink);
    };
return [getLink, webLink];
};