 let reg = /paras/;
 // let look into some metacharacter symbols
reg = /^str/ // ^ string start with
reg = /as$/ // $ string end with 
reg = /pa.as/ // . any one character if more dot then more char.
reg = /p*ras/ // * 0 or more characters
reg = /pa?rasz?t/ // optional
reg = /paras\^/ // for special characters

 let str = 'par is paras^'
 
 let r = reg.exec(str)
 console.log(r);

 if (reg.test(str)) {
    console.log(`the string ${str} matches the expression ${reg.source}`);
 } else {
    console.log(`the string ${str} does not match the expression ${reg.source}`);
    
 }