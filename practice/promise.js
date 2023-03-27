/**
 * cart create | cart validate | make payment | place order 
 */

function cartCreate(){
    setTimeout(() => {
        console.log('cart created');
    }, 1000);
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function cartValidate(){
    setTimeout(() => {
        console.log('cart validate');
    }, 1000);
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function makePayment(){
    setTimeout(() => {
        console.log('payment done');
    }, 1000);
    return new Promise((resolve, reject) => {
        resolve();
    });
}

function placeOrder(){
    setTimeout(() => {
        console.log('Order placed');
    }, 1000);
    return new Promise((resolve, reject) => {
        resolve();
    });
}

cartCreate()
.then((response) => {
    return cartValidate();
})
.then(response => {
    return makePayment();
})
.then(response => {
    return placeOrder();
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log("DONE ALL");
});