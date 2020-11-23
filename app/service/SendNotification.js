
async function sendNotification(data){
    const FIREBASE_API_KEY = "AAAASi6evAA:APA91bGKn2_HzsVP_iNer4SvEknKqDA0fnLC3piF613dl2dEAU2lu1BbdtgGyLdaQyulOVjSLgAGAKuZhepU9XEcZyy2IhaVA-HH21Xq7YOhAtM2drQUcbHhIGnFMYA7VzpONd8CebMr";
    const message = {
      registration_ids: [data.token], 
      data : data.data,
      notification: {
        title: data.title,
        body: data.body,
        "vibrate": 1,
        "sound": 1,
        "show_in_foreground": true,
        "priority": "high",
        "content_available": true,
      }
  }
  
    let headers = new Headers({
      "Content-Type": "application/json",
      "Authorization": "key=" + FIREBASE_API_KEY
    });
  
    let response = await fetch("https://fcm.googleapis.com/fcm/send", { method: "POST", headers, body: JSON.stringify(message) })
    response = await response.json();
    console.log(response);
}


export default {

    sendNotification

}