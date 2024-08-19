// Reuseable code with specfic responsibility
// Example: We want a piece of code that performs calculation within array

// Have parameters With return
function do_something_with_parameters(x) {
    console.log("Hello World", x)
    console.log("個にちわ", x)
    console.log("你好", x)
    return 1
}

// No parameters No return
function do_something_without_parameters() {
    console.log("Hello World")
    console.log("個にちわ")
    console.log("你好")
}

// To use function, we need to make function call
// 4 Types of functions: 
// 1 - No parameters No return, 
// 2 - Have parameters No return, 
// 3 - No parameters With return, 
// 4 - Have parameters With return,

const a = do_something_with_parameters(false)
console.log(a)

// f(x) = x + 2
// a = f(5)

