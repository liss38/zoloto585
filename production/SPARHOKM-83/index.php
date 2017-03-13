<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Склады");
?><?/*$APPLICATION->IncludeComponent(
	"bitrix:catalog.store",
	"",
	Array(
		"SEF_MODE" => "Y",
		"PHONE" => "N",
		"SCHEDULE" => "N",
		"SET_TITLE" => "Y",
		"TITLE" => "Список складов с подробной информацией",
		"MAP_TYPE" => "0",
		"CACHE_TYPE" => "A",
		"CACHE_TIME" => "3600",
		"CACHE_NOTES" => "",
		"SEF_FOLDER" => "/store/",
		"SEF_URL_TEMPLATES" => Array(
			"liststores" => "index.php",
			"element" => "#store_id#"
		),
		"VARIABLE_ALIASES" => Array(
			"liststores" => Array(),
			"element" => Array(),
		)
	),
false
);*/?>

<div class="section">
	<div class="section__inner">
		Ювелирная сеть 585GOLD – это гарантия качества, доступные цены и огромный выбор красивых ювелирных изделий. Специально для удобства клиентов в наших магазинах предлагаются различные формы оплаты, гибкие системы скидок и специальные акции: бонусная система лояльности, покупка ювелирных украшений в рассрочку, подарочные сертификаты, а также уникальная возможность обменять вышедшие из моды золотые изделия на новые. В наших магазинах вы найдете украшения из серебра и красного, белого, желтого золота, изделия с драгоценными и полудрагоценными камнями, традиционные и оригинальные обручальные кольца, цепи, браслеты, колье, а также стильные и яркие аксессуары из коллекции бижутерии. До скорых встреч! Ждем Вас!
	</div>
</div>
<div class="section">
	<div class="section__inner">

		<div id="shops-list"><!-- сюда выводится список магазинов --></div>

	</div>
</div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
