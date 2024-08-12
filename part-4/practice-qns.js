//1 qn
let arr=[1,2,3,4,5,6,2,3];
let num=2;
for(let i=0;i<arr.length;i++){
    if(arr[i]==2){
        arr.splice(i,1);
    }
}
console.log(arr);

//2 qn
let number=287152;
let count=0;
while(true){
    number=Math.floor(number/10);
    count++;
    if(number==0){
        break;
    }
}
console.log(count);


//3 qn (sum of digits)
let digit=287152;
let sum=0;
let rem=0;
while(true){
    x = digit%10;
    rem=rem+x;
    digit=Math.floor(digit/10);
    if(digit==0){
        break;
    }
}
console.log(rem);

//4 qn (factorial of a num)
let n=7;
let fact=1;
while(true){
    fact=fact*n;
    n=n-1;
    if(n==0){
        break;
    }
}
console.log(fact);

//5 qn (largest number in an array)
let array=[1332,34,54,2,35];
let largest=array[0];
for(let i=0;i<array.length;i++){
if (array[i]>largest){
    largest=array[i];
}
}
console.log(largest);