/* let product={pid:"p101",
             pname:"Iphone 18",
             price:18000
}
for(property of product){
    console.log(product);
} */

//print key:value

/* let product={pid:"p101",
             pname:"Iphone 18",
             price:18000
}
for(property in product){
    console.log(property)
    console.log(product[property])
    } */

   /* let product={pid:"p101",
    pname:"Iphone 18",
    price:18000
}
for(key in product){
    console.log(key)
    console.log(key,":",product[key]);
}*/
// print user id
let users=[{id:101,name:"siri",sal:40000},
           {id:102,name:"nayana",sal:45000},
           {id:103,name:"shruthi",sal:50000},
           {id:104,name:"divya",sal:55000}]
           for(user of users){
            console.log(user.id);
           }

  // print user name
  for(user of users) {
    console.log(user.name)
  }        
//print user sal
for(i=0;i<=3;i++){
//for(i=0;i<=users.length-1)    
    console.log(users[i].sal)
}
