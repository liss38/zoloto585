<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Регистрация");?>

<?include("../header.php");?>

<div class="section  ucab-promo">
	<div class="section__inner  ucab-promo__inner">
		<p class="cabinet-promoaction-one"><span class="cabinet-promoaction__major-text">3000 баллов</span><span class="cabinet-promoaction__minor-text">за регистрацию</span></p>
		<p class="cabinet-promoaction-plus">+</p>
		<p class="cabinet-promoaction-two"><span class="cabinet-promoaction__major-text">1 балл=1 рубль</span><span class="cabinet-promoaction__minor-text">Баллы за каждую покупку</span></p>
		<p class="cabinet-promoaction-equal">=</p>
		<p class="cabinet-promoaction-three"><span class="cabinet-promoaction__major-text">до 20% стоимости</span><span class="cabinet-promoaction__minor-text">оплачивайте баллами</span></p>
		<div class="cabinet-promoaction-card"></div>
	</div>
</div>
<div class="section ucab-registration">
	<div class="section__inner ucab-registration__inner">

		<div class="ucab-regblock">
			<h3 class="ucab-if-you-header">Если Вы</h3>

			<ul class="ucab-if-you">
				<li class="ucab-if-you__item">уже получили бонусную карту</li>
				<li class="ucab-if-you__item">уже ранее регистрировались на сайте, пожалуйста, <a href="#">восстановите Ваш пароль>></a></li>
			</ul>
		</div>


		<div class="ucab-regblock">
			<ul class="ucab-reginfo">
				<li class="ucab-reginfo__item">Бонусная карта и 3000 бонусов на счет и оплачивайте до 20% стоимости изделий</li>
				<li class="ucab-reginfo__item">Получайте бонусы за покупки.<br>1 бонус = 1 рубль</li>
				<li class="ucab-reginfo__item">Личный кабинет, где можно проверить <a href="#">Бонусный счет</a> и сохранить <a href="#">Избранное</a></li>
				<li class="ucab-reginfo__item">Персональные предложения и подарки</li>
			</ul>
		</div>


		<?$APPLICATION->IncludeComponent(
	"bitrix:main.register", 
	"cabinet", 
	array(
		"USER_PROPERTY_NAME" => "",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"SHOW_FIELDS" => array(
			0 => "EMAIL",
		),
		"REQUIRED_FIELDS" => array(
			0 => "EMAIL",
		),
		"AUTH" => "Y",
		"USE_BACKURL" => "N",
		"SUCCESS_PAGE" => "",
		"SET_TITLE" => "N",
		"USER_PROPERTY" => array(
		),
		"COMPOSITE_FRAME_MODE" => "A",
		"COMPOSITE_FRAME_TYPE" => "AUTO",
		"COMPONENT_TEMPLATE" => "cabinet"
	),
	false
);?>
	</div>
</div>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
