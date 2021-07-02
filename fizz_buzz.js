

var x = 0;
for (var i=0; i<=100; i++)
{
    if( i % 3 == 0)
    {
        console.log("Fizz");
    }

    elseif( i % 5 == 0) 
    {
        console.log("Buzz");
    }

    elseif(i % 5 == 0 && i % 3 == 0 )
    {
        console.log("FizzBuzz");
    }
}