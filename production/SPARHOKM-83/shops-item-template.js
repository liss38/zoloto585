$.templates({ 'shops-item-template': ' \
<article class="shops-item"> \
	<h3 class="shops-item__heading">#{{:XML_ID}}</h3> \
	<div class="shops-item__city">{{:CITY}}</div> \
	<div class="shops-item__address">{{:ADDRESS["STREET"]}}</div> \
	<p class="shops-item__coords">({{:GPS_N}}, {{:GPS_S}})</p> \
	<i class="shops-item__url">{{:DETAIL_URL}}</i> \
</article> \
'});
console.log('shops-item-template');