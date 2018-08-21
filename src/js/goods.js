
var curentRating = document.getElementById('curent-rating')
var dropDownCategory = document.getElementsByClassName('rating-categoryes')[0];
var selectedItem = document.getElementById('selected-item');
var priceRange = document.getElementById('price-range');


curentRating.onclick = function() {
    dropDownCategory.classList.toggle('on-dropDown');
}

dropDownCategory.onclick = function(e) {
    var target = e.target;
    if ( target.id == 'rating-categoryes-item' ) {
        selectedItem.innerHTML= target.innerText;
    } else{
        return;
    }
}

// --------------------Input Range
var minPrice = document.getElementById('min-price');
var maxPrice = document.getElementById('max-price');

var filterButton = document.getElementsByClassName('filter-button')[0];
var aside = document.getElementsByTagName('aside')[0];
var closeFilterBlockBut = document.getElementsByClassName('close-button')[1];

closeFilterBlockBut.onclick = () => {
    shadeOff();
        aside.classList.remove('active-aside');
}
filterButton.onclick = () => {
    if ( aside.classList.length ==  0 ) {
        shadeOn();
        aside.classList.add('active-aside');
    } else {
        return;
    }
}

//--------------------filter toogle




//---------------------Price range
var slider = document.getElementsByClassName('slider-range-container')[0];

noUiSlider.create(slider, {
	start: [150, 550],
	connect: true,
	range: {
		'min': 0,
		'max': 1000
	}
});

slider.noUiSlider.on('update', function( values) {
	minPrice.value = parseInt(values[0]);
});
slider.noUiSlider.on('update', function( values) {
	maxPrice.value = parseInt(values[1]);
});

minPrice.addEventListener('change', function(){
	slider.noUiSlider.set([this.value, null]);
});

maxPrice.addEventListener('change', function(){
	slider.noUiSlider.set([null, this.value]);
});



var sorting = document.getElementsByClassName('sorting')[0];
var selectedSort = document.getElementsByClassName('selected-sort')[0];
var deleteFilter = document.getElementsByClassName('delete-selected-sort-item')[0];

var arr = [];
var render = true;


sorting.onclick = event => {
    var target = event.target;
    var actualEl = target.nextElementSibling;
    var pointer = target.lastElementChild;
    if ( target.id == 'sort-block') {
        actualEl.classList.toggle('sort-block-active');
        pointer.classList.toggle('pointer-range');
    }


    //-------------Добавляю/удаляю фильтр в блок------
    if ( target.getAttribute('added')) {
            var index = arr.indexOf(target.name);
            if (!(index + 1)) {
                render = true;
            } else {
                render = false;
                arr.splice(index, 1)
            }
        if (  render == true ) {
            var newDiv = document.createElement('div');
            newDiv.id = target.name;
            newDiv.innerHTML = `<span>${target.name}</span><a class="delete-selected-sort-item"></a>`;
            selectedSort.appendChild(newDiv)
            arr.push(target.name);
            target.checked = true;
        } else {
            for ( var i = 0; i < selectedSort.children.length; i++){
                if ( selectedSort.children[i].id == target.name) {
                    var remoove = selectedSort.childNodes[i];
                    remoove.remove();
                    target.checked = false;
                    return;
                }
            }
        }
    }

    if ( target.classList.contains('delete-selected-sort-item')) {
        var curentElId = target.parentNode;
        if ( !(index + 1) ) {
            render = true;
            
            arr.splice(index, 1)
            document.getElementsByName(curentElId.id)[0].checked = false;
            curentElId.remove();
        }
    }
}


//--------Показать by-goods блок
var wrapperForGoods = document.getElementsByClassName('wrapper-for-goods')[0];
var byGoods = document.getElementsByClassName('by-goods');

wrapperForGoods.onclick =  event => {
    target = event.target;
    if (target.classList.contains('fond')){
        if ( miniCart[0] != undefined ){
            miniCart[0].remove();
            allprice = 0;
        } else {
            if ( miniCartEmpty[0] != undefined){
                miniCartEmpty[0].remove();
            }
        }
        for ( var i = 0; i < byGoods.length; i++) {
            byGoods[i].classList.remove('by-goods-visible');
        }
        var curentEl = target.parentElement.parentElement.children[2];
        curentEl.classList.toggle('by-goods-visible')
    }

    //-------Оценка
    setRateGoods();

    //---Добавление в корзину
    checkCart();
    addToCart();
}



