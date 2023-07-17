var cart = new Cart();

// console.log(cart);

 cart.getAllProduct(); 

// function register () {
//     //getdata từ form input
//     //Valid
//     //submit lên
//     //clear form

//     var obRegister = {

//        email: '',
//        password: '',
//        password_confirm:'',
//        name:'',
//        gender:true,
//        phone:'',
//     }
   

//     event.preventDefault();
//     var arrInput = [
//         'email',
//         'name',
//         'password',
//         'password_confirm',
//         'phone',
//     ];
    
//     var arrNoti = [
//         'notiemail',
//         'notiname',
//         'notipassword',
//         'notipassword-confirm',
//         'notiphone',
//       ];

//       var valid = true;

//     //   valid &= checkInputRong('email','notiemail')
//     //   &checkInputRong('name','notiname')
//     //   &checkInputRong('password','notipassword')
//     //   &checkInputRong('password-confirm','notipassword-confirm')
//     //   &checkInputRong('phone','notiphone');

//       for(var i = 0; i < arrInput.length;i++){
//         checkInputRong(arrInput[i],arrNoti[i]);
//         var giaTri = document.getElementById(arrInput[i]).value;
//         obRegister[arrInput[i]] = giaTri;    

//       }

    


//        //Check định dạng Email

//        valid = checkDingDangEmail('email','notiemail');
//        console.log(valid);


//        valid = checkDinhDangPhone('phone','notiphone');
//        console.log(valid);

//        valid = checkPassword('password','notipassword','password_confirm','notipassword-confirm');
//        console.log(valid);
//       if(valid){
//         // var promise = axios({
//         //     method:''
//         // })
//         //xóa thuộc tính password confirm để gửi lên server

//         delete obRegister.password_confirm;


//         var promise = axios({
//             method:'POST',
//             url:'https://shop.cyberlearn.vn/api/Users/signup',
//             responseType:'JSON',
//             data: obRegister,
//         })

//         promise.then((result)=>{
//             console.log(result);
//             // Sau khi gửi thành công thì dùng lệnh xóa đi dữ liệu 
//             document.getElementById("formSubmit").reset();
//         });

//         promise.catch((error)=>{
//             console.log(error);
//         })
//       }

    
//  }

//  document.getElementById("btnSubmit").onclick = register;

 //Detail

 var idProduct = window.location.href;
 console.log("Product id là",idProduct);



// Product chi tiết

// function getProductDetail(){
//     const shopId =  new URLSearchParams(window.location.search).get('shop_id');
//     console.log(shopId);
// }

// getProductDetail();


// Sample URL
const url = window.location.href;

// Create a URLSearchParams object with the URL
const searchParams = new URLSearchParams(new URL(url).search);

// Get the value of the 'id' parameter
const id = searchParams.get('id');

console.log("Id là:",id); // Output: 123