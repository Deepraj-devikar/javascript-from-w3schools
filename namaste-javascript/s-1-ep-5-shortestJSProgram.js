/**
 * if we didnt write any thing in file then also call stack will be created and global execution context will be push into the call stack
 * and also global execution context will have 2 phases (i.e. memory phase and code phase)
 * and before the memory phase their will provide memory to window object same to same works every time
 * what is the window it is object created by javaScript Engine this points to window object we can use this window anywhere in our code
 * every time it window object will be created with global execution context
 * every javascript engine creates window object according to them
 * this === window // true
 * when function call invokes then it passes to that function scope
 * if we decalre var a then a, window.a, this.a three of them are same and also located in same memory space
 */