import HttpClient from '@Utils/HttpClient'
import Storage from '@Utils/Storage'
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';





async function login(data)
{
    let endpoint = 'add_user_otp.php';
    return HttpClient.post(endpoint, data);
}


// async function sendOtp(data)
// {
//     let endpoint = 'check_otp.php';
//     return HttpClient.post(endpoint, data);
// }


function register(data) {
    let endpoint = 'user_registration.php';
    return HttpClient.post(endpoint,data);
}

async function getAccount() {
    return await Storage.get('account');
}

async function setAccount(data) {
    return await Storage.set('account', data);
}

async function getPassWord() {
    return await Storage.get('password');
}
async function setPassWord(data) {
    return await Storage.set('password', data);
}


async function getDark() {
    return await Storage.get('dark');
}

async function setDark(data) {
    return await Storage.set('dark', data);
}

async function logout() {
    
    return await Storage.set('account', null);
    console.log('logout');
}

export default {
    register,
    login,
    logout,
    getAccount,
    setAccount,
    getPassWord,
    setPassWord,
    getDark,
    setDark,
    //sendOtp
}