import https from  'https';
import chalk from 'chalk'



const getjoke = () =>{
    const url = 'https://official-joke-api.appspot.com/random_joke';
    https.get(url,(response) =>{
        let data = "";
        response.on('data', (chunk) => {
            data += chunk;
        });
        response.on('end', () =>{
            const joke = JSON.parse(data);
            console.log(chalk.blue('here is a random joke for you:'));
            console.log(chalk.red(`${joke.setup}`));
            console.log(chalk.green(`${joke.punchline}`))
        })
        
        response.on('error', (err) => {
            console.error(chalk.red('Error fetching joke:', err.message));
        });
    })

}








getjoke();
