import realine from "readline";
import fs from "fs";
import path from "path";
const rl = realine.createInterface({
    input:process.stdin,
    output:process.stdout
})


const file = () =>{
    rl.question("enter your file name :", (nwef)=>{
          rl.question("enter your content :",(content)=>{
             fs.writeFileSync(`${nwef}.txt`,content, "utf-8");
            console.log(`your file ${nwef} is created successfully`);
            rl.close();
          })
    })
}

file();


