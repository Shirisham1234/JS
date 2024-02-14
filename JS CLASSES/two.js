/* let emp={
    eid:101,
    name:"rahul"
}
console.log(Object.keys(emp))
console.log(Object.values(emp))
console.log(Object.keys(emp).length)
console.log(Object.values(emp).length)*/

/* let person={}
if(Object.keys(person).length>0){
    console.log("not empty Object")
}
else{
    console.log("empty Object")
} */

let emp={
    id:101,
    name:"siri",
    sal:40000
}
Object.keys(emp).length > 0 ? console.log("not empty"):
                              console.log("empty")
