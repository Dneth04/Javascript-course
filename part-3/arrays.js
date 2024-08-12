//Arrays (Data Structure)
let students = ['abc','pqr','sdf'];

let info = ["name",1,2];
let emptyarr=[];
let firstIndex=students[0][0];
console.log(firstIndex);
info[4]="happy";
console.log(info);

//Methods

students.push("BMW");
students.pop();
students.unshift("3");
students.unshift(4);
students.shift();


//qn

let months=["jan","jul","mar","aug"];
months.shift();
months.unshift("jul");
months[1]="june"

let x=months.indexOf("aug"); //ans=3  
let y=months.indexOf("may");//if not found=-1

let z=months.includes("june");//returns true if found
let d=months.includes("sept");//returns fasle

//concat

let primary=["red","blue","green"];
let secondary=["white","black"];
let joined=primary.concat(secondary);

//reverse
primary.reverse();

//slice
let colors=["red","green","blue","black"];
console.log(colors.slice());
console.log(colors.slice(1,3));

//splice

console.log(colors.splice(0,1,));
console.log(colors.splice(0,1,"grey","orange"));
console.log(colors.splice(3,3,"yellow","red"));
console.log(colors);

//sort
console.log(colors.sort());
let numbers=[100,43,21,2,3];
console.log(numbers.sort());//converts to string then sorts
//sort method is useful only for char and string datatype arrays 

let start=["jan","jul","mar","aug"];
start.splice(0,2,"jul","jun");
console.log(start);

console.log(start.reverse().indexOf("mar"));

//array references 

let arr=['a','b','c ',1]
let arrCopy=arr;

console.log(arr===arrCopy);
arr.push('d');
console.log(arrCopy);
arrCopy.pop();
console.log(arr);

arrCopy=[1,2,3,4]
console.log(arrCopy);
 
//constant

const arr1=[1,2,3];

arr1.pop();
arr1.push(54);
//does not give any error (we can modify the arr1 using push and pop in case of const)
console.log(arr1);
// arr1=[2,3,4]  
//gives an error because arr1 is a constant array meaning its address(reference) cannot be changed.

//Nested Arrays
let nums=[[2,4],[3,6],[4,8]];
console.log(nums[2][0]);

//practice qns
let array=[7,9,0,-2];
let n=3;
console.log(array.slice(0,n));
console.log(array.slice(array.length-n));
console.log((array.length-n));

//if an element exsists in a array or not
let element=2;
numArr=[1,3,4,5,6];
if(numArr.indexOf(element) != -1){
    console.log(`element found at index ${numArr.indexOf(element)}`);
}else{
    console.log("element not found")
}