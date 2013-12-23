(function($){
	var quotes;

	function setQuote(){
		var quote = quotes[Math.floor(Math.random()*quotes.length)];
		$("#quote").text(quote);
	}

	$(function(){
		$.getJSON("res/quotes.json", function(_quotes){
			quotes = _quotes;
			setQuote();
			setInterval(setQuote, 10000);
		});
	});
})(jQuery);
