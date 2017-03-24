# Раздела "АДРЕСА МАГАЗИНОВ"



### Index || Стартовая страница раздела

Ссылка на раздел https://zoloto585.ru/about/address/

Описание функциональных возможностей


список участвующих файлов, стили, шаблоны, скрипты, разметка, спрайты и графика


Подключаемые шаблоны:
views/store/store-cities-list-template.js
views/store/store-item-template.js
views/store/store-list-template.js

Обработчик страницы:
js/render/store.js

```javascript
//функция ленивой подгрузки используемых шаблонов
function lazyGetTemplate(name: string, pathToTemplateFile: string)


// функция описывает поведение и вид для яндекс карты
function storeMapInit(storeData)

// "JSON", структура вринимаемых данных
storeData = [...,
	{
		ADDRESS: {
			STREET: "ул.Герцена",
			HOUSE_FLAT: " 3В"
		},
		SCHEDULE_PREPARE: "ежедневно 10:00-20:00",
		GPS_N: "54.903034",
		GPS_S: "52.322886",
		CITY: "Альметьевск",
		XML_ID: "094",
		DETAIL_URL: "/about/address/al-met-evsk/ul-gercena-3v/"
	},
	...]
```

Общая разметка раздела:


Стили раздела:
development/less/pages/store/store-about.less
development/less/pages/store/store-about-section.less
development/less/pages/store/store-item.less
development/less/pages/store/store-list.less
development/less/pages/store/store-map-container.less
development/less/pages/store/store-map-section.less
development/less/pages/store/store-search.less

Картники и графика:
используется основной спрайт