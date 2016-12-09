<?
include_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("Страница не найдена");?>

<section class="section  page-404">
	<div class="section__inner  page-404__inner">
		<div class="page-404-block">
			<img src="/images/404.jpg" title="Этой страницы не существует" alt="Этой страницы не существует" height="250" width="250">
			<p>Нам очень жаль, но кажется что этой страницы больше не существует. Пожалуйста, воспользуйтесь меню или формой поиска по каталогу</p>
		</div>
		<!--<div class="page-404-block  page-404-block--right">
			<?/*$APPLICATION->IncludeFile("iblock/slider_mini_404.php", Array(
				"IBLOCK_ID" => 24)
			);*/?>
			</div>-->
	</div>
</section> 
<?/*?>
<section class="filter  page-404-filter">
<div class="wrp">
	<?$APPLICATION->IncludeFile(
		SITE_DIR."include/filter_index.php",
		Array(),
		Array("MODE"=>"html")
	);?>
</div>
</section>
<?*/?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>