import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

const apikey = "73f988ec25067fc18caced0e"
const url = "https://v6.exchangerate-api.com/v6/73f988ec25067fc18caced0e/latest/USD"

const paisa = () =>{
https.get(url, (response) =>{
    //response is object that is readable stream ,with the help of res three events can be listen : 1.data, 2, end, errro
    let data = "";
    response.on("data", (chunck)=>{
        data += chunck;
    })
    response.on("end",() =>{
        const rates = JSON.parse(data).conversion_rates;
        rl.question("Enter the amount in USD: ", (amount) => {
            rl.question("Enter the target currency: ", (currency) => {
                const money = rates[currency.toUpperCase()];
                if (money) {
                    const convertedAmount = (amount * money).toFixed(2);
                    console.log(chalk.blue("Here is the converted amount:"));
                    console.log(chalk.red(`${amount} USD = ${convertedAmount} ${currency}`));
                    rl.close();
                } else {
                    console.log(chalk.red("Currency not found"));
                    paisa();
                }
                //  rl.close();
            });
        });
    });

    response.on("error", (err) =>{
        console.error(chalk.red("Error fetching data:", err.message));
    })

  })
}
paisa();
