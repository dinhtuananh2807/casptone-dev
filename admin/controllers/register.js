
function postRegisterUser(user){
    axios.post('https://shop.cyberlearn.vn/api/Users/signup',user)
    .then((result)=>{
        console.log(result);
         document.querySelector('.toast-body .me-auto').innerHTML = result.data.message;
         const toastLiveExample = document.getElementById('liveToast');
         const toast = new bootstrap.Toast(toastLiveExample);
         toastLiveExample.style.backgroundColor="#198754";
         toast.show();
    })
    .catch((error)=>{
        console.log(error);
        document.querySelector('.toast-body .me-auto').innerHTML = error.response.data.message;
        const toastLiveExample = document.getElementById('liveToast');
        const toast = new bootstrap.Toast(toastLiveExample);
        toastLiveExample.style.backgroundColor="#DC3545";
        toast.show();
    })
}

document.getElementById("btnRegister").onclick=function(event){
    event.preventDefault(event);
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let pass = document.getElementById("password").value;
    let pass_confirm = document.getElementById("pass-confirm").value;
    let name = document.getElementById("name").value;
    let gender = getRadioValue("gender");
    console.log(gender);
    let user = new UserInfo(email,pass,pass_confirm,name,phone,gender);
    postRegisterUser(user);
    validateEmail(email);
    event.target.reset();
}

function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            value=elements[i].value;
            return value=="male" ? "true" : "false";
        }
    }
}

function validateEmail(emailField){
    let validateResult = document.querySelector("#result");
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(emailField) == false) 
    {
        validateResult.innerHTML="email is invalid";
        validateResult.style.color="red";
        return false;
    }
    validateResult.innerHTML=`${emailField} email is valid`;
    validateResult.style.color="green";
    return true;

}
  
  

