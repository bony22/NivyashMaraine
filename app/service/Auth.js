import HttpClient from '@Utils/HttpClient'
import Storage from '@Utils/Storage'
// import { AsyncStorage } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';





async function login(data)
{
    let endpoint = 'add_user_otp.php';
    return HttpClient.post(endpoint, data);
}



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


async function getTabList() {
    return await Storage.get('tablist');
}
async function setTabList(data) {
    return await Storage.set('tablist', data);
}

// for work plan
async function getWorkPlan() {
    let date= moment().format("DD/MM/YY")+'work'
    return await Storage.get(date);
}

async function setWorkPlan(data) {
    let date = moment().format("DD/MM/YY")+'work'
    return await Storage.set(date, data);
}


// for yard
async function getYard() {
    let date1= moment().format("DD/MM/YY")+'yard'
    return await Storage.get(date1);
}

async function setYard(data) {
    let date1= moment().format("DD/MM/YY")+'yard'
    return await Storage.set(date1, data);
}

// for vessel
async function getVessel() {
    let date2= moment().format("DD/MM/YY")+'vessel'
    return await Storage.get(date2);
}

async function setVessel(data) {
    let date2= moment().format("DD/MM/YY")+'vessel'
    return await Storage.set(date2, data);
}

// for environment
async function getEnvironment() {
    let date3= moment().format("DD/MM/YY")+'environ'
    return await Storage.get(date3);
}

async function setEnvironment(data) {
    let date3= moment().format("DD/MM/YY")+'environ'
    return await Storage.set(date3, data);
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
    getTabList,
    setTabList,
    
    getWorkPlan,
    setWorkPlan,
    getYard,
    setYard,
    getVessel,
    setVessel,
    getEnvironment,
    setEnvironment,













    getDark,
    setDark,
    //sendOtp
}