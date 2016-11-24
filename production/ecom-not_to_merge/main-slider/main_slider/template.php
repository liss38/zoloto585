<? $this->setFrameMode(true); ?>
<div id="main-sl" class="owl-carousel owl-theme index-sl">
	
	<? $pos = 1; ?>

	<? foreach ($arResult['ITEMS'] as $slide) { ?>
    
	    <?if ($slide["DETAIL_PICTURE"] || $slide['PROPERTIES']['youtube']['VALUE']) { ?>
	    
	    <div class="item" style="background-color: <?=$slide['PROPERTIES']['BG']['VALUE']?>">
		    <div class="slide" onclick="<?=$slide['PROPERTIES']['code_click']['VALUE']?>">
	            
	            <? if ($slide['PROPERTIES']['youtube']['VALUE']) { ?>
	            
		            <iframe 
			            width="1920" 
			            height="400" 
			            src="<?=$slide['PROPERTIES']['youtube']['VALUE']?>" 
			            frameborder="0" 
			            allowfullscreen></iframe>

		            <a class="ecommerce-promo-item" data-position="Слот <?=$pos++?>" data-ecommerce-id="<?=$arParams['GTM_ACTION_ID']?>_<?=$slide['ID']?>" data-name="<?=$slide['NAME']?>" href="<?=$slide['PROPERTIES']['link']['VALUE']?>">
		            	<img class="sl-mob" src="<?=$slide['PREVIEW_PICTURE']['SRC']?>" alt="">
		            </a>		            
		            <a class="ecommerce-promo-item hover-a" data-position="Слот <?=$pos++?>" data-ecommerce-id="<?=$arParams['GTM_ACTION_ID']?>_<?=$slide['ID']?>" data-name="<?=$slide['NAME']?>" href="<?=$slide['PROPERTIES']['link']['VALUE']?>">Перейти в каталог</a>
	           
	            <? } else { ?>
	               
	               	<a class="ecommerce-promo-item" data-position="Слот <?=$pos++?>" data-ecommerce-id="<?=$arParams['GTM_ACTION_ID']?>_<?=$slide['ID']?>" data-name="<?=$slide['NAME']?>" href="<?=$slide['PROPERTIES']['link']['VALUE']?>">
	                    <img  class="sl-mob" src="<?=$slide['PREVIEW_PICTURE']['SRC']?>" alt="" />
	               		<img  class="sl-desc" src="<?=$slide['DETAIL_PICTURE']['SRC']?>" alt="" />
	               	</a>

	            <? } ?>
	         </div>
	    </div>

	    <? } ?>
	
	<? } ?>


</div>