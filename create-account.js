/**Bank Account

Write a function called createAccount which creates a bank account given a PIN number
and an initial deposit amount. The return value should be an object with four methods on it:
function createAccount(PIN, deposit){
    return --> object{}
}
checkBalance: Given the correct PIN, return the current balance. 
(If the PIN is invalid, return “Invalid PIN.”)
deposit: Given the correct PIN and a deposit amount, increment the account balance by the amount.
 (If the PIN is invalid, return “Invalid PIN.”)
withdraw: Given the correct PIN and a withdrawal amount, decrement the account balance by the amount. You also shouldn’t be able to withdraw more than you have. (If the PIN is invalid, return “Invalid PIN.”)
changePin: Given the old PIN and a new PIN, change the PIN number to the new PIN. (If the old PIN is invalid, return “Invalid PIN.”)
let account = createAccount("1234", 100);
function createAccount(PIN, deposit){
    return --> object{} -->{checkBalance :current balance OR Invalid PIN,
                                          deposit: account balance + deposit amount,
                                          withdraw: account balance - deposit amount,
                                          changePIN: old PIN = new PIN}
}

account.checkBalance("oops");
// "Invalid PIN."

account.deposit("1234", 250);
// "Succesfully deposited $250. Current balance: $350."

account.withdraw("1234" 300);
// "Succesfully withdrew $300. Current balance: $50."

account.withdraw("1234" 10);
// "Withdrawal amount exceeds account balance. Transaction canceled."

account.changePin("1234", "5678");
// "PIN successfully changed!"
 */

function createAccount(pin, amount=0) {// accepts pin and amount which is 0 by default
    return{
        checkBalance(inputPin){ 
            if ( inputPin !== pin){
                return "Invalid PIN";
            }
            return `Current balance: $${amount}`;
        },
        deposit(inputPin, newAmount){
            if(inputPin !== pin){
                return "Invalid PIN";
            }
            amount += newAmount;
            return `Succesfully deposited $${newAmount}. Current balance: $${amount}`;
        }, withdraw(inputPin, withdrawAmount){
            if(inputPin !== pin){
                return "Invalid Pin.";
            }
            if(amount < withdrawAmount){
                return "Withdrawal amount exceeds account balance. Transaction canceled.";
            }
            amount -= withdrawAmount;
            return `Succesfully withdrew $${withdrawAmount}. Current balance: $${amount}`;
        },
        changePin(oldPin, newPin){
            if(oldPin !== pin){
                return "Invalid PIN";
            }
            pin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };
