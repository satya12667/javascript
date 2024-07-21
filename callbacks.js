hello(leave);

function hello(callback){
    console.log("Hello!");
    callback();
}
function leave()
{
  console.log("leave")
}
function wait()
{
  console.log("wait")
}


function goodbye(){
    console.log("Goodbye!");
}
//another example

sum(display,3,5)
function sum(callback,x,y)
{
  let result=x+y;
  callback(result)
}
function display(result)
{
console.log(result)
}

