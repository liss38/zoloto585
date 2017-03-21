# LESS. Общий механизм работы с less

 - 1. [Использование нотации БЭМ](#1-Использование-нотации-БЭМ)
 - 2. [БЭМ в less-файлах](#2-БЭМ-в-less-файлах)
 - 3. [БЭМ и файловая структура для LESS](#3-БЭМ-и-файловая-структура-для-LESS)
 - 4. [БЭМ в HTML-файлах](#4-БЭМ-в-HTML-файлах)
 - 5. [Пример рабочих ситуаций](#5-Пример-рабочих-ситуаций)

### 1. Использование нотации БЭМ:

**Блок**
```
slider,
main-nav,
item-card-image
...
```

**модификатор блока**
```
slider--index, 
slider--like-carousel, 
slider--red-theme

main-nav--sticky, 
main-nav--desktop
...
```

**элемент блока**
```
main-nav__list, 
main-nav__item, 
main-nav__link, 
main-nav__burger
...
```

**Модификатор элемента блока**
```
main-nav__list, 
main-nav__list--active, 
main-nav__list--left-side, 
main-nav__list--opened,

main-nav__item--active, 

main-nav__link--active, 

main-nav__burger--like-cross, 
main-nav__burger--active
```


### 2. БЭМ в less-файлах
```css
.main-nav {
	display: block;
	// задаем css-свойства
	// для блока с css-классом 
	// "main-nav"


	&--sticky {
		// перечисляются css-свойства 
		// для модификатора "main-nav--sticky" 
		// БЭМ-блока "main-nav"
		//
	}


	&--active {
		// перечисляются css-свойства 
		// для модификатора "main-nav--active" 
		// БЭМ-блока "main-nav"
		//
	}


	&__burger {
		// перечисляются css-свойства 
		// для БЭМ-элемента "main-nav__burger" 
		// БЭМ-блока "main-nav"
		//


		&--cross {
			// перечисляются css-свойства 
			// для модификатора "main-nav__burger--cross" 
			// БЭМ-элемента "main-nav__burger"
			//
		}
	}


	&__list {
		// перечисляются css-свойства 
		// для БЭМ-элемента "main-nav__list" 
		// БЭМ-блока "main-nav"
		//


		&--active {
			// перечисляются css-свойства 
			// для модификатора "main-nav__list--active" 
			// БЭМ-элемента "main-nav__list"
			//
		}
	}


	&__item {
		// css-свойства для "main-nav__item" 
		//
	}


	&__link {
		// css-свойства для "main-nav__link" 
		//
	}
}
```



### 3. БЭМ и файловая структура для LESS
 - Действует правило "один БЭМ-блок = один less-файл" по имени этого БЭМ-блока,
Например файл "main-nav.less" содержит стили только для БЭМ-блока ".main-nav", его модификаторов, 
элементов и модификаторов для элементов,
не может модержать стлизацию для других БЭМ-блоков(их модификаторов, элементов, модфикаторов элементов).



### 4. БЭМ в HTML-файлах
```html
<nav class="main-nav  main-nav--sticky  main-nav--active">
	<span class="main-nav__burger  main-nav__burger--cross"></span>
	<ul class="main-nav__list  main-nav__list--active">
		<li class="main-nav__item"><a href="#" class="main-nav__link  main-nav__link--active">Главная</a></li>
		<li class="main-nav__item"><a href="#" class="main-nav__link">Каталог</a></li>
		<li class="main-nav__item"><a href="#" class="main-nav__link">Ссылка</a></li>
		<li class="main-nav__item"><a href="#" class="main-nav__link">Ещё какая-то ссылка</a></li>
		<li class="main-nav__item"><a href="#" class="main-nav__link">О нас</a></li>
	</ul>
</nav>
```



### 5. Пример рабочих ситуаций

