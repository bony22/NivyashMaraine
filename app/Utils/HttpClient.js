import  Helpers from '@Utils/Helpers';
import AuthService from '@Service/Auth';

 //const BASE_URL = 'http://skychat.easytodb.com/sendeal/admin/user_app_api/';
 const BASE_URL= 'http://skychat.easytodb.com/Doctors/admin/doctor_app_api/';

function get(endpoint, params) {
    return request(endpoint, params);    
}

function post(endpoint, params) {
    return request(endpoint, params, "POST");
}

function put(endpoint, params) {
    return request(endpoint, params, "PUT");
}

// function delete(endpoint, params) {
//     return fetch(endpoint, params, "DELETE");
// }

async function request(endpoint, params = null, method = 'GET') {
    let userData = await AuthService.getAccount();
    console.log('token',userData);
    let token ;  // Helpers.getApiToken();
    if(userData != null){
        token = userData.token
    }
    let url = BASE_URL + endpoint;
    const config = {
        method: method,
        headers: {
            "content-Type" : "application/json",
            "token" : token
        }
    };
    console.log("config",config.headers);
    if(method != 'GET') {
        config['body'] = JSON.stringify(params);
        console.log('send data', config);
    }
    console.log('url', url);
  
    return fetch(url, config ).then((response) => response.json());
}



const upload = async (url, method, file, object_get = {}) => {

    // let login_status = await AuthService.getToken();


    let apiUrl = BASE_URL + url;

    let headers = {
        'Accept': 'application/json',
        "Content-Type": "multipart/form-data",
        // 'Authorization':  login_status,
    };
    const data = new FormData();
    if(file.path != ''){
        let get_originalname = await getOriginalname(file.path);
        //, file.mime
        console.log('originalname',get_originalname)
        data.append('file', {
            uri: file.path,
            type:file.mime, 
            // 
            name: get_originalname
        });
    }
    

    let objArray = Object.keys(object_get);

    objArray.forEach(element => {
        data.append(element,  object_get[element]);
    });
    console.log('data9999',JSON.stringify(data))
    return fetch(apiUrl, { headers,method: 'post',body: data}).then(response => response.json())
        // .then(response => {
        //     return response;
        // });
    // console.log("getApi", getApi)
        
    // let dData = await decrypt(getApi.data);
    // getApi.data = JSON.parse(getApi.data)
    // return JSON.parse(getApi);
}

const getOriginalname = async (data) => {
    let arr = data.split("/");
    let lent = Number(arr.length - 1);
    return arr[lent];
}



// async function upload(endpoint, params, method = 'POST') {
//     try {
//         let token = "647ac4ed7e82829132705af7ff02a8e1";
//         let url = BASE_URL + endpoint;
//         const config = {
//             method: method, //'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'multipart/form-data',
//                 'Authorization': 'Bearer ' + token,
//             },
//             body: params,
//         };
//         console.log('url', url);
//         return fetch(url, config ).then((response) => response.json());   
//     } catch (error) {
//         console.log('error', error);
//     }
// }


export default {
    get,
    post,
    put,
    // delete,
    upload,    
}