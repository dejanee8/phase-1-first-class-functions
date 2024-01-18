function receivesAFunction(spy) {
console.log(spy())
}
function returnsANamedFunction() {
return function nay() {
   console.log("nay")    
}
}
function returnsAnAnonymousFunction() {
       return function() {
        console.log("nay")      
       }
       }
