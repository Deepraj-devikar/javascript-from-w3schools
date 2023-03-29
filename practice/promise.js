/**
 * cart create | cart validate | make payment | place order 
 */

function cartCreate(){
    setTimeout(() => {
        console.log('cart created');
    }, 1000);
    return new Promise((resolve, reject) => {
        resolve({msg: 'hello world'});
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

// cartCreate()
// .then((response) => {
//     console.log(response);
//     return cartValidate();
// })
// .then(response => {
//     console.log(response);
//     return makePayment();
// })
// .then(response => {
//     return placeOrder();
// })
// .catch(error => {
//     console.log(error);
// })
// .finally(() => {
//     console.log("DONE ALL");
// });

async function fn(){
    let resultFN1 = await cartCreate();
    console.log(resultFN1);
    let resultfn4 = await cartValidate();
    console.log(resultfn4);
    let resultfn2 = await makePayment();
    let resultfn3 = await placeOrder();
}

fn();

// review and comment | rating 1 -5
// 



