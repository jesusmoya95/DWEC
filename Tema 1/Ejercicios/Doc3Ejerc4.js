function celsiusToFahrenheit(c)
    {
        f = c * 1.8 +32;
        document.write(c + "º C is " + f + "º F");
        document.write("<br>");
    };

function fahrenheitToCelsius(f)
    {
        c = (f - 32)/1.8;
        document.write(f + "º F is " + c + "º C");
        document.write("<br>");
    };

celsiusToFahrenheit(50);
fahrenheitToCelsius(50);