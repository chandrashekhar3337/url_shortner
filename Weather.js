import https from "https";
import readline from "readline";
import chalk from "chalk";
import fs from "fs";    

 const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout          
 })

 const url = "https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=739ce36749d8265b0e66995237d2c2ce&units=metric"

 https.get(url, (response) =>{
    let data = "";
    response.on("data",(chunk) => {
        data += chunk
    })
    response.on("end", () =>{
        const weatherData = JSON.parse(data);
        console.log(weatherData);
        const weather = {
            city: weatherData.name,
            temperature: weatherData.main.temp,
            description: weatherData.weather[0].description,
            humidity: weatherData.main.humidity,
            windSpeed: weatherData.wind.speed
        };       
        console.log(chalk.blue("Weather Information:"));
        console.log(chalk.red(`City: ${weather.city}`));
        console.log(chalk.green(`Temperature: ${weather.temperature}°C`));
        console.log(chalk.yellow(`Description: ${weather.description}`)); 
        console.log(chalk.cyan(`Humidity: ${weather.humidity}%`));                     
    })
 }) 