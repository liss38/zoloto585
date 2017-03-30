
Текущий список css-файлов, подключенных в header.php(версия файла 30.03.2017):
```
(1)		/bitrix/templates/zoloto/css/ext.min.css
(2)		/bitrix/templates/zoloto/css/main.css?v0
(3)		/bitrix/templates/zoloto/css/fonts.css
(4)		/bitrix/templates/zoloto/css/reset.css
(5)		/bitrix/templates/zoloto/css/base.css
(6)		/bitrix/templates/zoloto/css/my.css?v2
(7)		/bitrix/templates/zoloto/css/responsive.css
(8)		/bitrix/templates/zoloto/css/fonts/font.css
(9)		/bitrix/templates/zoloto/css/footer.css?v1
(10)	/bitrix/templates/zoloto/css/pcard-motivate.css
(11)	/bitrix/templates/zoloto/css/pcard_order_info.css
(12)	/bitrix/templates/zoloto/css/msalnikov.min.css
(13)	/bitrix/templates/zoloto/css/tmp.css
(14)	/bitrix/templates/zoloto/css/style_new.css
```




Из них:

 - ext.min.css сжатый файл из css-стили идущих с jquery-плагинами, собирается из отдельных less-файлов на front-сервере локально

 - main.css, fonts.css, reset.css, base.css, my.css, responsive.css, font.css, footer.css, pcard-motivate.css, pcard_order_info.css - legacy css, который частично не используется, частично требует перевод на БЭМ-нотацию(затрагивая html-разметку)

 - msalnikov.min.css - сборный файл из отдельных less-файлов, который собирается с помощью gulp на front-сервере локально, затем результирующий файл отдается на dev/prod сервер

 - tmp.css - файлы стилей, которым управляют бэкенд-разработчики, по договоренности между разработчиками должен быть последнем в списке подключаемых css-файлов и единственным файлом который может редактироваться через css(а не через less) напрямую

 - style_new.css - файл содержит стили фильтра каталога и стили для лэндинга




Ненайденные на сервере в стилевой папке файлы:
	/bitrix/templates/zoloto/css/fonts/font.css, 
	/bitrix/templates/zoloto/css/pcard-motivate.css, 
	/bitrix/templates/zoloto/css/pcard_order_info.css



Последовательность монтирования стилефых файлов:
	1. Кроссбраузерное подключение web-шрифтов
	2. Стили идущие с внешними библиотеками/плагинами, reset/normalize
	3. Сетка: стили модульной сетки страниц сайта
	4. Стили типовых элементов интерфейса
	5. Стили хэдера
	6. Стили футера
	...
	(7 ... N). Постраничные стили разделов/шаблонов(в люой последовательности, т.к. стили шаблонов/разделов не пересаются между собой)

	(!)Важно: пункты 1-6 идут всегда в начале результирующего css-файла и только в заданной выше последовательности строго друг за другом


Сделанные действия с legacy-css:
 - файл less/legacy-css/reset.css перемещен в less/layout/external/reset.css, переименован в less/layout/external/reset.less и подключен в файле less/scaffolding/layout__external.less первым в списке
 - файл less/legacy-css/fonts.css переместил в less/layout/fonts/fonts--legacy.css, подключил в less/scaffolding/layout__fonts.less