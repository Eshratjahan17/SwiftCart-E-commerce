const loadCatagories = async () => {
    fetch("https://fakestoreapi.com/products/categories")
.then((res) => res.json()
.then((data)=>displayCatagories(data)));
   
}

const displayCatagories = (catagories) => {
   
    const badgeContainer=document.getElementById("catagoryBadge");
    badgeContainer.innerHTML="";

    for(let catagory of catagories){
        const badgeDiv=document.createElement("div");
        badgeDiv.innerHTML=`
         <div  class="badge badge-neutral badge-outline">
         <button>${catagory} </button>
         
         </div>
        
        `;
        badgeContainer.append(badgeDiv);
    }
}
loadCatagories();