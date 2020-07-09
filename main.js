//named function
function testExample1(a) {
    
    var greeting = "hi my name is "+ a;
    return greeting;

}
var name ="asma";
console.log(testExample1(name));



//anonymous function
var testExample2 = function() {
    var greeting ="hi my name is "+a;
    return greeting;
}
var a = "asma";
console.log(testExample2(a));

//immediately invoked function expression
(function() {
    var greeting = "hi my name is asma";
    console.log(greeting);
    
})()