	var val2 = localStorage.getItem('key');
	var newarr = JSON.parse(val2);
	console.log(newarr);
	alert("Votre contact a bien été enregistré! Merci");
	$("#tabl").append('<thead><th>' + "Prénom :" + '</th><th>' + "Age :" + '</th><th>' + "Numéro :" + '</th></thead>');
	for (var i = 0; i < newarr.length; i++) {
		$("#tabl").append('<tr><td>' + newarr[i].Prénom + '</td><td>' + newarr[i].Age + '</td><td>' + newarr[i].Numéro + '</td></tr>');
	};


	$("#add").click(function(){
		window.open ("index.html");
	});

	$("#modif").hide();

	$("#delete").click(function(){
		$("#modif").show();
	});


	$("#submit").click(function(){
		var val2 = localStorage.getItem('key');
		var newarr = JSON.parse(val2);
		for (var i = 0; i < newarr.length; i++) {
			if($("#barre").val() == newarr[i].Prénom) {
				$('#tabl').empty();
				$("#tabl").append('<tr><td>' + newarr[i].Prénom + '</td><td>' + newarr[i].Age + '</td><td>' + newarr[i].Numéro + '</td></tr>');
			}else{

			}
		}
	});