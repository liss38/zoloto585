1. точки слома и базовая сетка
2. LESS-переменные для адаптива

<b>'development\less\_mix\@breakpoints.less'</b>
=========================================


<b>/*
	ЗНАЧЕНИЯ
	ТОЧЕК
	СЛОМА
*/</b>

/* DESKTOP */
@desktop-min: 1025px;

/* TABLET ALBUM */
@tablet_a-min: 768px;
@tablet_a-max: (@desktop-min - 1);

/* TABLET PORTRAIT */
@tablet_p-min: 640px;
@tablet_p-max: (@tablet_a-min - 1);

/* MOBILE ALBUM */
@mobile_a-min: 480px;
@mobile_a-max: (@tablet_p-min - 1);

/* MOBILE PORTRAIT */
/*@mobile_p-min: px;*/
@mobile_p-max: (@mobile_a-min - 1);




<b>/*
	ПРАВИЛА
	ДЛЯ
	@MEDIA-ВЫРАЖЕНИЙ
*/</b>

less-переменные для адаптирования,
как это писать в less-файле,
как это будет выглядеть в css-файле



@media @desktop { ... }

@media screen and (min-width: 1025px) { ... }




@media @touch { ... }

@media screen and (max-width: 1024px) { ... }




@media @tablet { ... }

@media screen and (min-width: 640px) and (max-width: 1024px) { ... }




@media @tablet-album { ... }

@media screen and (min-width: 768px) and (max-width: 1024px) { ... }




@media @tablet-portrait { ... }

@media screen and (min-width: 640px) and (max-width: 767px) { ... }




@media @mobile { ... }

@media screen and (max-width: 639px) { ... }




@media @mobile-album { ... }

@media screen and (min-width: 480px) and (max-width: 639px) { ... }




@media @mobile-portrait { ... }

@media screen and (max-width: 479px) { ... }