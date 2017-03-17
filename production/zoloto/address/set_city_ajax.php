<? require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");
	session_start();
	if(isset($_POST['city']))
		setcookie("city", $_POST["city"],time()+3600*24*365,'/',$_SERVER['HTTP_HOST']);