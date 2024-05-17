import inq from "inquirer";
import ch from 'chalk';

const convertMnt = async () => {
    let mony = await inq.prompt([
        {
          name:"amt",
          type:"number",
          message:ch.bold.white("Enter The Amount : ")
        }  
      ,{
          name: "curr_from",
          type: "list",
          message:ch.bold.cyan("Select The Amount Currency "),
          choices: ["USD", "Euro", "CNY", "IRR", "IQD", "PKR", "TRY"],
        },
        {
          name: "curr_to",
          type: "list",
          message:ch.bold.cyan("Convert To "),
          choices: ["USD", "Euro", "CNY", "IRR", "IQD", "PKR", "TRY"],
        },
      ]);
  switch (mony.curr_from) {
    case "USD":
      switch (mony.curr_to) {
        case "USD":
            console.log(ch.bold.green(`${mony.amt} $ = ${mony.amt} $`));
            break;
        case "Euro":
          console.log(ch.bold.green(`${mony.amt} $ = ${mony.amt * 0.9} €`));
          break;
        case "CNY":
          console.log(ch.bold.green(`${mony.amt} $ = ${mony.amt * 7.2} ¥`));
          break;
        case "IRR":
          console.log(ch.bold.green(`${mony.amt} $ = ${mony.amt * 41762.5} ﷼`));
          break;
        case "IQD":
          console.log(ch.bold.green(`${mony.amt} $ = ${mony.amt * 1308.5} ع.د`));
          break;
        case "PKR":
          console.log(ch.bold.green(`${mony.amt} $ = ${mony.amt * 278.1} ₨`));
          break;
        case "TRY":
          console.log(ch.bold.green(`${mony.amt} $ = ${mony.amt * 32.2} ₺`));
          break;
      }

      break;
    
      case "Euro":
      switch (mony.curr_to) {
        case "Euro":
            console.log(ch.bold.green(`${mony.amt} € = ${mony.amt} €`));
            break;
        case "USD":
          console.log(ch.bold.green(`${mony.amt} € = ${mony.amt * 1.1} $`));
          break;
        case "CNY":
          console.log(ch.bold.green(`${mony.amt} € = ${mony.amt * 0.1} ¥`));
          break;
        case "IRR":
          console.log(ch.bold.green(`${mony.amt} € = ${mony.amt * 45078.8} ﷼`));
          break;
        case "IQD":
          console.log(ch.bold.green(`${mony.amt} € = ${mony.amt * 1395.7} ع.د`));
          break;
        case "PKR":
          console.log(ch.bold.green(`${mony.amt} € = ${mony.amt * 300.8} ₨`));
          break;
        case "TRY":
          console.log(ch.bold.green(`${mony.amt} € = ${mony.amt * 35.0} ₺`));
          break;
      }

      break;
    
      case "CNY":
      switch (mony.curr_to) {
        case "CNY":
        console.log(ch.bold.green(`${mony.amt} ¥ = ${mony.amt} ¥`));
          break;
        case "Euro":
          console.log(ch.bold.green(`${mony.amt} ¥ = ${mony.amt * 0.1} €`));
          break;
        case "USD":
          console.log(ch.bold.green(`${mony.amt} ¥ = ${mony.amt * 0.1} $`));
          break;
        case "IRR":
          console.log(ch.bold.green(`${mony.amt} ¥ = ${mony.amt * 5790.5} ﷼`));
          break;
        case "IQD":
          console.log(ch.bold.green(`${mony.amt} ¥ = ${mony.amt * 181.2} ع.د`));
          break;
        case "PKR":
          console.log(ch.bold.green(`${mony.amt} ¥ = ${mony.amt *  38.6} ₨`));
          break;
        case "TRY":
          console.log(ch.bold.green(`${mony.amt} ¥ = ${mony.amt * 4.5} ₺`));
          break;
      }

      break; 
    
      case "IRR":
      switch (mony.curr_to) {
        case "IRR":
        console.log(ch.bold.green(`${mony.amt} ﷼ = ${mony.amt} ﷼ `));
          break;
        case "Euro":
          console.log(ch.bold.green(`${mony.amt} ﷼ = ${mony.amt * 0.00002} €`));
          break;
        case "CNY":
          console.log(ch.bold.green(`${mony.amt} ﷼ = ${mony.amt * 0.00017} ¥`));
          break;
        case "USD":
          console.log(ch.bold.green(`${mony.amt} ﷼= ${mony.amt * 0.00002} $ `));
          break;
        case "IQD":
          console.log(ch.bold.green(`${mony.amt} ﷼ = ${mony.amt * 0.03133} ع.د`));
          break;
        case "PKR":
          console.log(ch.bold.green(`${mony.amt} ﷼ = ${mony.amt * 0.00667} ₨`));
          break;
        case "TRY":
          console.log(ch.bold.green(`${mony.amt} ﷼ = ${mony.amt * 0.00077} ₺`));
          break;
      }

      break;
    
      case "IQD":
      switch (mony.curr_to) {
        case "IQD":
        console.log(ch.bold.green(`${mony.amt} ع.د  = ${mony.amt} ع.د `));
          break;
        case "Euro":
          console.log(ch.bold.green(`${mony.amt} ع.د  = ${mony.amt * 0.0007} €`));
          break;
        case "CNY":
          console.log(ch.bold.green(`${mony.amt} ع.د = ${mony.amt * 0.0055} ¥`));
          break;
        case "IRR":
          console.log(ch.bold.green(`${mony.amt} ع.د  = ${mony.amt * 31.9519} ﷼`));
          break;
        case "USD":
          console.log(ch.bold.green(`${mony.amt} ع.د = ${mony.amt * 0.0008} $ `));
          break;
        case "PKR":
          console.log(ch.bold.green(`${mony.amt} ع.د  = ${mony.amt * 0.2127} ₨`));
          break;
        case "TRY":
          console.log(ch.bold.green(`${mony.amt} ع.د  = ${mony.amt * 0.0246} ₺`));
          break;
      }

      break;
    
      case "PKR":
      switch (mony.curr_to) {
        case "PKR":
        console.log(ch.bold.green(`${mony.amt} ₨ = ${mony.amt} ₨`));
          break;
        case "Euro":
          console.log(ch.bold.green(`${mony.amt} ₨ = ${mony.amt * 0.0033} €`));
          break;
        case "CNY":
          console.log(ch.bold.green(`${mony.amt} ₨ = ${mony.amt * 0.0259} ¥`));
          break;
        case "IRR":
          console.log(ch.bold.green(`${mony.amt} ₨ = ${mony.amt * 150.0154} ﷼`));
          break;
        case "IQD":
          console.log(ch.bold.green(`${mony.amt} ₨ = ${mony.amt * 4.7008} ع.د`));
          break;
        case "USD":
          console.log(ch.bold.green(`${mony.amt} ₨ = ${mony.amt * 0.0036} $`));
          break;
        case "TRY":
          console.log(ch.bold.green(`${mony.amt} ₨ = ${mony.amt * 0.1157} ₺`));
          break;
      }

      break;

    case "TRY":
      switch (mony.curr_to) {
        case "TRY":
        console.log(ch.bold.green(`${mony.amt} ₺ = ${mony.amt} ₺`));
          break;
        case "Euro":
          console.log(ch.bold.green(`${mony.amt} ₺ = ${mony.amt * 0.0285} €`));
          break;
        case "CNY":
          console.log(ch.bold.green(`${mony.amt} ₺ = ${mony.amt * 0.2241} ¥`));
          break;
        case "IRR":
          console.log(ch.bold.green(`${mony.amt} ₺ = ${mony.amt * 1296.6428} ﷼`));
          break;
        case "IQD":
          console.log(ch.bold.green(`${mony.amt} ₺ = ${mony.amt * 40.6225} ع.د`));
          break;
        case "PKR":
          console.log(ch.bold.green(`${mony.amt} ₺ = ${mony.amt * 8.6384} ₨`));
          break;
        case "USD":
          console.log(ch.bold.green(`${mony.amt} ₺ = ${mony.amt * 0.0310} $`));
          break;
      }
  }
};

export default convertMnt;