
function num(val)
{
    document.getElementById('txt').value+=val;
}
function add()
{
    var str=document.getElementById('txt').value;
    var b=eval(str);
    document.getElementById('txt').value=b;
}
function clearing()
{
    document.getElementById('txt').value="";
}