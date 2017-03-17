<? require_once($_SERVER['DOCUMENT_ROOT'] . "/bitrix/modules/main/include/prolog_before.php");?>
<?
$arAllShop = Zoloto585Store::getStores();

foreach ($arAllShop as $arShop) { ?>

<? if ($arShop['UF_CITY'] == $_POST['city']) { ?>

	<figure class="item" itemscope itemtype="http://schema.org/Organization">
		<figcaption itemprop="name">
            <a href="<?=$arShop["DETAIL_URL"]?>>">585GOLD</a>
        </figcaption>	

        <address>
            <p><strong><?=$arShop['ADDRESS']?></strong></p>
            <p><?=ShopSchedule::schedulePrepare($arShop['SCHEDULE'])?></p>
            <p><?=$arShop['DESCRIPTION']?></p>
        </address>

		<div style="display: none">
			<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				<span itemprop="streetAddress"><?php $arShop['ADDRESS'];?></span>
				<span itemprop="addressLocality"><?php $arShop['UF_CITY'];?></span>,
	    	</div>
	    	<span itemprop="telephone">8 (800) 555-15-85</span>
		</div>
	</figure>
	
<? } ?>
    
<? } ?>
