var id = setInterval(function(){



// fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
// .then(function(response){
//     console.log("FETCH");
//     return response.json();
// })
// .then(function(data){
//     console.log(data[0]);
// })
// .catch(function(err){
//     console.log(err);
// });


// var XHR = new XMLHttpRequest();

// XHR.onreadystatechange = function(){
//     if(XHR.status == 200 && XHR.readyState == 4){
//         console.log("XHR");
//         console.log(JSON.parse(XHR.responseText)[0]);
//     }
// }
// XHR.open("GET", "https://ron-swanson-quotes.herokuapp.com/v2/quotes");
// XHR.send();

// $.getJSON("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
// .then(function(data){
//     console.log("JQUERY");
//     console.log(data[0]);
// })
// .catch(function(err) {
//     console.log(err);
// });



axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
  .then(function (response) {
      console.log("AXIOS");
    console.log(response.data[0]);
    $("h1").text(response.data[0]);
  })
  .catch(function (error) {
    console.log(error);
  });


}, 5000);

$("body").click(function(event){
    clearInterval(id);
});