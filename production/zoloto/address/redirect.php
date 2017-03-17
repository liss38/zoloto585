<?
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');
$stores = Zoloto585Store::getStores();
\Bitrix\Main\Loader::includeModule('iblock');

foreach ($stores as $store) {
	$name = $store['GPS_S'] . '~' . $store['GPS_N'];
	$dbElements = \CIBlockElement::GetList(
		array(),
		array('NAME' => $name, 'IBLOCK_ID' => 13),
		false,
		false,
		array('ID', 'IBLOCK_ID', 'PROPERTY_adress')
	);
	
	if ($arElement = $dbElements->Fetch()) {
		echo '<pre>';print_r($arElement);echo '</pre>';
	} else {
		echo 'not found ' . $store['TITLE'] . '<br>';
	}
}

echo 'done';
?>