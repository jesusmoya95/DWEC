function factorial(num){
    document.write("<table>")
    if (num == 0){
        return 1;
    }
    else{
        document.write("<tr><td>" + num + "!" + "</td></tr>")
        return num * factorial(num - 1);
    }
    document.write("</table>")
}


console.log(factorial(10));