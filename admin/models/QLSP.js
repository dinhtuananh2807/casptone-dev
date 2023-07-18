//Khai báo phương thức quản lý sản phẩm
function Cart() {
   this.arrCart = [];
   this.getAllProduct = function() {
      var promise = axios({
         method:'GET',
         url:'https://shop.cyberlearn.vn/api/Product',
         ResponseType: 'JSON',
      });

      promise.then((result) => {
         console.log(result);
         this.arrCart = result.data.content;
         console.log(this.arrCart);

         console.log(this.arrCart[0].name);
         this.renderProduct(this.arrCart);
         
      });

      promise.catch((error) => {
         console.log(error);
      });

     
   };

   this.renderProduct = function(arr) {

         if(arr == undefined){
            arr=this.arrCart;
         };

         content= '';
         for (var i = 0; i < arr.length; i++){
            //Khởi tạo đối tượng product từ lớp Product
            var product = this.arrCart[i];
           
            content+=`
            <div class="product-item" id="${product.id}">
            <a href="./detail.html?id=${product.id}" class ="product-overlay-link"></a>
            <div class="product-image"><img src="${product.image}" alt="" /></div>

            <div class="product-short">
              <h3>${product.name}</h3>
              <p>${product.shortDescription}</p>
            </div>
            <div class="product-info">
              <button type="button" onclick="redirectPage(${product.id})">Buy Now</button>
              <p>${product.price}$</p>
            </div>
          </div>
            `
         }

         document.getElementById('body-product').innerHTML = content;
   };

   function redirectPage(id) {
      window.location.href = `/detail.html?id=${id}`;
  }
  

   //Render sản phẩm theo danh mục sản phẩm có liên quan.
   this.renderProductRelated = function(category) {

   };
   //  this.showGioHang () {

   //  }

   //  this.themGH() {

   //  }

   //  this.xoaGH(){

   //  }
    
   //  timViTri(ma) {

   //  }

   //  this.capNhatSoLuong(id,sl){

   //  }
 }



