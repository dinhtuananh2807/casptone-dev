//Check input rỗng
//Check định dạng
//Check mật khẩu không trùng nhau
function checkInputRong(idInput,idNoti){
    //Gọi dom tới và check xem dữ liệu có rỗng ko nếu rỗng
    // sẽ xuất ra thông báo và chặn người dùng thêm vào. 
    var valueInput = document.getElementById(idInput).value;
        if(valueInput == ""){
            document.getElementById(idNoti).innerHTML="Vui lòng không để trống";
            return false;
        }else {
            document.getElementById(idNoti).innerHTML = "";
            return true;
        }
    
    }


    function  checkDingDangEmail(idInput,idNoti) {
        //Viết một Regax
        var regexEmail =    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var valueInput = document.getElementById(idInput).value;
        //Sử dụng regex.test sẽ trả về 2 kq 
        //Nếu dữ liệu phù hợp với regex sẽ trả về true và ngược lại.
        if(!regexEmail.test(valueInput) && valueInput !==''){
            document.getElementById(idNoti).innerHTML="Email nhập không đúng định dạng";
            return false;
        }else if(regexEmail.test(valueInput) && valueInput !=='') {
            document.getElementById(idNoti).innerHTML = "";
            return true;
        }
    }

    function checkDinhDangPhone(idInput,idNoti){
        var regexNumber = /^[0-9]+$/;
        //Điểm trong khoảng từ 0-10
        //thứ 2 điểm phải là số
    
        var valueInput = document.getElementById(idInput).value;
        if(!valueInput.match(regexNumber) && valueInput !==''){
            document.getElementById(idNoti).innerHTML = "Vui lòng nhập đúng chữ số 0-9";
            return false;
        }else if (valueInput.match(regexNumber) && valueInput !==''){
            document.getElementById(idNoti).innerHTML = "";
            return true;
        }
    }


    function checkPassword(idInput,idNoti,idInput2,idNoti2){
        var valueInput = document.getElementById(idInput).value;
        var valueInput2 = document.getElementById(idInput2).value;

        if(valueInput!=valueInput2 && valueInput!=='' && valueInput2 !== ''){
            document.getElementById(idNoti).innerHTML = "Mật khẩu không giống nhau";
            document.getElementById(idNoti2).innerHTML = "Mật khẩu không giống nhau";
            return false;
        }else if(valueInput!=='' && valueInput2 !== '') {
            return true;
        }
    }




