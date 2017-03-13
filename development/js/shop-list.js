var $shopsItemTemplate = $.templates("#shops-item-template");
var storeData = $.getJSON('/store/json.php', function (data) {
	console.log(data.length);
	var html = $shopsItemTemplate.render(data);
	$("#shops-list").html(html);
	console.log(html);
});
