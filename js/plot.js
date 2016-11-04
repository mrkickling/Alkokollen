	  
function plotOut(data){
	$.plot("#statistics", [ data ]);
}

$(document).ready(function(){
	plotOut([ [1, 3], [2, 14.01], [3.5, 3.14] ]);
})
