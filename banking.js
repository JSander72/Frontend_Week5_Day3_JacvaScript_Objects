// Task 1: 
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}
//  Task 2: 
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposit successful. New balance: $${this.balance}`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawal successful. New balance: $${this.balance}`);
    } else if (amount > this.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Invalid withdrawal amount.");
    }
};

// Task 3:
Account.prototype.calculateInterest = function(years, rate) {
    let P = this.balance;
    let r = rate / 100; 
    let t = years;
    let n = 1; 

    let A = P * Math.pow((1 + (r / n)), n * t);
    return Math.ceil(A); 
};

// Example
let account = new Account("12345", 1000, "John Doe");

account.deposit(500);
account.withdraw(200);
console.log("Balance after interest for 5 years at 5%:", account.calculateInterest(5, 5));

