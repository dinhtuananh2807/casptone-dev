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
      
         this.arrCart = result.data.content;

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
              <button>Buy Now</button>
              <p>${product.price}$</p>
            </div>
          </div>
            `
         }

         document.getElementById('body-product').innerHTML = content;
   };

   //Render sản phẩm theo danh mục sản phẩm có liên quan.
   this.renderProductRelated = function(id) {
      var promise = axios({
         method:'GET',
         url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id} `,
         ResponseType: 'JSON',
      });

      promise.then((result) => {
       
         this.arrCart = result.data.content;
       

         var relatedProducts = this.arrCart.relatedProducts;
         // this.arrCart = result.data.content;
         // console.log(this.arrCart);

         // console.log(this.arrCart[0].name);
         // this.renderProduct(this.arrCart);
         content= '';
        for(var i = 0; i < relatedProducts.length;i++){
         var product = relatedProducts[i];

           
            content+=`
            <div class="product-item" id="${product.id}">
            <a href="./detail.html?id=${product.id}" class ="product-overlay-link"></a>
            <div class="product-image"><img src="${product.image}" alt="" /></div>

            <div class="product-short">
              <h3>${product.name}</h3>
              <p>${product.shortDescription}</p>
            </div>
            <div class="product-info">
              <button>Buy Now</button>
              <p>${product.price}$</p>
            </div>
          </div>
            `
        }

 

        document.getElementById('relatedBody').innerHTML = content;
         
      });

      promise.catch((error) => {
         console.log(error);
      });

      


   };
   this.productDetail = function(id) {
      var promise = axios({
         method:'GET',
         url:`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id} `,
         ResponseType: 'JSON',
      });

      promise.then((result) => {
         console.log(result);
         this.arrCart = result.data.content;
        

         var relatedProducts = this.arrCart
       
         content='';
        

       

        
         content+=
         `          <div class="content-img">
         <img class="img-detail" src="${relatedProducts.image}" alt="">
       </div>
       <div class="content-item">
         <p class="item-title">${relatedProducts.name}</p>
         <p class="item-text">${relatedProducts.description} </p>
         <p class="item-size">Available size
         </p>
         <div class="size-number" id="size">
       
         </div>
         <p class="item-money">${relatedProducts.price}$</p>
         <div class="item-quantity">
           <span class="plus">
             <i class="fa-regular fa-plus"></i>
           </span>
           <span class="number">
             1
           </span>
           <span class="minus">
             <i class="fa-solid fa-minus"></i>
           </span>
         </div>
         <button class="item-add">
           Add to cart
         </button>
       </div>`;

       
        content2='';
        for(var i = 0; i <this.arrCart.size.length;i++ ){
           content2+= `<span class="number">${this.arrCart.size[i]}</span>`;
        }
        document.getElementById('content-detail').innerHTML = content;
        document.getElementById("size").innerHTML = content2;
         
      });

      promise.catch((error) => {
         console.log(error);
      });
   }
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



