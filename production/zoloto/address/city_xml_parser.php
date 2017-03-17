<? 
require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");	
header('Content-type: application/xml');
CModule::IncludeModule('iblock');

$date = date("m.d.Y");

$arSelect = Array("ID", "CODE", "PREVIEW_TEXT", "IBLOCK_ID", "NAME", "DATE_ACTIVE_FROM","PROPERTY_*");
$arFilter = Array("IBLOCK_ID"=>13, "ACTIVE_DATE"=>"Y", "ACTIVE"=>"Y");

$res = CIBlockElement::GetList(Array(), $arFilter, false, false, $arSelect);
while($ob = $res->GetNextElement()){ 
	 $arFields = $ob->GetFields();  
	 $arProps = $ob->GetProperties();
	 
	 $address = 'город ';
	 $address .= $arProps['city']['VALUE'];
	 $address .= ', ';
	 $address .= $arProps['adress']['VALUE'];
	 
	 $phone = array(
		 'number' => '8 (800) 555-15-85'
	 );
	 
	 $data[]=array(
		 'company-id' => $arFields['ID'],
		 'name' => $arFields['PREVIEW_TEXT'],
		 'address' => $address,
		 'country' => 'Россия',
		 'url' => 'http://zoloto585.ru',
		 'rubric-id' => '184105828',
		 'actualization-date' => $date,
		 'phone' => $phone
	 );
}

for($i = 0; $i < count($data); $i++){
	$resArray[] = array(
		'company' => $data[$i]
	);
}


$xmlData = '<?xml version="1.0" encoding="UTF-8"?>';
$xmlData .= '<companies xmlns:xi="http://www.w3.org/2001/XInclude" version="2.1">';
foreach ($resArray as $key => $val) {
	$xmlData .= '<'.key($val).'>';
		foreach ($val['company'] as $key_in => $val_in) {
			if(is_array($val_in)){
				$xmlData .= '<'.$key_in.'>';
					foreach ($val_in as $key_ph => $val_ph) {
						$xmlData .= '<'.$key_ph.'>';
						$xmlData .= $val_ph;
						$xmlData .= '</'.$key_ph.'>';
					}
				$xmlData .= '</'.$key_in.'>';	
			}else{
				if($key_in == 'name' || $key_in == 'address' || $key_in == 'country'){
				$keystart = '<'.$key_in.' lang="ru">';
				}else{
					$keystart = '<'.$key_in.'>';
				}
				$keyend   = '</'.$key_in.'>';
				
				$xmlData .= $keystart;
				$xmlData .= $val_in;
				$xmlData .= $keyend;
				}
		}
	$xmlData .= '</'.key($val).'>';
}
$xmlData .= '</companies>';
echo $xmlData;
?>