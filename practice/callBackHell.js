/**
 * cart create | cart validate | make payment | place order 
 */

setTimeout(() => {
    console.log('cart created');
    setTimeout(() => {
        console.log('cart validated');
        setTimeout(() => {
            console.log('payment done');
            setTimeout(() => {
                console.log('order placed');
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
// call back hell

