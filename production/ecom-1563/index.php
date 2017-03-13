<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("");
/*$APPLICATION->SetPageProperty("keywords", "регистрация бонусной карты, бонусная программа, сеть 585, gold, ювелирный магазин, ювелирная сеть, официальный сайт");*/
$APPLICATION->SetPageProperty("description", "Регистрация карты. Программа бонусов. Сеть ювелирных магазинов 585 Gold.");
$APPLICATION->SetPageProperty("title", "Регистрация бонусной карты | Бонусная программа | Ювелирный магазин 585 Gold");

CModule::IncludeModule("iblock");
//$allShops = Zoloto585Store::getStores();

Bitrix\Main\Page\Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/jquery.validate.min.js');
Bitrix\Main\Page\Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/reg_card.js?v3');
Bitrix\Main\Page\Asset::getInstance()->addJs(SITE_TEMPLATE_PATH . '/js/select2/js/select2.js');

Bitrix\Main\Page\Asset::getInstance()->addCss(SITE_TEMPLATE_PATH . '/js/select2/css/select2.min.css');
?>
<div class="tizer_text">
    <div class="wrp clearfix">
        <div class="col">
            <h3>Дарим Золотое настроение! <br>
                Бонусная программа 585GOLD!</h3>
            <p>
                Получить Бонусную карту 585GOLD можно в любом магазине нашей ювелирной сети даже не совершая покупки!
            </p>
        </div>
        <div class="col">
            <p>
                Всем новым клиентам Программы на Бонусную карту зачисляется 3000 приветственных баллов, которыми можно воспользоваться<br>
                в течение 3 месяцев с момента оформления.
            </p>
            <p>
                Бонусными баллами можно оплачивать до 20% стоимости покупки единовременно.
            </p>
        </div>
    </div>
</div>
<section class="content">
    <div class="wrp clearfix">
        <div class="card_info">
            <p>
                ВНИМАНИЕ! Бонусная карта не действительна без активации!<br>
                Для активации карты необходимо зарегистрироваться на сайте<br>
                <a href="https://zoloto585.ru">zoloto585.ru</a> и указать номер полученной карты.
            </p>
        </div>
    </div>
    <div class="wrp clearfix">
        <h1>Регистрация бонусной карты</h1>        

        <article class="form_content">
            <form id="reg_card" action="" class="clearfix">
                <fieldset>                     

                    <div class="line_inp bk">
                        <div class="inp double_width">
                            <label for="">
                                Номер бонусной карты 585 GOLD <sup>*</sup>
                                <span>Введите 16-и значный номер, указанный на оборотной стороне карты</span>
                            </label>
                            <span class="error"></span>
                            <input type="text" class="maxi" id="cardnumber" name="dc" value="" placeholder="1110111011101110" maxlength="16">
                        </div>
                    </div>
                </fieldset>

                <fieldset>
                    <h2>Персональные данные</h2>

                    <div class="line_inp clearfix">
                        <div class="inp">
                            <label for="">Фамилия <sup>*</sup></label>
                            <span class="error"></span>
                            <input class="name-part" type="text" id="surname" name="fn" value="" maxlength="100">
                        </div>

                        <div class="inp">
                            <label for="">Имя <sup>*</sup></label>
                            <span class="error"></span>
                            <input class="autocomplete name-part" data-source="/registraciya_karty/autocomplete/autocomplete.php?type=name" type="text" id="name" name="sn" value="" maxlength="100">
                        </div>

                        <div class="inp">
                            <label for="">Отчество <sup>*</sup></label>
                            <span class="error"></span>
                            <input class="autocomplete name-part" data-source="/registraciya_karty/autocomplete/autocomplete.php?type=surname" type="text" id="patronymic" name="tn" value="" maxlength="100">
                        </div>

                        <div class="inp">
                            <label for="">Город проживания <sup>*</sup></label>
                            <span class="error"></span>
                            <input class="autocomplete" data-source="/registraciya_karty/autocomplete/autocomplete.php?type=city" id="city" name="sl" type="text" value="" maxlength="100" />
                        </div>
                    </div>

                    <div class="line_inp clearfix">
                        <!--
                        <div class="inp select">
                            <label for="">Область проживания <sup>*</sup></label>
                            <span class="error"></span>
                            <select name="region_id" id="region_id" class="select_drop">
                                <option value="0">- выберите -</option>
                                <option value="1998532.01">Адыгея</option>
                                <option value="3160.22">Алтайский край</option>
                                <option value="3223.28">Амурская обл.</option>
                                <option value="3251.29">Архангельская обл.</option>
                                <option value="3282.30">Астраханская обл.</option>
                                <option value="3296.03">Башкортостан(Башкирия)</option>
                                <option value="3352.31">Белгородская обл.</option>
                                <option value="3371.32">Брянская обл.</option>
                                <option value="3407.04">Бурятия</option>
                                <option value="3437.33">Владимирская обл.</option>
                                <option value="3468.34">Волгоградская обл.</option>
                                <option value="3503.35">Вологодская обл.</option>
                                <option value="3529.36">Воронежская обл.</option>
                                <option value="3630.05">Дагестан</option>
                                <option value="3673.79">Еврейская обл.</option>
                                <option value="3675.37">Ивановская обл.</option>
                                <option value="50193940.06">Ингушетия</option>
                                <option value="3703.38">Иркутская обл.</option>
                                <option value="3751.07">Кабардино-Балкария</option>
                                <option value="3761.39">Калининградская обл.</option>
                                <option value="3827.08">Калмыкия</option>
                                <option value="3841.40">Калужская обл.</option>
                                <option value="3872.41">Камчатская обл.</option>
                                <option value="3892.10">Карелия</option>
                                <option value="3921.42">Кемеровская обл.</option>
                                <option value="3952.43">Кировская обл.</option>
                                <option value="3994.11">Коми</option>
                                <option value="4026.44">Костромская обл.</option>
                                <option value="4052.23">Краснодарский край</option>
                                <option value="4105.24">Красноярский край</option>
                                <option value="4176.45">Курганская обл.</option>
                                <option value="4198.46">Курская обл.</option>
                                <option value="23.47">Ленинградская обл</option>
                                <option value="4227.48">Липецкая обл.</option>
                                <option value="4243.49">Магаданская обл.</option>
                                <option value="4270.12">Марий Эл</option>
                                <option value="4287.13">Мордовия</option>
                                <option value="4312.77">Москва</option>
                                <option value="16.50">Московская обл</option>
                                <option value="4481.51">Мурманская обл.</option>
                                <option value="3563.52">Нижегородская (Горьковская)</option>
                                <option value="4503.53">Новгородская обл.</option>
                                <option value="4528.54">Новосибирская обл.</option>
                                <option value="4561.55">Омская обл.</option>
                                <option value="4593.56">Оренбургская обл.</option>
                                <option value="4633.57">Орловская обл.</option>
                                <option value="4657.58">Пензенская обл.</option>
                                <option value="4689.59">Пермская обл.</option>
                                <option value="4734.25">Приморский край</option>
                                <option value="4773.60">Псковская обл.</option>
                                <option value="4800.61">Ростовская обл.</option>
                                <option value="4861.62">Рязанская обл.</option>
                                <option value="4891.63">Самарская обл.</option>
                                <option value="4925.78">Санкт-Петербург</option>
                                <option value="4969.64">Саратовская обл.</option>
                                <option value="5011.14">Саха (Якутия)</option>
                                <option value="5052.65">Сахалин</option>
                                <option value="5080.66">Свердловская обл.</option>
                                <option value="5151.15">Северная Осетия</option>
                                <option value="5161.67">Смоленская обл.</option>
                                <option value="5191.26">Ставропольский край</option>
                                <option value="5225.68">Тамбовская обл.</option>
                                <option value="5246.16">Татарстан</option>
                                <option value="3784.69">Тверская обл.</option>
                                <option value="5291.70">Томская обл.</option>
                                <option value="5312.17">Тува (Тувинская Респ.)</option>
                                <option value="5326.71">Тульская обл.</option>
                                <option value="5356.72">Тюменская обл.</option>
                                <option value="5404.18">Удмуртия</option>
                                <option value="5432.73">Ульяновская обл.</option>
                                <option value="5473.27">Хабаровский край</option>
                                <option value="2316497.19">Хакасия</option>
                                <option value="2499002.86">Ханты-Мансийский АО</option>
                                <option value="5507.74">Челябинская обл.</option>
                                <option value="5543.20">Чеченская республика</option>
                                <option value="5555.75">Читинская обл.</option>
                                <option value="5600.21">Чувашия</option>
                                <option value="2415585.87">Чукотский АО</option>
                                <option value="5019394.89">Ямало-Ненецкий АО</option>
                                <option value="5625.76">Ярославская обл.</option>
                            </select>
                        </div>
						-->
                        
                    </div>

                    <div class="line_inp clearfix">
                        <div class="inp select">
                            <label for="">Пол <sup>*</sup></label>
                            <span class="error"></span>
                            <select id="gender" name="sex" class="select_drop">
                                <option value="0">- выберите -</option>
                                <option value="2">Мужской</option>
                                <option value="1">Женский</option>
                            </select>
                        </div>

                        <div class="inp">
                            <label for="">Телефон <sup>*</sup></label>
                            <span class="error"></span>
                            <input type="text" id="phone" name="phone" value="" placeholder="99765347" maxlength="10">
                        </div>

                        <div class="inp">
                            <label for="">Дата рождения <sup>*</sup></label>
                            <span class="error"></span>                            
                            <div class="birth_date-wraps">
	                            <div class="birth_date-wrap">
		                            <select name="birth_date[year]" id="birth_date_year" class="birth_date-select" data-placeholder="Год">
										<option value=""></option>
										<?php for ($year = 2002; $year >= 1925; $year--) { ?>
											<option value="<?php echo $year?>"><?php echo $year?></option>
										<?php } ?>
									</select>					
									<div class="birth_date-caption">Год</div>
								</div>
								<div class="birth_date-wrap delimiter">&nbsp;</div>
								<div class="birth_date-wrap">
		                           	<select name="birth_date[month]" id="birth_date_month" class="birth_date-select" data-placeholder="Месяц">
										<option></option>
										<?php 
											$months = array(
												'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь' 
											);
											foreach ($months as $index => $name) { ?>
											<?php $correctIndex = str_pad(($index + 1), 2, '0', STR_PAD_LEFT); ?>
											<option value="<?php echo $correctIndex?>"><?php echo $name;?></option>
										<?php } ?>
									</select>		
									<div class="birth_date-caption">Месяц</div>
								</div>
								<div class="birth_date-wrap delimiter">&nbsp;</div>
								<div class="birth_date-wrap">
		                           	<select name="birth_date[day]" id="birth_date_day" class="birth_date-select" data-placeholder="День">
										<option></option>
										<?php for ($day = 1; $day <= 31; $day++) { ?>
											<?php $day = str_pad($day, 2, '0', STR_PAD_LEFT); ?>
											<option value="<?php echo $day?>"><?php echo $day;?></option>
										<?php } ?>
									</select>		
									<div class="birth_date-caption">День</div>
								</div>
							</div>		
                        </div>
                        <div class="inp inp-email-with-select">
                            <label for="">E-mail</label>
                            <span class="error"></span>
                            <div class="email-wraps">
	                            <input type="text" id="email" name="email" value="" maxlength="100">
	                            <div class="domain-delimiter">@</div>	                            
	                            <select name="email_domain" id="email_domain">	                            	
	                            	<option value=""></option>
	                            	<option value="mail.ru">mail.ru</option>
	                            	<option value="yandex.ru">yandex.ru</option>
	                            	<option value="gmail.com">gmail.com</option>
	                            	<option value="rambler.ru">rambler.ru</option>
	                            	<option value="bk.ru">bk.ru</option>
	                            	<option value="list.ru">list.ru</option>
	                            	<option value="inbox.ru">inbox.ru</option>
	                            	<option value="ya.ru">ya.ru</option>
	                            	<option value="other">Ввести вручную</option>
	                            </select>	                            
	                            <input type="text" name="email_domain_other" id="email_domain_other" style="display:none;" placeholder="Домен">
                            </div>
                        </div>
                    </div>
                </fieldset>

                <!--
                <fieldset class="dop">
                    <h2>Дополнительные данные</h2>

                    <div class="dop_inp">
                        <div class="line_inp magazine">
                            <div class="inp double_width select">
                                <label for="">Магазин выдачи карты</label>
                                <select id="magazine" name="am" class="select_drop">
                                    <option value="">- выберите -</option>

                                    <? /*foreach ($allShops as $key=>$shop) { ?>
                                        <option value="<?=$shop['ADDRESS']?>"><?=$shop['ADDRESS']?></option>
                                    <? } */?>
                                </select>
                            </div>
                        </div>

                        <div class="line_inp clearfix">
                            <div class="inp select">
                                <label for="">Тип документа</label>
                                <select id="doc_name" name="dv" class="select_drop">
                                    <option value="0">- выберите -</option>
                                    <option value="FS0001">Паспорт гражданина РФ</option>
                                    <option value="FS0002">Зараничный паспорт</option>
                                    <option value="FS0003">Военный билет</option>
                                    <option value="FS0004">Паспорт моряка</option>
                                    <option value="FS0005">Удостоверение личности военнослужащего</option>
                                    <option value="FS0006">Временное удостоверение личности</option>
                                    <option value="FS0007">Паспорт иностранного гражданина</option>
                                    <option value="FS0008">Вид на жительство</option>
                                    <option value="FS0009">Удостоверение беженца</option>
                                </select>
                            </div>

                            <div class="inp inp_inline clearfix">
                                <label for="">Серия и номер</label>
                                <input type="text" class="mini" id="doc_seria" name="pd1" value="">
                                <input type="text" class="mini last" id="doc_number" name="pd2" value="">
                            </div>

                            <div class="inp">
                                <label for="">Кем выдан</label>
                                <input type="text" id="doc_whom" name="kv" value="" size="30" maxlength="40">
                            </div>

                            <div class="inp inp_date">
                                <label for="">Дата выдачи</label>
                                <input type="text" class="dpicker" id="doc_date" name="dd" value="">
                            </div>
                        </div>
                    </div>
                </fieldset>
                -->

                <div class="checkbox">
                    <input type="checkbox" id="agree" name="confirm">
                    <label for="agree">
                        <span></span>
                        <div class="text">
                            Нажимая кнопку Зарегистрироваться, Я подтверждаю свою дееспособность, ознакомление <b>с <a href="#" onclick="window.open('/registraciya_karty/rules.php','Правила программы лояльности','directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no');return false;">правилами программы лояльности</a></b>, и даю <a target="_blank" href="/assets/docs/sogl_form.pdf"><b>согласие установленной формы</b></a> на обработку моих персональных данных
                            <br><br>
                            <font color="#c01d33">ВНИМАНИЕ!</font> ПРОМО-КОД отправляется на указанный Вами номер телефона в качестве подтверждения согласия с <a target="_blank" href="/assets/docs/sogl.pdf">«Соглашением о конфиденциальности»</a>. СМС с промо-кодом отправляется на Ваш номер телефона абсолютно бесплатно – за счет «Оператора».</div>
                    </label>
                </div>

                <input type="submit" id="coc" style="display: none" value="Зарегистрироваться &rarr;" class="btn btn_big btn_red fr">
            </form>

            <form style="display: none" id="reg_confirm" action="" method="" class="clearfix">
                <h3>Для завершения регистрации введите промо-код, который придет на номер телефона, указанный вами в анкете</h3>
                <div class="line_inp">
                    <div class="inp">
                        <label for="Confirm_promokey">Промо код</label>
                        <input type="text" name="promokey" id="Confirm_promokey">
                    </div>
                </div>
                <input type="submit" value="Продолжить" class="btn btn_small btn_red">
            </form>
        </article>

        <div class="lasted_article clearfix">
            <article class="box_left layers">
                <h1>Уровни участия клиента в Бонусной программе 585 GOLD</h1>
                <div class="item">
                    <h2>Базовый уровень</h2>
                    <p>Базовый уровень – присваивается клиенту при выдаче карты без совершения покупок. Начисления производятся из расчета 1 бонусный балл=1 рубль.</p>
                </div>

                <div class="item">
                    <h2>Серебряный уровень</h2>
                    <p>Присваивается клиенту при совершении первой покупки.<br>
                        При накоплении суммы покупок от 0 рублей до 15 000 рублей происходит начисление на бонусный счет 5% от каждой покупки.</p>
                </div>

                <div class="item">
                    <h2>Золотой уровень</h2>
                    <p>Присваивается клиенту при накоплении суммы покупок от 15 000 рублей до 25 000 рублей. Бонусный счет 7% от каждой покупки.</p>
                </div>

                <div class="item">
                    <h2>Платиновый уровень</h2>
                    <p>Присваивается клиенту при накоплении суммы покупок свыше 25 000 рублей.<br>
                        От каждой покупки на бонусный счет начисляется 9%.</p>
                </div>
            </article>

            <article class="box_right faq">
                <h1>Популярные вопросы</h1>

                <h2>Как получить бонусную карту?</h2>
                <p>Бонусную карту можно получить в любом <a href="">магазине нашей сети</a>, обратившись к продавцу и заполнив анкету. Для получения карты покупку совершать не обязательно.</p>

                <h2>Где и как регистрировать карту?</h2>
                <p>Бонусную карту можно зарегистрировать сразу при получении – для этого необходимо заполнить анкету в магазине и отдать продавцу. Так же регистрацию карты можно пройти на сайте. Бонусная карта не действительна без активации!</p>

                <h2>Могу ли я сразу воспользоваться бонусами на карте после регистрации?</h2>
                <p>Обратите внимание, что активация карты может занимать от 1 до 7 дней с момента заполнения анкеты, после чего карта считается активной и можно использовать бонусные баллы.</p>

                <h2>Как я узнаю, активирована ли карта?</h2>
                <p>В течении 7 дней после регистрации карта будет активирована при правильном заполнении анкетных данных. Узнать об этом можете в магазине, обратившись к продавцу, либо на сайте при <a href="">проверке баланса</a> (если баланс увидеть не удается и сайт выдает ошибку «ваши личные данные не соответствуют номеру карты», значит, карта еще не активирована).</p>

                <h2>Можно ли оплатить покупку только бонусами?</h2>
                <p>Бонусами можно оплатить не более 20% от стоимости покупки.</p>

                <h2>Оплата бонусами распространяется на все украшения?</h2>
                <p>Бонусными баллами нельзя оплатить: товары с фиксированной ценой, подарочные сертификаты, сертификаты «Меняем старое на новое» и покупки по акции 2=1.</p>

                <a class="btn btn_yellow btn_small" href="/bonusnye_karty/faq.php">Все вопросы &rarr;</a>
            </article>

            <article class="ads">
                <p>Все накапливаемые баллы действительны в течение 24 месяцев с момента совершения покупки.</p>
                <div class="accordion">
                    <ul>
                        <li class="toggle">
                            <h3>Правила начисления бонусных баллов</h3>
                            <div class="clr">
                                <p>Бонусные баллы начисляются с первой покупки.<br>
                                    Начисление происходит на следующий день после совершения покупки.<br>
                                    Клиентам Программы могут дополнительно начисляться «акционные» баллы, о сроках действия и условиях использования которых будет дополнительно сообщаться клиентам, посредством СМС и e-mail рассылки.<br>
                                    Бонусные баллы начисляются при оплате покупки подарочным сертификатом на эквивалентную сертификату сумму.</p>
                            </div>
                        </li>

                        <li class="toggle">
                            <h3>Бонусные баллы не начисляются</h3>
                            <div class="clr">
                                <p>С суммы текущей покупки, оплаченной полученными ранее бонусными баллами.<br>
                                    При покупке подарочного сертификата и сертификата «Меняем старое на новое».</p>
                            </div>
                        </li>

                        <li class="toggle">
                            <h3>Правила использования бонусных баллов</h3>
                            <div class="clr">
                                <p>Бонусными баллами можно оплатить до 20% покупки единовременно.<br>
                                    Бонусными баллами нельзя оплатить: товары с фиксированной ценой,  подарочный сертификат, сертификат «Меняем старое на новое» и покупки по акции 2=1.
                                </p>
                            </div>
                        </li>

                        <li class="toggle">
                            <h3>Условия обмена дисконтных карт на Бонусную карту</h3>
                            <div class="clr">
                                <p>В рамках Бонусной программы ювелирного магазина 585 GOLD все клиенты сетей «585», «Gold», «SinceForever», «Ю!» могут обменять свою дисконтную карту на новую Бонусную карту 585 GOLD совершенно бесплатно!</p>
                                <p>При этом история покупок и текущий уровень Дисконтной карты – будут сохранены и перенесены на Бонусную карту. Обмен карт на данных условиях действителен до 30 октября 2014 года.</p>
                                <p>При обмене вы получаете 3000 стартовых баллов на вашу Бонусную карту, которые действительны в течение 3 месяцев с момента выдачи новой карты.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <p>Текущий уровень накоплений на Бонусной карте можно уточнить в любом магазине ювелирной сети 585 GOLD и в личном кабинете на сайте.</p>
                <p>Ювелирная сеть оставляет за собой право менять условия Бонусной программы лояльности.</p>
            </article>
        </div>
    </div>
</section>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
