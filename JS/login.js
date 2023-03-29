// step -1 : add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // step 2 : get the email.address inside the email input feild
    const emailFeild = document.getElementById('email');
    const email = emailFeild.value;
    // step 3 : get the password
    // step 3.1 :set an id on the html element
    // step 3.2 : get the element
    // step 3.3 : get the value from the element
    const passwordFeild = document.getElementById('password');
    const password = passwordFeild.value;


    //  DANGER : do not verify email password on the way
    if(email === 'sontan@baap.com' && password === 'sontanbaap'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui password vule gecos !! toke ami tejjo sontan gosona korlam');
    }
})