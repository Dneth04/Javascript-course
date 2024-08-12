let todo = [];
let enter=prompt("Please enter your request");

while(true){
    if(enter == "quit"){
        console.log("quiting app");
        break;
    }
    if(enter == "list"){
        console.log("----------------")
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("----------------")
    }else if(enter == "add"){
        let tk=prompt("Please enter the task you want to add");
        todo.push(tk);
        console.log("task added");
    }else if(enter == "delete"){
        let idx = prompt("Enter the task index to delete");
        todo.splice(idx,1);
        console.log("task deleted");
    }else{
        console.log("Enter a valid command!!");
    }
    enter=prompt("Please enter your next request");
    
    }
