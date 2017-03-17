<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Склады");
?>
<div class="section  store-about-section">
	<div class="section__inner  store-about-section__inner">
		<div class="store-about__heading">
			<h2 class="store-about__title">Адреса магазинов в городе <a>Санкт-Петербург</a></h2>
			<h3 class="store-about__sub-title"><span id="store-about-count">17</span> магазинов в городе <a>Санкт-Петербург</a></h3>
		</div>

		<div class="store-about__description">
			Ювелирная сеть 585GOLD – это гарантия качества, доступные цены и огромный выбор красивых ювелирных изделий. Специально для удобства клиентов в наших магазинах предлагаются различные формы оплаты, гибкие системы скидок и специальные акции: бонусная система лояльности, покупка ювелирных украшений в рассрочку, подарочные сертификаты, а также уникальная возможность обменять вышедшие из моды золотые изделия на новые. В наших магазинах вы найдете украшения из серебра и красного, белого, желтого золота, изделия с драгоценными и полудрагоценными камнями, традиционные и оригинальные обручальные кольца, цепи, браслеты, колье, а также стильные и яркие аксессуары из коллекции бижутерии. До скорых встреч! Ждем Вас!
		</div>
	</div>
</div>


<div class="section  store-map-section">
	<div class="section__inner  store-map-section__inner">
		<form id="store-search" class="store-search"></form>
		
		<div class="store-list">
			<!-- комбобокс со списком магазинов -->
		</div>

		<div id="store-item-list" class="store-item-list"><!-- сюда выводится список магазинов --></div>
	</div>

	<div id="map" class="store-map-container"></div>
</div>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
