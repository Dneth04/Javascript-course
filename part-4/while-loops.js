let i=20;
while(i>0){
    console.log(i);
    i=i-2;
}

//favourite movie 
let favMovie='VIP';
let guess=prompt("Guess the movie name!!");
while((guess!=favMovie)&&(guess != 'quit')){
    console.log("wrong guess");
    guess=prompt("Try again!!");
}

if(guess == favMovie){
    console.log("congrats!!");
}else{
    console.log("you quit!!");
}

