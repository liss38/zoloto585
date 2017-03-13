/*var $shopsItemTemplate = $.templates("#shops-item-template");
$.getJSON('/store/json.php', function (data) {
	// console.log(data.length);
	// console.log(data);
	var html = $shopsItemTemplate.render(data);
	$("#shops-list").html(html);
	
});*/

function lazyGetTemplate(name) {
  // If the named remote template is not yet loaded and compiled
  // as a named template, fetch it. In either case, return a promise
  // (already resolved, if the template has already been loaded)
  var deferred = $.Deferred();
  if ($.templates[name]) {
    deferred.resolve();
  } else {
    $.getScript(
      "/bitrix/templates/zoloto/views/" + name + ".js")
      .then(function() {
        if ($.templates[name]) {
          deferred.resolve();
        } else {
          console.log("Script: \"" + name + ".js\" failed to load");
          deferred.reject();
        }
      });
  }
  return deferred.promise();
}

console.log('shop-list.js');

			$.when(lazyGetTemplate('shops-item-template'))
				.done(function () {
					var city = $.cookie('city') ? $.cookie('city') : 'Санкт-Петербург';
					$.getJSON('/store/json.php', function (data) {
						// console.log(data.length);
						console.log(data);
						// console.log($.templates.render.data);
						var html = $.templates['shops-item-template'].render(data);
						$("#shops-list").html(html);//($.templates.render(data));
						// console.log($.templates.render('shops-item-template', data));
						console.log(city);
					});
					// console.log('done');
				});

