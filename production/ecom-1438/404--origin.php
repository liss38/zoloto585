<?
include_once($_SERVER['DOCUMENT_ROOT'].'/bitrix/modules/main/include/urlrewrite.php');

CHTTP::SetStatus("404 Not Found");
@define("ERROR_404","Y");

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("Страница не найдена");?>

<section class="content">
<div class="wrp clearfix nonpage">
<div class="nonepageleft">
<img src="/images/404.jpg" title="Этой страницы не существует">	
	<p>Нам очень жаль, но кажется что этой страницы больше не существует. Пожалуйста, воспользуйтесь меню или формой поиска по каталогу</p>
</div>
<div class="nonepageright">
<?$APPLICATION->IncludeFile("iblock/slider_mini_404.php", Array(
			"IBLOCK_ID" => 24)
	);?>
	</div>
</div>
</section> 
<?/*?>
<section class="filter nonpagefilter">
<div class="wrp">
	<?$APPLICATION->IncludeFile(
		SITE_DIR."include/filter_index.php",
		Array(),
		Array("MODE"=>"html")
	);?>
</div>
</section>
<?*/?>
<style>
.nonepageleft,.nonepageright
{
    width: 50%;   
    text-align: center;
    padding-top: 25px;
    vertical-align: top;
    float: left;
} 

.nonepageleft p
{
    padding-top: 13px;
    color: darkgrey;	
	
}
.minislide .item
{
	position: relative;
    width: 49%;
    float: right;
    padding-left: 5px;
    display: inline-block;
    margin-bottom: 5px;
	}
 .minislide .item img
{   width: 100%;
}
.minislide .item h2
{
	    position: absolute;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 16px;
    bottom: -14px;
    width: 100%;
}
.wrp.nonpage
{padding:0px}
.nonpagefilter .h2
	{    color: #E12A2C;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;}

@media screen and (max-width: 619px) {
    .minislide { font-size: 0; }

    .nonepageleft,
    .nonepageright { float: none; width: 100%; }

    .minislide .item { float: none; margin: 0; padding: .5%; }
}
</style>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>