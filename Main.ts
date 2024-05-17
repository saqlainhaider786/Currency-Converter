import ch from 'chalk'
import cnvrt from './Converter.js';
import userChoice from './UserChoice.js';

console.log(ch.bold.magenta("**********     Welcome To SSHR's Currency Converter    **********"));


do{
    await cnvrt();
}
while(await userChoice()==="Yes")

console.log(ch.bold("Thanks For Using my Currency Counter!..."))