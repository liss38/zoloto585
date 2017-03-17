$.templates({ 'store-cities-list-template': ' \
<form id="store-list-form" class="form  store-list__form">\
	<div class="form__field  store-list__combobox">\
		<span class="form__field-ico  form__field-ico--select-arrow  field-icons-4  store-list__combobox-icon"></span>\
		<select name="storeListCombobox" id="store-list-combobox" class="form__field-select store-list__combobox-origin">\
			{^{for citiesList}}\
				{^{if #data === ~root.currentCityValues.cityName}}\
					<option class="store-list__item" selected value="{{:}}">{{: ~root.currentCityValues.cityName}}</option>\
				{{else}}\
					<option class="store-list__item" value="{{:}}">{{:}}</option>\
				{{/if}}\
			{{/for}}\
		</select>\
	</div>\
</form>\
'});