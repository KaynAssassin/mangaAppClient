import axios from "axios";
import {AsyncStorage} from "react-native";
import {API_URL,API_VERSION} from "@env"


function loadCategoryList(){
    return axios.create({
        baseURL:`${API_URL}`+ `${API_VERSION}`,
        headers:{
            "Access-Control-Allow-Origin":"*"
        },
       
    })
}

export default loadCategoryList;