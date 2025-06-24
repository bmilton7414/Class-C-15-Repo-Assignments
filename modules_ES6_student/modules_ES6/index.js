const pizzaOrder = new Promise((resolve, reject) => {
    const isReady = true;

    if (isReady) {
        resolve("The Best Pizza In Town is ready!"); //success
    } else {
        reject("Order is not ready yet."); //failure
    }
    })

    pizzaOrder.then((message) => {
        console.log("Success: ", message);
    })

    pizzaOrder.catch((error) => {
        console.log("Error: ", error);
    });