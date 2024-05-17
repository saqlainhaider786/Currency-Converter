import inq from 'inquirer';
import ch from 'chalk';

let exe:string;

const userChoice= async () : Promise<string>=>{
    let usrCh=await inq.prompt([{
        type:"list",
        name:"ch",
        message:ch.bold.yellow("Do You want to continue ? "),
        choices:["Yes","No"]
    }]);

    exe=usrCh.ch;
    return exe;

}

export default userChoice;