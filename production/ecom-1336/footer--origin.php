 </main>
    <footer>
        <div class="footer-info">
            <div class="wrap clearfix">
                <div class="item">
                    <img src="<?= SITE_TEMPLATE_PATH ?>/images/new/info1.png">
                    <br>более 270 магазинов
                </div>
                <div class="item">
                    <img src="<?= SITE_TEMPLATE_PATH ?>/images/new/info2.png">
                    <br>15 лет на рынке россии
                </div>
                <div class="item">
                    <img style="margin-top: 7px;" src="<?= SITE_TEMPLATE_PATH ?>/images/new/info3.png">
                    <br>широкий ассортимент
                </div>
                <div class="item">
                    <img src="<?= SITE_TEMPLATE_PATH ?>/images/new/info4.png">
                    <br>Низкие цены
                </div>
            </div>
        </div>
        <div class="inner">
            <div class="wrap">
                <div class="footer-accordions">
                    <div class="item">
                        <div class="item-inner">
                            <span>О 585GOLD</span>
                            <ul class="accord">
                                <li><a href="/about/">О компании</a></li>
                                <li><a href="/action/">Акции</a></li>
                                <li><a href="//lombard.zoloto585.ru/ ">Ломбарды</a></li>
                                <li><a href="/vacansii/">Вакансии</a></li>
                                <li><a href="/about/contacts/">Контакты</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-inner">
                            <span>ПОМОЩЬ ПОКУПАТЕЛЯМ</span>
                            <ul class="accord">
                                <li><a href="/bonusnye_karty/faq.php">Как получить бонусную карту</a></li>
                                <li><a href="/garanty/">Гарантия</a></li>
                                <li><a href="/vozvrat/">Возврат</a></li>
                                <li><a href="/about/address/">Адреса магазинов</a></li>
                                <li><a href="/about/pravila_pokupki/">Бронирование изделий</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="item">
                        <div class="item-inner">
                            <span>ВАЖНАЯ ИНФОРМАЦИЯ</span>
                            <ul class="accord">
                                <li><a href="/more-bleska/">Журнал</a></li>
                                <li><a href="/kredit/">Купить в кредит </a></li>
                                <li><a href="/registraciya_karty/">Бонусные карты</a></li>
                                <li><a href="/about/podarochnye_sertifikaty/">Подарочные сертификаты</a></li>
                            </ul>
                        </div>
                    </div>
                    <?/*?> <div class="item block-quest">
                           <div class="icon"><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/quest.png" width="15" height="15"></div>
                        <div class="item-inner">
                            <span>
                                <a class="quest_footer question-popup" href="#question">Задать вопрос</a>
                                <i>Задать вопроc</i>
                            </span>
                            <div class="accord">
	                            <div class="zag_mob">Ваше сообщение отправлено</div>
                                <form class="form-question" id="form-question_mob">
                                    <small>Все поля обязательны для заполнения</small>
                                    <div class="row clearfix">
                                        <div class="input-div">
                                            <input type="text" name="name" value="" id="name_question_mob" placeholder="ВВЕДИТЕ ВАШЕ ИМЯ">
                                        </div>
                                        <div class="input-div">
                                            <input type="tel"  name="phone" value="" id="phone_question_mob" placeholder="ТЕЛЕФОН">
                                        </div>
                                        <div class="input-div">
                                            <input type="text" name="email" value="" id="email_question_mob" placeholder="ВВЕДИТЕ EMAIL">
                                        </div>
                                        <div class="input-div">
                                            <?
                                            if( $obCache->InitCache($cacheLifetime, $cacheID, $cachePath))
                                            {
                                                $vars_city = $obCache->GetVars();
                                                $listCity = $vars_city['listCity'];
                                                sort($listCity);
                                            };
                                            if (is_array($listCity)): ?>
											<select name="region_feedback" id="region_feedback" class="select">
							                    <?foreach($listCity as $k_city=>$val_city):?>
													<option value="<?=$val_city?>" class="opt"><?=$val_city?></option>
												<?endforeach;?>
											</select>
											<? endif; ?>
                                        </div>
                                    </div>
                                    <textarea name="message" id="message_question_mob" placeholder="ВВЕДИТЕ ВАШ ВОПРОС"></textarea>
                                    <button type="submit" class="btn_question">Отправить вопрос</button>
                                    <small><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/time-w.png" height="16" width="16" alt="" style="margin-top: -2px;" /> Часы работы с 10:00 до 18:00</small>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="item block-newsletter">
                        <div class="icon"><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/news.png" width="16" height="16">
                        </div>
                        <div class="item-inner">
                            <span>подписаться на рассылку</span>
                            <div class="accord">
                                <form class="form-newsletter">
                                    <div class="row clearfix">
                                        <div class="input-div">
                                            <input type="mail" placeholder="ВВЕДИТЕ EMAIL">
                                        </div>
                                        <div class="input-div">
                                            <button type="submit"></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>  <?*/?>
                </div>
                <div class="footer-contacts" style="top: 10px;">
                    <div class="footer-contacts-phone">
                        <a href="tel:88005551585">8 800 555 1 585</a>
                        <span>бесплатный звонок по россии</span>
                    </div>
                    <div class="footer-contacts-ss">
                        <a href="http://ok.ru/zoloto585gold"><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/od.png" width="26" height="26"></a>
                        <a href="http://instagram.com/zoloto585.ru/"><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/inst.png" width="26" height="26"></a>
                        <a href="http://www.youtube.com/channel/UC86ag5yBhGmyApkA5egu75w"><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/you.png" width="28" height="26"></a>
                        <a href="https://vk.com/zoloto585gold"><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/vk.png" width="28" height="26"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </div>
   <?/*?> <div id="question" class="white-popup-block mfp-hide">
        <h1>Задать вопрос</h1>
        <div class="zag_big">Ваше сообщение отправлено</div>
        <form class="form-question" id="form-question">
	        <input type="hidden" id="GetCurUri" name="GetCurUri" value="<?=$APPLICATION->GetCurDir();?>">
            <small>Все поля обязательны для заполнения</small>
            <div class="row">
                <div class="input-div">
                    <input type="text" name="name" value="" id="name_question" placeholder="ВВЕДИТЕ ВАШЕ ИМЯ">
                </div>
                <div class="input-div">
                    <input type="tel"  name="phone" value="" id="phone_question" placeholder="ТЕЛЕФОН">
                </div>
                <div class="input-div">
                    <input type="text" name="email" value="" id="email_question" placeholder="ВВЕДИТЕ EMAIL">
                </div>
                <div class="input-div">
	                <? if (is_array($listCity)): ?>
					<select name="region_feedback" id="region_feedback" class="select">
	                    <?foreach($listCity as $k_city=>$val_city):?>
							<option value="<?=$val_city?>" class="opt"><?=$val_city?></option>
						<?endforeach;?>
					</select>
					<? endif; ?>
                </div>
            </div>
            <textarea name="message" id="message_question" placeholder="ВВЕДИТЕ ВАШ ВОПРОС"></textarea>
            <button  class="btn_question" type="submit">Отправить вопрос</button>
            <small><img src="<?= SITE_TEMPLATE_PATH ?>/images/new/time.png" height="16" width="16" alt="" style="margin-top: -2px;" /> Часы работы с 10:00 до 18:00</small>
        </form>
    </div><?*/?>
 <div class="pcard-motivate">
	 <div class="form  pcard-motivate__inner">
		 <button id="pcard-motivate-button" class="form__button  pcard-motivate__button">Спасибо</button>
	 </div>
 </div>
	<div class="bron_container"></div>
</body>
</html>