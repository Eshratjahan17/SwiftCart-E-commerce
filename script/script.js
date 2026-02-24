const loadCatagories = async () => {
    fetch("https://fakestoreapi.com/products/categories")
    
.then((res) => res.json()
.then((data)=>displayCatagories(data)));
   
}
const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    
.then((res) => res.json()
.then((data)=>displayAllProducts(data)));

}
const loadProducts = (catagoryName) => {
   const url=`https://fakestoreapi.com/products/category/${catagoryName}`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>
      displayProducts(data)
       );
  
}
const loadProductDetails=async(id)=>{
  const url=`https://fakestoreapi.com/products/${id}`;
  const res= await fetch(url);
  const details= await res.json();
  displayProductDetails(details);
}
const displayProductDetails=(details)=>{
  console.log(details);
  const detailsBox = document.getElementById("details-container");
  detailsBox.innerHTML=`
  
   <h2 class="text-xl mb-0 pb-5 font-medium text-center" >${details.title}</h2>
    <p>${details.description}</p>
        <div class="flex justify-between py-5">
          <p class="text-xl font-semibold">$${details.price}</p>
          <div class="ratings flex items-center justify-end " >
             <i class="fa-solid fa-star text-yellow-500 "> </i>

              <span>${details.rating.rate}  </span>
              <span>(${details.rating.count} ) </span>

            </div>
    
  
  `
  document.getElementById("details_modal").showModal();

}
const displayAllProducts = (allproducts) => {
  const productContainer=document.getElementById("trendingItems");
  productContainer.innerHTML= "";
  
  allproducts.forEach((product) => {
  console.log(product);
  const prodcutCrad=document.createElement("div");
  prodcutCrad.innerHTML=`
  <div class="card bg-base-100 shadow-sm">
          <figure>
            <img class="h-70 w-auto"
              src="${product.image}"
              alt="Shoes" />
          </figure>
          <div class="card-body">
            <div class="catagoryBadge pb-5">
              <div class=" badge pl-0 ">
                <div class="badge badge-soft badge-primary">${product.category}</div>
              </div>
              <div class="ratings flex items-center justify-end ">
                <i class="fa-solid fa-star text-yellow-500 "> </i>
                <span>${product.rating.rate}  </span>
                <span>(${product.rating.count} ) </span>
  
              </div>
            </div>
            <h2 class="text-xl mb-0 pb-0 font-medium">
            ${product.title}
            </h2>
            <p class="pt-0 pb-6 text-lg font-bold ">$109.95</p>
            <div class="card-actions cardBtngroup">
              <button onclick="loadProductDetails(${product.id})" class="btn cardBtn shadow-md">
                <i class="fa-regular fa-eye"></i>
               Details
              </button>
    
              <button class="btn cardBtn"><i class="fa-solid fa-cart-shopping"></i>
                Add</button>
            </div>
          </div>
        </div>
  `;
  productContainer.append(prodcutCrad);
  
  });
  }

const displayProducts = (products) => {
const productContainer=document.getElementById("trendingItems");
productContainer.innerHTML= "";

products.forEach((product) => {
console.log(product);
const prodcutCrad=document.createElement("div");
prodcutCrad.innerHTML=`
<div class="card bg-base-100 shadow-sm">
        <figure>
          <img class="h-70 w-auto"
            src="${product.image}"
            alt="Shoes" />
        </figure>
        <div class="card-body">
          <div class="catagoryBadge pb-5">
            <div class=" badge pl-0 ">
              <div class="badge badge-soft badge-primary">${product.category}</div>
            </div>
          
            <div class="ratings flex items-center justify-end ">

              <i class="fa-solid fa-star text-yellow-500 "> </i>
              <span>${product.rating.rate}  </span>
              <span>(${product.rating.count} ) </span>

            </div>
          </div>
          <h2 class="text-xl mb-0 pb-0 font-medium">
          ${product.title}
          </h2>
          <p class="pt-0 pb-6 text-lg font-bold ">$109.95</p>
          <div class="card-actions cardBtngroup">
            <button onclick="loadProductDetails(${product.id})" class="btn cardBtn shadow-md">
              <i class="fa-regular fa-eye"></i>
              Details
            </button>
  
            <button class="btn cardBtn"><i class="fa-solid fa-cart-shopping"></i>
              Add</button>
          </div>
        </div>
      </div>
`;
productContainer.append(prodcutCrad);

});
}

const displayCatagories = (catagories) => {
   
    const badgeContainer=document.getElementById("catagoryBadge");
    badgeContainer.innerHTML="";

    for(let catagory of catagories){
        const badgeDiv=document.createElement("div");
        badgeDiv.innerHTML=`
         <div onClick="loadProducts ('${catagory}')" class="badge badge-neutral badge-outline ">
         <button >${catagory} </button>
         
         </div>
        
        `;
        badgeContainer.append(badgeDiv);
       
        
    }
}
loadCatagories();
loadAllProducts();