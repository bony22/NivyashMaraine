import HttpClient from '@Utils/HttpClient'
import Storage from '@Utils/Storage'
import { AsyncStorage } from 'react-native';


//otp sending
async function sendOtp(data)
{
    let endpoint = 'check_otp.php';
    return HttpClient.post(endpoint, data);
}

//resend otp
async function resendOtp(data)
{
    let endpoint = 'resend_user_otp.php';
    return HttpClient.post(endpoint, data);
}
//otp matched

// async function resendOtp(data)
// {
//     let endpoint = 'resend_user_otp.php';
//     return HttpClient.post(endpoint, data);
// }

//family adding
async function addFamily(data,obj)
{
    let endpoint = 'add_family_member.php';
    return HttpClient.upload(endpoint,'post',data,obj);
}

//fetch family
async function fetchFamily(data)
{
    let endpoint = 'fetch_family.php';
    return HttpClient.post(endpoint, data);
}

//delete family member
async function deleteFamilymember(data)
{
    let endpoint = 'delete_familymember.php';
    return HttpClient.post(endpoint, data);
}

//edit family member
async function famEdit(data,obj)
{
    let endpoint = 'edit_family.php';
    return HttpClient.upload(endpoint,'post',data,obj);
}




//blood bank adding
async function addBloodBank(data)
{
    let endpoint = 'add_blood.php';
    return HttpClient.post(endpoint, data);
}

//booking ambulance
async function addAmbulance(data)
{
    let endpoint = 'add_ambulance.php';
    return HttpClient.post(endpoint, data);
}

//fetching of doctor
async function doctorSpecial1()
{
    let endpoint = 'fetch_doctor.php';
    return HttpClient.get(endpoint);
}




///// souvik function

async function fetchBookDoctor(data)
{
    let endpoint = 'fetch_book_doctor_appointment.php';
    return HttpClient.post(endpoint,data);
}
async function fetchSingleDoctor(data)
{
    let endpoint = 'single_doctor.php';
    return HttpClient.post(endpoint,data);
}
async function visitSheduleDetails(data)
{
    let endpoint = 'visit_schedule.php';
    return HttpClient.post(endpoint,data);
}
async function onlineSheduleDetails(data)
{
    let endpoint = 'online_schedule.php';
    return HttpClient.post(endpoint,data);
}
async function DoctorHomeShedule(data)
{
    let endpoint = 'fetch_at_home.php';
    return HttpClient.post(endpoint,data);
}

async function book_visit(data)
{
    let endpoint = 'book_visit_schedule.php';
    return HttpClient.post(endpoint,data);
}
async function allSheduleDetails(data)
{
    let endpoint = 'all_schedule.php';
    return HttpClient.post(endpoint,data);
}
async function onlineSheduleLater(data)
{
    let endpoint = 'all_schedule.php';
    return HttpClient.post(endpoint,data);
}
async function doctorHome(data)
{
    let endpoint = 'all_schedule.php';
    return HttpClient.post(endpoint,data);
}
async function doctorOnline(data)
{
    let endpoint = 'all_schedule.php';
    return HttpClient.post(endpoint,data);
}
function about_us()
{
    let endpoint = 'about_us.php';
    return HttpClient.get(endpoint);
}
async function termscondition()
{
    let endpoint='terms_conditions.php';
    return HttpClient.get(endpoint)
}
async function PrivacyPolicy(){
    let endpoint = 'privacy_policy.php';
    return HttpClient.get(endpoint);
}

async function fetchDoctorBook(data){
    let endpoint='fetch_doctorbook.php';
    return HttpClient.post(endpoint,data)
}
async function fetchTestBook(data){
    let endpoint='fetch_testbook.php';
    return HttpClient.post(endpoint,data)
}

async function ProductHistory(data)
{
    let endpoint='product_history.php';
    return HttpClient.post(endpoint,data)
}


// hi dropdown theke fetch and database e entry

async function dropdownFamily1(data)
{
    let endpoint = 'fetch_family.php';
    return HttpClient.post(endpoint,data);// as respect id select hochhe..
}

async function showFamily(data)
{
    let endpoint = 'family_doctor_book.php'; 
    return HttpClient.post(endpoint,data);// dn database e store
}







//submitting prescription
async function submitPrescription(data,obj)
{
    let endpoint = 'add_location.php';
    return HttpClient.upload(endpoint,'post',data,obj);
}


//featured test fetch 
async function fetchTest()
{
    let endpoint = 'fetch_test.php';
    return HttpClient.get(endpoint);
}

//packaged test fetched
async function packTest()
{
    let endpoint = 'fetch_health_package.php';
    return HttpClient.get(endpoint);
}


//test details show
async function singleTestDetail(data)
{
    let endpoint = 'fetch_single_health_package.php';
    return HttpClient.post(endpoint,data);
}





//ADD to cart for test
async function addToCart(data)
{
    let endpoint = 'add_to_cart.php';
    return HttpClient.post(endpoint,data);
}

//fetching of cart

async function cartFetch(data)

{
    let endpoint = 'fetch_test_adtocart.php';
    return HttpClient.post(endpoint,data);
}

//remove test cart
async function deleteTestCart(data)

{
    let endpoint = 'deleted_addtocard.php';
    return HttpClient.post(endpoint,data);
}

//increase quantity of test cart

async function testcartQuantity(data)

{
    let endpoint = 'qty_update.php';
    return HttpClient.post(endpoint,data);
}

//place oder test cart
async function placeOrder(data)

{
    let endpoint = 'order_test.php';
    return HttpClient.post(endpoint,data);
}





//ecom add to cart
async function ecomAddToCart(data)
{
    let endpoint = 'fetch_personal_care_add_cart.php';
    return HttpClient.post(endpoint,data);
}

//ecom fectch cart
async function ecomFetch(data)
{
    let endpoint = 'fetch_care_adtocart.php';
    return HttpClient.post(endpoint,data);
}

//remove ecom cart
async function deleteEcomcart(data)

{
    let endpoint = 'deleted_personalcare_addtocard.php';
    return HttpClient.post(endpoint,data);
}

//increase quantity of ecom cart

async function EcomcartQuantity(data)

{
    let endpoint = 'qty_care_update.php';
    return HttpClient.post(endpoint,data);
}

//place order ecom cart

async function EplaceOrder(data)

{
    let endpoint = 'order_care.php';
    return HttpClient.post(endpoint,data);
}




//fetch of personalcare with categoryid from shop by category
async function personalCare(data)
{
    let endpoint = 'fetch_personal_care.php';
    return HttpClient.post(endpoint,data);
}


//fetch only the categories 
async function personalCategory()
{
    let endpoint = 'fetch_personal_category.php';
    return HttpClient.get(endpoint);
}

// fetching only personal care from homepage
async function onlyPersonalCare()
{
    let endpoint = 'all_personal_care.php';
    return HttpClient.get(endpoint);
}


//nurse adding
async function addNurse(data)
{
    let endpoint = 'add_nurse.php';
    return HttpClient.post(endpoint,data);
}

//featured viewallfeatured test
async function viewfullTest()
{
    let endpoint = 'fetch_test.php';
    return HttpClient.get(endpoint);
}

//fullbody viewallPACK test
async function viewfullpackTest()
{
    let endpoint = 'fetch_health_package.php';
    return HttpClient.get(endpoint);
}

//my profile fetch
async function myprofileFetch(data)
{
    let endpoint = 'fetch_profile.php';
    return HttpClient.post(endpoint,data);
}

//my profile edit
async function profileEdit(data,obj)
{
    let endpoint = 'edit_profile.php';
    return HttpClient.upload(endpoint,'post',data,obj);
}

//health Record fetch
async function fetchHealthRecord(data)
{
    let endpoint = 'fetch_health_record.php';
    return HttpClient.post(endpoint,data);
}
//health single Record fetch
async function singleRecordDetail(data)
{
    let endpoint = 'single_helth_record.php';
    return HttpClient.post(endpoint,data);
}










export default {

    sendOtp,
    resendOtp,
    
    addFamily,
    fetchFamily,
    deleteFamilymember,
    famEdit,
    
    addBloodBank,
    addAmbulance,
    doctorSpecial1,
    dropdownFamily1,
    showFamily,
    fetchBookDoctor,
    fetchSingleDoctor,
    visitSheduleDetails,
    onlineSheduleDetails,
    book_visit,
    DoctorHomeShedule,
    allSheduleDetails,
    onlineSheduleLater,
    doctorHome ,
    doctorOnline,
    about_us,
    termscondition,
    PrivacyPolicy,
    fetchDoctorBook,
    fetchTestBook,
    ProductHistory,
    submitPrescription,
    fetchTest,
    packTest,
    singleTestDetail,
    
    addToCart,
    cartFetch,
    deleteTestCart,
    testcartQuantity,
    placeOrder,
    
    ecomAddToCart,
    ecomFetch,
    deleteEcomcart,
    EcomcartQuantity,
    EplaceOrder,

    personalCare,
    personalCategory,
    addNurse,
    viewfullTest,
    viewfullpackTest,
    onlyPersonalCare,
    myprofileFetch,
    profileEdit,
    fetchHealthRecord,
    singleRecordDetail,

    
}





// async function login(email, pass) {
//     let endpoint = 'login.php';
//     let data = {
//         email: email,
//         pass : pass,
//     }
//     return HttpClient.post(endpoint, data);
// }
