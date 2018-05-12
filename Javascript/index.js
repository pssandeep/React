var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if(XHR.readyState === 4 && XHR.status == 200){
        var price = JSON.parse(XHR.responseText).bpi.USD.rate_float;
        console.log(price);
        document.getElementById("price").innerHTML = price;
    }
}
var id = setInterval(function(){
    XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
    XHR.send();
}, 1000);

// XHR.open("GET","https://api.coindesk.com/v1/bpi/currentprice.json");
// XHR.send();

document.getElementById("price").addEventListener("click",function(){
    clearInterval(id);
    console.log("Refresh Stopped...")
});

