// "use strict";

// let rtx3080, rtx3070,
//     rtx3060ti = [];

// fetch("data.json")
//         .then(function(resp)  {
//             return resp.json();
//         })
//         .then(function(data){
//             console.log(data);
//             rtx3080= data[0];
//             rtx3070= data[1];
//             rtx3060ti= data[2]

//         });



validation = () => {
   var name = document.getElementById("name").value;
   var subject = document.getElementById("subject").value;
   var phone = document.getElementById("phone").value;
   var email = document.getElementById("email").value;
   var message = document.getElementById("message").value;
   var error_message = document.getElementById("error_message");
    var text;
   error_message.style.padding = "10px";

   if(name.length <5) {
       text= " Please Enter Valid Name";
       error_message.innerHTML = text;
       return false;


   }
   if(subject.length <10) {
    text= " Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;


}
if(phone.length <10) {
    text= " Please Enter Phone #";
    error_message.innerHTML = text;
    return false;


}
if(email.length <20) {
    text= " Please Enter Valid Email";
    error_message.innerHTML = text;
    return false;


}
if(message.length <5) {
    text= " Please Enter Valid Message";
    error_message.innerHTML = text;
    return false;


}

   return false
}


$.ajax({
    url: "data.json",
    type: "GET",
}).then(
    (data) => {
        console.log(data);
        render(data);
},
    () => {
        console.log('failed');
    }
);






const render = (data) => {
    data.forEach(item => {
        $colDiv = $('<div class="col-md-3">');
        $pTitle = $('<a href="product' + item.id + '.html" class="title-link"><h3>' + item.title + "</h3></a>");
        $pImage = $('<a href="product' + item.id + '.html"><img src="' + item.image + '" /></a>');
        $pDesc = $('<p class="item-description">' + item.description + '</p>');
        pStrike = parseInt(item.price) + Math.floor(Math.random() * 200);
        $pPrice = $('<p class="price">$' + '<strike>' + pStrike + '</strike>' + '     ' + '<strong>$' + item.price + '</strong>' + '<a href="#" class="add-to-cart"><i class="fa fa-shopping-cart"></i> Add to Cart</a></p>');
        $colDiv.append($pTitle, $pImage, $pDesc, $pPrice);
        $('#on-sale-row').append($colDiv);
    })
}


































// var rtx3080 = {
//         id: 1,
//         name: "RTX 3080",
//         price: 800,
//         description: "NVIDIA GeForce RTX 3080 10GB GDDR6X",
//         category: "electronics",
//         image: "https://cdn.wccftech.com/wp-content/uploads/2020/06/NVIDIA-RTX-3080-3D-Render-4-1480x833.png",
//         rating: {
//           rate: 4.4,
//           count: 0

//         }

//     } ; 


// var rtx3070 = {
    
//         id: 2,
//         name: "RTX 3070",
//         price: 695,
//         description: "EVGA GeForce RTX 3070 XC3 Gaming",
//         category: "electronics",
//         image: "https://images.evga.com/products/gallery/png/08G-P5-3751-KR_XL_3.png",
//         rating: {
//           rate: 4.0,
//           count: 0
//         }
//       }


// var rtx3060ti = {
    
//         id: 3,
//         name: "RTX 3060TI",
//         price: 109,
//         description: "ASUS RTX 3060TI 8GB GRDDR6 ",
//         category: "electronics",
//         image: "https://dlcdnwebimgs.asus.com/gain/6cd32e69-b323-4f7b-8204-ca6bb2db7cab/",
//         rating: {
//           "rat": 3.7,
//           "count": 319
//         }
//       }

