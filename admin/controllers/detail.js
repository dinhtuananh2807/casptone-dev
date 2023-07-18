const productId = getParams();
getProductDetail(productId);

function getParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const productId = urlParams.get("id");
  return productId;
}

// function updateProduct(id) {
//     axios(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`, {
//         method: 'POST',
//         responseType: "json",
//     }).then(function (productDetail) {
//         updateView(productDetail)
//     })
// }

function getProductDetail(id) {
  axios(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`, {
    responseType: "json",
  }).then(function (result) {
    const productDetail = result.data.content;
    console.log(productDetail);
    document.querySelector(".product_name").innerHTML = `
            <h2> ${productDetail.name} <h2>
            <p> ${productDetail.description} </p>
        `;
    document.querySelector(".product_image img").src = `${productDetail.image}`;
    let sizeList = ``;
    productDetail.size.forEach((size) => {
      sizeList += `
            <li>
            <a href="#">
            ${size}
            </a>
            </li>
            `;
    });
    document.querySelector(".product_info > ul").innerHTML = sizeList;
    document.querySelector(".price").innerHTML = `${productDetail.price}$`;

    let relatedProductList = ``;
    for (var i = 0; i < productDetail.relatedProducts.length; i++) {
      relatedProductList += `
      <div class=" col-4 g-5 related_product_item">
      <div class="related_image w-100">
        <img class="img-fluid w-75" src="${productDetail.relatedProducts[i].image}">
        </div>
        <div class="related_content">
        <div related_subTitle class="d-block"><h3>${productDetail.relatedProducts[i].name}<h3>
        <h2>${productDetail.relatedProducts[i].shortDescription}</h2></div>
        <div class="button_group input-group align-items-">
          <button class="btn btn-primary">By Now</button>
          <label>${productDetail.relatedProducts[i].price}$</label>
        </div>
        </div>
        </div>
      `;
    }
    document.querySelector(".related_product_content .row").innerHTML =
      relatedProductList;
  });
}
