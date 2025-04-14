import readline from "readline";
import { pathToFileURL } from "url";
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const todos = [];

const showMenu = () =>{
   console.log("\n1:Add a Task");
   console.log("2:view Tasks");
   console.log("3: Exit");
   rl.question("choose an option :", handleinput)
}

const handleinput = (option) =>{
    if(option === '1'){
        rl.question("Enter the task", (task) =>{
             todos.push(task);
             console.log("Task is added:", task);
             showMenu();
        })
    }
    else if(option === "2"){
        console.log("/n your todos list");{
            todos.forEach((task,index) =>{
                console.log(`${index+1} : ${task}`);
            })
            showMenu();
        }
    }
    else if(option === "3"){
        console.log('Good Bye');
        rl.close();
    }
    else{
        console.log("Invalid ooption");
        showMenu();
    }
}






showMenu();