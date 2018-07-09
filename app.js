console.log("hello");
var array = [];


$("#envoi").click(function(){
	var tab2 =  {Prénom : $("#firstName").val(), Age : $("#old").val(), Numéro : $("#num").val()};
	array.push(tab2);
	var val2 = JSON.stringify(array);
	localStorage.setItem('key',val2);
	window.open("index2.html");
});




$("#rafraichir").click(function(){
	$("input").val("");
});






















// array.push(tab2);
// var arrls = JSON.stringify(array);
// localStorage.setItem("key", arrls);
// $(".cahmp").val("");