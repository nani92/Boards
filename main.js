var im = [];
$.preloadImage = function() {
    im.push( $("<img />").attr("src", arguments[0]).attr("id", arguments[1]));
	
}

$(document).ready(function(){
	var jsonURL = "word.json";
  	$.getJSON(jsonURL, function(json){
		console.log(json.words.length);
		$.each(json.words, function(i, word){
			console.log(word);
			$.preloadImage(word.imgPath, word.word);
		});
		random = Math.floor((Math.random() * im.length));
		$("#"+json.words[random].word).ready(function(){
			AppendNewImage(random);
		});
	});
	
	$("#nextButton").click(function(){
		Clear();
		random = Math.floor((Math.random() * im.length));
		AppendNewImage(random);
	});
});



function AppendNewImage(index){
	$("#imageContainer").append($(im[index]));
	$("#nameContainer").append("<span>"+im[index].attr("id"));
	
}

function Clear(){
	$("#imageContainer").children("img:first").detach();
	$("#nameContainer").children("span:first").detach();
}
