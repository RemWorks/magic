//AVEC HANDLEBARS

var source = $("#cards-template").html();
var template = Handlebars.compile(source);
var param    = "white,";

getAll(param);

$('.change').click(function(){
    $('.loader').fadeIn(500, function(){
        $('.tv').empty();    
        param = $(this).data('color');
        getAll(param);
    }.bind(this));
    
});

$(".mana div img").click(function(){
	$(this).toggleClass('active');

});




$.getJSON("https://api.magicthegathering.io/v1/cards?set=ktk&colors="+param)
.done(function(data) {
	console.log(data);
	var html = template(data);
	$("#container").html(html);
})
.fail(function() {
	alert("Select at least one color !");
});
