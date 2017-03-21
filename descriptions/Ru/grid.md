```
div.page
header.page__header
main.page__content
footer.page__footer
```

```
div.section
	div.section__inner
```

```
HTML
<div class="section  foobar-section">
	<div class="section__inner  foobar-section__inner">
		<!-- содержимое секции -->
	</div>
</div>



LESS
foobar-section.less
.foobar-section {
	

	&__inner {

	}
}
```


@TODO: правила и инструкция по использованию уже существующих сеточных элементов, создание секции, группы секции, целой страницы целиком