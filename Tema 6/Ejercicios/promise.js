
var promise = new Promise(function(resolve, reject){
  var xhr = new XMLHttpRequest();
  xhr.open('get', 'promise.txt', true);
  xhr.send();
  xhr.onreadystatechange = function(){
  if (xhr.readyState === 4){
     if (xhr.status === 200){
        console.log("xhr done successfully");
        var resp = xhr.responseText;
        resolve(resp);
     } else {
        reject(xhr.status);
        console.log("xhr failed");
     }
  } else {
     console.log("xhr processing going on");
  }
}
console.log("request sent succesfully");
});

  
    




promise.then(function(hh) {
    
    console.log(hh); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});



var verdad = false;


