import axios from "axios";

let url ='';

const fetchApi = async(props,endPoint)=>{
    url=`https://chimerical-blini-3fec25.netlify.app/.netlify/functions/api/${endPoint}?from=${props.from}&to=${props.to}&amount=${props.amount}`
     let data =await axios.get(url)
     console.log(data.data);
     console.log(props);
     return data.data
}

export default fetchApi;