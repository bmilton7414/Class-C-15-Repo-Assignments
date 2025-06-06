// Store you first name, last name, age, country, city in your browser localStorage.




// Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.




// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

// Create the personAccount object
const personAccount = {
    firstName: 'Jane',
    lastName: 'Smith',
    incomes: [
      { amount: 2000, description: 'Salary' },
      { amount: 500, description: 'Freelance' }
    ],
    expenses: [
      { amount: 300, description: 'Groceries' },
      { amount: 100, description: 'Transport' }
    ],
    
    // Method to calculate total income
    totalIncome: function() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
    
    // Method to calculate total expenses
    totalExpense: function() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
    
    // Method to show account information
    accountInfo: function() {
      return `Name: ${this.firstName} ${this.lastName}\nTotal Income: ${this.totalIncome()}\nTotal Expenses: ${this.totalExpense()}`;
    },
    
    // Method to add an income
    addIncome: function(amount, description) {
      this.incomes.push({ amount, description });
    },
    
    // Method to add an expense
    addExpense: function(amount, description) {
      this.expenses.push({ amount, description });
    },
    
    // Method to calculate account balance
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  
  // Store the personAccount object in localStorage
  localStorage.setItem('personAccount', JSON.stringify(personAccount));