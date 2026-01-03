const accountId = 2006
let accountEmail = "aastha@google.com"
var accountPassword = "0109"
accountCity = "Khanna"
let accountState;

// accountId = 2 //not allowed


accountEmail = "ap@ap.com"
accountPassword = "1818"
accountCity = "Jaipur"

console.log(accountId);

/*
Prefer not to use var 
because of the issue in block scope an functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])