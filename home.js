var x = 1;

function ty()
{
    
    document.getElementById("k").setAttribute("src","file:///D:/Web%20dev%20Project/0"+x+".jpg");
    x++;
    if(x > 6)
    {
        x = 1;
    }
}
function myfun()
{
    x++
    document.getElementById("k").setAttribute("src","file:///D:/Web%20dev%20Project/0"+x+".jpg");
    if(x > 6)
    {
        x = 1;
    }
    setInterval(myfun, 10000);
}