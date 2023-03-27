
var e;

// console.log(f);
let f;

function getName() //outer function
{
    console.log(e);
    e = 100;
    getAge();//inner function
}
function getAge()
{
    console.log(f);
    f = 70;
    console.log(a);
    var a = 10;

    // console.log(c);
    let c = 30;

    // console.log(d);
    const d = 40;
}
getName();

