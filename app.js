function sendMessage(){
    let phoneNumber = "923141702658";
    let message = "Hello, Your Order is confirm";
    let encodedmsg = encodeURIComponent(message);

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodedmsg;
    window.location.href = url;

}

sendMessage();