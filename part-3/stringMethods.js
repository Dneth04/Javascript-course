
// let password= prompt("Set your Passowrd");
// console.log(password.trim());
// console.log(password);

let msg="  HELLO   "
console.log(msg.trim());
console.log(msg.toLowerCase());
console.log(msg.indexOf("E"));
console.log(msg.toUpperCase().trim());
console.log(msg.trim().slice(2));
console.log(msg.trim().slice(-2));
console.log(msg.trim().replace("ELLO","appy"));
console.log(msg.trim().repeat(3));
console.log(msg.trim().replace('L','t').replace('L','t'));


//practice qns
let str=""
if(str){
    console.log("it is not a blank string")
}else{
    console.log("it is a blank string")
}


//character at a given index is lower case

let char='a';
let index=2;
let string='orange';
if(string[index]==string[index].toLowerCase()){
    console.log("yes")
}