/**LOGICAL AND OPERATOR
 * && operator finds first falsy operand and return it if it dosent found then it returns last operand
 * 
 * checking first falsy and return it is prevent unnecessary work
 */
console.log(false && 1 && []); // return false (i.e. false is falsy operand)
console.log(0 && 1 && []); // return 0 (i.e. 0 is falsy operand)
console.log([] && 0 && 1); // return 0 (i.e. 0 is falsy operand)
console.log(1 && 0 && []); // return 0 (i.e. 0 is falsy operand)

console.log(" " && true && 5); //logs 5
console.log("" && true && 5); //return first operand (i.e. falsy operand)

/**
 * using if statement
const router: Router = Router();

router.get('/endpoint', (req: Request, res: Response) => {
    let conMobile: PoolConnection;
    try {
        //do some db operations
    } catch (e) {
        if (conMobile) {
            conMobile.release();
        }
    }
});
 */

/**
 * using && operator
const router: Router = Router();

router.get('/endpoint', (req: Request, res: Response) => {
    let conMobile: PoolConnection;
    try {
        //do some db operations
    } catch (e) {
        conMobile && conMobile.release()
    }
});
 */

/**LOGICAL OR OPERATOR
 * || finds first truthy operand and return it if it dosent found then return last operand
 * 
 * check first truthy and return it is prevent unnecessary work
 */

console.log(null || 1 || undefined); //logs 1

function logName(name) {
    var n = name || "Mark";
    console.log(n);
}

logName(); //logs "Mark"

/**DOCUMENT OBJECT MODEL
 * DOCUMENT OBJECT MODEL is interface or API for HTML or XML 
 * it is a tree like structure that modeled from HTML or XML
 */

/**EVENT PROPOGATION
 * when an event occur on DOM element it dose not occur in one element only
 * Event Propogation have 3 phases:- 
 * 1) Capturing Phase
 * 2) Target Phase
 * 3) Bubbeling Phase
 * 
 * =>Capturing Phase:- 
 * event starts from window and then goes down to every element until it reach to target element
 * 
 * =>Target Phase:-
 * event has reach to target element
 * 
 * =>Bubbeling Phase:-
 * event goes up from target element to window
 */