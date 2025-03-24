const menu = [
    { name: 'pizza', price: 10000 },
    { name: 'pasta', price: 5000 },
    { name: 'burger', price: 8000 },
    { name: 'kebab', price: 12000 }
]

const CashInRegister = 100

const OrderQueue = []

// Add a utility function "addNewPIZZA" that takes a pizza obhect and adds it to the menu.

function addNewPIZZA(newPizza) {
    menu.push(newPizza)
}

// Write another utility function, placeOrder, that takes a pizza name parameter and: |
//  1. finds that pizza object in the menu,
//  2. adds the income to the cashInRegister,
//  3. pushes a new "order object" to the orderQueue
//  (e.g. { pizza: selectedPizzaObjectFronstepl, status: "ordered" })
//  4. returns the new order object (just in case we need it later)

function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizza => pizza.name === pizzaName)
    CashInRegister += selectedPizza.price
    OrderQueue.push({ pizza: selectedPizza, status: "ordered" })
    return OrderQueue
}











