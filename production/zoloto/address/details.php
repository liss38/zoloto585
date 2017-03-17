<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

?>
<section class="content">

<?
function getNewFormText($text, $numForm){
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
}

$arAllShop = Zoloto585Store::getStores();

$curShop = [];

foreach ($arAllShop as $shop) {
	if (Zoloto585Store::str2url($shop['ADDRESS']) == $_REQUEST['ADR']) {
		$curShop = $shop;
		break;
	}
}

$APPLICATION->SetTitle($curShop['ADDRESS']." | ".$curShop['UF_CITY']." | Адреса ювелирных магазинов | О ювелирной сети | Ювелирный магазин 585 Gold");
$APPLICATION->SetPageProperty("keywords", strtolower($curShop['ADDRESS'])." , ".strtolower($curShop['UF_CITY']).", адреса магазинов, ювелирных салонов, сеть 585, gold, ювелирный магазин, ювелирная сеть, официальный сайт.");
$APPLICATION->SetPageProperty("description", $curShop['ADDRESS'].". ".$curShop['UF_CITY'].". Адреса магазинов. О компании. Сеть ювелирных магазинов 585 Gold.");
?>
<div class="wrp clearfix">
			<article class="shop_card clearfix" itemscope itemtype="http://schema.org/JewelryStore">
				
				<h1>Магазин <span itemprop="name">585GOLD</span></h1>
				<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><span itemprop="streetAddress"><?=$curShop['ADDRESS']?></span><meta itemprop="addressLocality" content="<?=$curShop['UF_CITY']?>" /></div>
				<meta itemprop="telephone" content="8 800 555-1-585" />
				
				<div class="maps">
					<script src="http://api-maps.yandex.ru/2.0/?load=package.full&lang=ru-RU" type="text/javascript"></script>
					<script type="text/javascript">
					$(function(){	
						ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
						function init () {
							var myMap = new ymaps.Map("map", {
									center: [<?=$curShop['GPS_N']?>, <?=$curShop['GPS_S']?>], // Координаты центра карты
									zoom: 16 // Zoom
							});
							myMap.controls.add(
					            new ymaps.control.ZoomControl()
					        );
							
							
						var myPlacemark = new ymaps.Placemark( [<?=$curShop['GPS_N']?>, <?=$curShop['GPS_S']?>], {
						balloonContent: '<?=$address?>'
						}, {
						iconLayout: 'default#image',
						iconImageHref: '/about/address/pointer.png', 
						iconImageSize: [30, 42],
						iconImageOffset: [-3, -42]
						});
						myMap.geoObjects.add(myPlacemark);
						return;
							
					        houseCollection = new ymaps.GeoObjectCollection();
					        <?foreach ($arFields as $key => $value) {
							if(Zoloto585Store::str2url($arProps[$key]["adress"]["VALUE"])!=$_GET['ADR']){
								continue;
							}
					        $all_coords = explode('~',$value['NAME']);?>
							
							//alert(<?=$arProps[$key]['adress']['VALUE']?>);
							
							
	                        metroGeoObject = new ymaps.Placemark([<?=$all_coords[1]?>,<?=Zoloto585Store::str2url($all_coords[0])?>],
							{
				                hintContent: "<?=$arProps[$key]['adress']['VALUE']?>",
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
	                                //myMap.geoObjects.add(houseCollection)
                            myMap.geoObjects.events.add('click', function (e) {
                                window.location.href = e.get('target').properties.get('url');
                            });
						}
					});
					</script>
					<div id="map" class="map"></div>
				</div>
			
				<div class="detail_shop">
					<div class="address clearfix">
					<?/*if ($metro[1]){?>
						<span class="metro"><?=strip_tags($metro[1])?></span>
					<?}*/?>
						<span itemprop="openingHours" datetime="Mo-Su {время_работы_магазина}" class="time"><?=ShopSchedule::schedulePrepare($curShop['SCHEDULE']);?></span>
					</div>
					
					<?/*
					<div class="plus">
					<?
					$res_lomb = stripos($plus, 'Ломбард');
					$res_kard = stripos($plus, 'Пластиковые карты');
					$res_uv = stripos($plus, 'Ювелир');
					$res_kred = stripos($plus, 'Продажа в кредит');
					?>
					 <?if($res_lomb!==false){?>
						<span class="lombard">Ломбард</span>
					<?}?>
						<?if($res_kred!==false){?>
							<span class="credit">Продажа в кредит</span>
						<?}?>
						<?if($res_kard!==false){?>
							<span class="bank" itemprop="paymentAccepted">Пластиковые карты</span>
						<?}?>
						<?if($res_uv!==false){?>
							<span class="uvelir">Ювелир</span>
						<?}?>
					</div>
					*/?>
					<? if ($curShop['DESCRIPTION']) { ?>
						<div class="desc"><?=$curShop['DESCRIPTION']?></div>
					<? } ?>
				</div>
			</article>
</div>
 </section>

 <?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>