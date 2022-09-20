function add(a,b)
{
   return a+b;
}
function subtract(a,b)
{
   return a-b;
}
function multiply(a,b)
{
   return a*b;
}
function divison(a,b)
{
   return a/b;
}

var myname = "H";
module.exports.ADD = add;
module.exports.SUB = subtract;
module.exports.MUL = multiply;
module.exports.DIV = divison;

module.exports.mn = myname;
