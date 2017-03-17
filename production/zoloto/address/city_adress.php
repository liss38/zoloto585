<? 
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");?>
<section class="content">

<?
/*function getNewFormText($text, $numForm){
    $urlXml = "http://export.yandex.ru/inflect.xml?name=".urlencode($text);
    $result = @simplexml_load_file($urlXml);
    if($result){
        $arrData = array();
        foreach ($result->inflection as $one) {
           $arrData[] = (string) $one;
        }
        return $arrData[$numForm];
    }
    return false;
}*/ //ответ файла импорта грузит php

$obCache = new CPHPCache();
$cacheLifetime_adress_det = 86400; $cacheID_adress_det = 'listCity_adress_det'; $cachePath_adress_det = '/'.$cacheID_adress_det;
if( $obCache->InitCache($cacheLifetime_adress, $cacheID_adress, $cachePath_adress))
{
	$vars_city_adress = $obCache->GetVars();
	$arProps = $vars_city_adress['listCity_adress_det'];
}
elseif( $obCache->StartDataCache())
{
if (CModule::IncludeModule("iblock")):
$j = 0;
CModule::IncludeModule('iblock');
$arSelect = Array("ID", "CODE", "PREVIEW_TEXT", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM","PROPERTY_*");//IBLOCK_ID и ID обязательно должны быть указаны, см. описание arSelectFields выше
$arFilter = Array("IBLOCK_ID"=>13, "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");
$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
while($ob = $res->GetNextElement()){ 
	$arFields[$j] = $ob->GetFields();  
 	$arProps[$j] = $ob->GetProperties();
 	$arProps[$j]['coords123'] = $arFields[$j]['NAME'];
 	$arProps[$j]['CODE'] = $arFields[$j]['CODE'];
 	$j++;
}
endif;
	$obCache->EndDataCache(array('listCity_adress_det' => $arProps));
};

foreach ($arProps as $key => $value) {
	$arCity[$value['city']['VALUE']] = $value;
}
ksort($arCity);

$w=0;
foreach ($arCity as $k => $val) {
	$w++;
	$citys[$k] = $val;
	$citys[$k]['NUM'] = $w;
	$citys[$k]['WORD'] = mb_substr($k,0,1,'UTF-8');
}


foreach ($arProps as $key => $value) {
	$arShop[$key]['coords'] = $value['coords123'];
	$arShop[$key]['address'] = $value['adress']['VALUE'];
}
foreach ($arCity as $key => $property) {
	if ($property['CODE'] == $CODE){
		$APPLICATION->SetPageProperty("title", $key." | Адреса ювелирных магазинов | О ювелирной сети | Ювелирный магазин 585 Gold");
		$APPLICATION->SetPageProperty("keywords", mb_strtolower($key, 'UTF-8')." адреса магазинов, ювелирных салонов, сеть 585, gold, ювелирный магазин, ювелирная сеть, официальный сайт");
		$APPLICATION->SetPageProperty("description", "Магазины в городе".$key.". Адреса. О компании. Сеть ювелирных магазинов 585 Gold.");
	}
}
?>
<div class="wrp clearfix">
<h1>Адреса магазинов</h1>
	<article class="shops clearfix">		
			<div class="maps">
				<script src="http://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU" type="text/javascript"></script>
				<script type="text/javascript">
					var myMap;
					ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
					
					function init () {
						var coords = $('#region_id option:selected').attr('value').split(',');
						myMap = new ymaps.Map("map", {
								center: [+coords[0],+coords[1]], // Координаты центра карты
								zoom: 12 // Zoom
						});

						$('#region_id').bind('change', function(){
							var option = $('#region_id option:selected'), coords = option.attr('value').split(',');
							myMap.panTo([+coords[0],+coords[1]], {flying: true});
							$.cookie('first_coord', coords[0], { expires: 365, path: '/' });
							$.cookie('second_coord', coords[1], { expires: 365, path: '/' });
							
							var city = option.text();
							$.cookie('city', city, { expires: 365, path: '/' });
							var href = option.attr('data-href');
							history.replaceState(null, '', '/about/address/'+href+'/');
							$('h1').text('Адреса магазинов в городе '+city);
							$.ajax({
								url: "/about/address/city_ajax.php",
								data: {city: city},
								type: "post",
								success: function(html) {
									$('.list').html(html);
								}
							});
							$('select.select_city option:contains("'+city+'")').attr('selected', 'selected');
		                    $('.opt:contains("'+city+'")').addClass('selected sel');
		                    $('#choose-city a span, .jq-selectbox__select-text').text(city);
		                    set_city();
						});
						$('#region_id').trigger('change');
						
						myMap.controls.add(
				            new ymaps.control.ZoomControl()
				        );
				        houseCollection = new ymaps.GeoObjectCollection();
				        <?php 
						$coordsBase="";
						foreach ($arShop as $key => $property) {
							$coords = explode("~",$property['coords']);
							if(!$coordsBase)$coordsBase=$coords;
							?>
                        	metroGeoObject = new ymaps.Placemark([<?=$coords[1]?>,<?=$coords[0]?>], {
			                hintContent: "<?=$property['address']?>",
			                balloonContent: '',
                            url: '<?=Zoloto585Store::getUrlStore($arProps[$key]["city"]["VALUE"],$arProps[$key]["adress"]["VALUE"])?>'
                        }, {
			                iconLayout: 'default#image',
			                iconImageHref: '/about/address/pointer.png', // картинка иконки
			                iconImageSize: [43, 62], // размеры картинки
			                iconImageOffset: [-3, -62]
			            });
			            houseCollection.add(metroGeoObject);
                                	
						<?}?>
						myMap.geoObjects.add(houseCollection);
                        myMap.geoObjects.events.add('click', function (e) {
                            window.location.href = e.get('target').properties.get('url');
                        });
					}
				</script>
				<div id="map" class="map"></div>
			</div>

			<div class="shop_list">
				<div class="select">
					<select name="region_id" id="region_id" class="">
					<?foreach ($arCity as $key => $property) {
						if ($property['CODE'] == $CODE){
						$coords = explode("~",$property['coords123']);?>
						<option value="<?=$coordsBase[1]?>,<?=$coordsBase[0]?>" class="opt" code="<?=$property['CODE']?>" data-name="<?=$key?>" data-href="<?=$CODE?>" selected><?=$key?></option>
						<?}
						else{
						$coords = explode("~",$property['coords123']);?>
						<option value="<?=$coordsBase[1]?>,<?=$coordsBase[0]?>" data-href="<?=$property['CODE']?>" data-name="<?=$key?>" class="opt"><?=$key?></option>
						<?}?>
					<?}?>
					</select>
				</div>
				
				<div id="perfect_scroll" class="perfect-scroll">
					<div class="list">
					<?for ($i = 0; $i< count($arFields); $i++) {?>
						<?if ($arFields[$i]['CODE'] == $CODE){?>
							<figure class="item">
								<figcaption><a href="/about/address/details.php?ID=<?=$i?>"><?echo $arFields[$i]['PREVIEW_TEXT']?></a></figcaption>
								<address><?=htmlspecialchars_decode($arProps[$i]['content']['VALUE']['TEXT'])?></address>
							</figure>
						<?}?>
					<?}?>
					</div>
				</div>
			</div>
	</article>
	<article class="vacancies" style="margin-top:20px;">
	<div class="vacancy_list">
		<div class="">

		    <div class="desc text_page show_box clearfix" style="display:none;">
			<div class='column'>
				<?
				$count = count($citys)/3;
				foreach ($citys as $key => $property) {?>
				<?if ($property['NUM'] > 0 AND $property['NUM'] < $count){?>
					<div class="address-link"><span class="word"><?echo $property['WORD'];?></span><a style="display: inline-block" href="/about/address/<?=Zoloto585Store::str2url($key)?>/"><?=$key?></a></div>
					<?}?>
				<?}?>
			</div>
			<div class='column'>
				<?foreach ($citys as $key => $property) {?>
				<?if ($property['NUM'] > $count AND $property['NUM'] < $count*2){?>
					<div class="address-link"><span class="word"><?echo $property['WORD'];?></span><a style="display: inline-block" href="/about/address/<?=Zoloto585Store::str2url($key)?>/"><?=$key?></a></div>
					<?}?>
				<?}?>
			</div>
			<div class='column'>
				<?foreach ($citys as $key => $property) {?>
				<?if ($property['NUM'] > $count*2 && $property['NUM'] < $count*3+1){?>
					<div class="address-link"><span class="word"><?echo $property['WORD'];?></span><a style="display: inline-block" href="/about/address/<?=Zoloto585Store::str2url($key)?>/"><?=$key?></a></div>
					<?}?>
				<?}?>
			</div>						
			</div>
		    <span class="show show-city">Адреса магазинов</span>
		</div>
	</div>
</article>
</div>

</section>

<? require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>