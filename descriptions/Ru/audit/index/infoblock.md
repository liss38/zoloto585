Объект: http://joxi.ru/brRejO5H9weJA1 , инфоблок на главной странице

Описание:
 - в битриксе /templates/zoloto/components/bitrix/news.list/main_imgs_block/template.php
 - разметка дублируется для десктоп и мобильной версии
 - стилизация в 
```
less/pages/index/index-infoblock.less
less/pages/index/index-infoblock-photos.less
less/pages/index/index-infoblock-text.less
less/pages/index/index-infoblock-owl.less
```
 - визуальное поведение screens/infoblock/screenshot-1.png , screens/infoblock/screenshot-2.png

разметка в template.php выглядит так:
```PHP
<div class="infoblock" id="infoblock">
	<div class="wrp2">
		<div class="row clearfix">
<div class="item">
				<div class="item-inner long">
                    <a href="<?=$arResult["ITEMS"][0]["CODE"]?>"> <img width="310" alt="<?=$arResult["ITEMS"][0]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" src="<?=$arResult["ITEMS"][0]["PREVIEW_PICTURE"]["SRC"]?>" height="447" > </a>
                    <div class="caption">
                      <?=$arResult["ITEMS"][0]["~PREVIEW_TEXT"]?>

                        <a href="<?=$arResult["ITEMS"][0]["CODE"]?>">  <?=$arResult["ITEMS"][0]["NAME"]?></a>
                    </div>
                </div>
                <div class="item-inner">
                <a href="<?=$arResult["ITEMS"][4]["CODE"]?>">
                    <img src="<?=$arResult["ITEMS"][4]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][4]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" height="<?=$arResult["ITEMS"][4]['PREVIEW_PICTURE']['HEIGHT']?>" width="<?=$arResult["ITEMS"][4]['PREVIEW_PICTURE']['WIDTH']?>">
                </a>
                <div class="caption">
                    <?=$arResult["ITEMS"][4]["~PREVIEW_TEXT"]?>
                    <a href="<?=$arResult["ITEMS"][4]["CODE"]?>"><?=$arResult["ITEMS"][4]["NAME"]?></a>
                </div>
                 </div>
</div>
<div class="item">
                <div class="item-inner">
                    <a href="<?=$arResult["ITEMS"][1]["CODE"]?>"> <img alt="<?=$arResult["ITEMS"][1]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" width="310" src="<?=$arResult["ITEMS"][1]["PREVIEW_PICTURE"]["SRC"]?>" height="177" > </a>
                    <div class="caption">
                        <?=$arResult["ITEMS"][1]["~PREVIEW_TEXT"]?>
                        <a href="<?=$arResult["ITEMS"][1]["CODE"]?>"><?=$arResult["ITEMS"][1]["NAME"]?></a>
                    </div>

             </div>
                <div class="text-block">
                    <?=$arResult["ITEMS"][6]["~PREVIEW_TEXT"]?>
               </div>
</div>
<div class="item">
    <div class="item-inner">
        <a href="<?=$arResult["ITEMS"][2]["CODE"]?>">
            <img width="310" src="<?=$arResult["ITEMS"][2]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][2]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" height="<?=$arResult["ITEMS"][2]['PREVIEW_PICTURE']['HEIGHT']?>" >
        </a>
        <div class="caption">
            <?=$arResult["ITEMS"][2]["~PREVIEW_TEXT"]?>
            <a href="<?=$arResult["ITEMS"][2]["CODE"]?>"><?=$arResult["ITEMS"][2]["NAME"]?></a>
        </div>
    </div>
    <div class="item-inner">
        <a href="<?=$arResult["ITEMS"][3]["CODE"]?>">
            <img width="310" src="<?=$arResult["ITEMS"][3]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][3]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" height="<?=$arResult["ITEMS"][3]['PREVIEW_PICTURE']['HEIGHT']?>" >
        </a>
        <div class="caption">
            <?=$arResult["ITEMS"][3]["~PREVIEW_TEXT"]?>
            <a href="<?=$arResult["ITEMS"][3]["CODE"]?>"><?=$arResult["ITEMS"][3]["NAME"]?></a>
        </div>
    </div>
</div>
<div class="item wide">
    <div class="item-inner">
        <a href="<?=$arResult["ITEMS"][5]["CODE"]?>">
            <img src="<?=$arResult["ITEMS"][5]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][5]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" height="<?=$arResult["ITEMS"][5]['PREVIEW_PICTURE']['HEIGHT']?>" width="<?=$arResult["ITEMS"][5]['PREVIEW_PICTURE']['WIDTH']?>">
        </a>
        <div class="caption">
            <?=$arResult["ITEMS"][5]["~PREVIEW_TEXT"]?>
            <a href="<?=$arResult["ITEMS"][5]["CODE"]?>"><?=$arResult["ITEMS"][5]["NAME"]?></a>
        </div>
    </div>
</div>
</div>
</div>
<div class="wrp">
    <div class="text">
        <p>
            Сеть ювелирных магазинов 585GOLD основана в Санкт-Петербурге в 2000 году и уже более 16 лет по праву занимает лидирующую позицию на ювелирном рынке России, радуя своих покупателей качественными золотыми и серебряными украшениями, низкими ценами и постоянно действующими акционными предложениями!
            Ювелирный магазин 585GOLD неизменно придерживается четырех основных принципов в своей работе:<br/><br/>
            •	Предлагаем своим покупателям только качественные золотые и серебряные украшения, проверенные и опробированные Российской государственной пробирной палатой.<br/>
            •	Постоянно расширяем свой ассортимент, чтобы наши клиенты могли найти то, о чем они действительно мечтали. Наш ювелирный сайт предлагает огромный выбор изделий из желтого, белого, красного золота и серебра. Ознакомиться с ассортиментом подробнее вы можете в нашем <a href="/catalog/yuvelirnye_izdeliya/">каталоге</a>.<br/>
            •	Заботимся о том, чтобы наши покупатели могли приобретать ювелирные украшения с максимальной выгодой. Именно поэтому у нас всегда демократичные цены,<br/> а также постоянно действуют скидки и специальные предложения на ювелирную продукцию.<br/>
            •	Предоставляем возможность выбрать удобный способ оплаты. Кроме того, у нас можно приобрести изделия в кредит. И даже обменять украшения, которые уже вышли из моды, на новые!<br/>

        </p>
    </div>
</div>
<div id="main-sl3" class="owl-carousel owl-theme index-sl">
    <div class="sl-item">
        <div class="item-inner">
            <a href="<?=$arResult["ITEMS"][4]["CODE"]?>">
                <img src="<?=$arResult["ITEMS"][4]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][4]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" height="<?=$arResult["ITEMS"][4]['PREVIEW_PICTURE']['HEIGHT']?>" width="<?=$arResult["ITEMS"][4]['PREVIEW_PICTURE']['WIDTH']?>">
            </a>
            <div class="caption">
                <?=$arResult["ITEMS"][4]["~PREVIEW_TEXT"]?>
                <a href="<?=$arResult["ITEMS"][4]["CODE"]?>"><?=$arResult["ITEMS"][4]["NAME"]?></a>
            </div>

        </div>
        <div class="item-inner">
            <a href="<?=$arResult["ITEMS"][1]["CODE"]?>"> <img width="310" alt="<?=$arResult["ITEMS"][1]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" src="<?=$arResult["ITEMS"][1]["PREVIEW_PICTURE"]["SRC"]?>" height="177" > </a>
            <div class="caption">
                <?=$arResult["ITEMS"][1]["~PREVIEW_TEXT"]?>
                <a href="<?=$arResult["ITEMS"][1]["CODE"]?>"><?=$arResult["ITEMS"][1]["NAME"]?></a>
            </div>

        </div>
    </div>
    <div class="sl-item">
        <div class="item-inner long">
            <a href="<?=$arResult["ITEMS"][0]["CODE"]?>"> <img width="310" alt="<?=$arResult["ITEMS"][0]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" src="<?=$arResult["ITEMS"][0]["PREVIEW_PICTURE"]["SRC"]?>" height="399" > </a>
            <div class="caption">
                <?=$arResult["ITEMS"][0]["~PREVIEW_TEXT"]?>
                <a href="<?=$arResult["ITEMS"][0]["CODE"]?>"><?=$arResult["ITEMS"][0]["NAME"]?></a>
            </div>
        </div>
    </div>
    <div class="sl-item">
        <div class="item-inner">
            <a href="<?=$arResult["ITEMS"][2]["CODE"]?>">
                <img width="310" src="<?=$arResult["ITEMS"][2]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][2]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" height="<?=$arResult["ITEMS"][2]['PREVIEW_PICTURE']['HEIGHT']?>">
            </a>
            <div class="caption">
                <?=$arResult["ITEMS"][2]["~PREVIEW_TEXT"]?>
                <a href="<?=$arResult["ITEMS"][2]["CODE"]?>"><?=$arResult["ITEMS"][2]["NAME"]?></a>
            </div>
        </div>
        <div class="item-inner">
            <a href="<?=$arResult["ITEMS"][3]["CODE"]?>">
                <img width="310" src="<?=$arResult["ITEMS"][3]["PREVIEW_PICTURE"]["SRC"]?>" alt="<?=$arResult["ITEMS"][3]["IPROPERTY_VALUES"]["ELEMENT_PREVIEW_PICTURE_FILE_ALT"]?>" height="<?=$arResult["ITEMS"][3]['PREVIEW_PICTURE']['HEIGHT']?>">
            </a>
            <div class="caption">
                <?=$arResult["ITEMS"][3]["~PREVIEW_TEXT"]?>
                <a href="<?=$arResult["ITEMS"][3]["CODE"]?>"><?=$arResult["ITEMS"][3]["NAME"]?></a>
            </div>
        </div>
    </div>
</div>
</div>

```