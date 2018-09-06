
var selectedFilter = document.getElementsByClassName('selected-item')[0];
var priceRange = document.getElementById('price-range');





// --------------------Input Range
var minPrice = document.getElementById('min-price');
var maxPrice = document.getElementById('max-price');
var selectSort = document.getElementById('sort');

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

var curentRating = document.getElementById('curent-rating');
var ratingCategoryes = document.getElementsByClassName('rating-categoryes')[0];
var dropDownCategory = document.getElementsByClassName('rating-categoryes')[0];

curentRating.onclick = function() {
    dropDownCategory.classList.toggle('on-dropDown');
}

ratingCategoryes.onclick = function(e) {
    var target = e.target;
    if (target.classList.contains('rating-categoryes-item')) {
        selectedFilter.innerHTML = target.innerText;
        selectedFilter.id = target.id;
        
        addMaxPrice();
        addFormats();
        addRating();
        addArtist();
        selectedItem['sort'] = selectedFilter.id;
        parse();

    } else {
        return;
    }
}

var submitAll = document.getElementById('submit-all');

submitAll.onclick = function() {
    addMaxPrice();
    addFormats();
    addRating();
    addArtist();
    selectedItem['sort'] = selectedFilter.id;
    parse();
}


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

var serchChange = document.getElementsByClassName('wrapper-for-goods-and-aside')[0];
var selectedItem = {};
var rating = {};
var ratingStr = '';
var formatsStr = '';
var artistStr = '';



//   Добавляю минимальную и максимальную цену
function addMaxPrice() {
    // Удаляю минимальную и максимальную цену
    delete selectedItem['price_min'];
    delete selectedItem['price_max'];
    //   Добавляю минимальную и максимальную цену
    selectedItem['price_min'] = minPrice.value;
    selectedItem['price_max'] = maxPrice.value;
}

var formats = document.getElementsByClassName('sorting-formats')[0];

//   Добавляю формат
function addFormats() {
    formatsStr = '';
    for ( var i = 0; i < formats.children.length; i++) {
        if (formats.children[i].children[0].checked == true) {
            formatsStr +=`${formats.children[i].children[0].id},`;
        }
    }
    formatsStr = formatsStr.substring(0, formatsStr.length - 1);
    delete selectedItem['formats'];
    selectedItem['formats'] = formatsStr;
}
var rating = document.getElementsByClassName('sort-rating')[0];

//   Добавляю рейтинг
function addRating() {
    ratingStr = '';
    for ( var i = 0; i < rating.children.length; i++) {
        if (rating.children[i].children[0].checked == true) {
            ratingStr +=`${rating.children[i].children[0].value},`;
        }
    }
    ratingStr = ratingStr.substring(0, ratingStr.length - 1);
    delete selectedItem['stars'];
    selectedItem['stars'] = ratingStr;
}

var artist = document.getElementsByClassName('sort-artist')[0];

//   Добавляю формат
function addArtist() {
    artistStr = '';
    for ( var i = 0; i < artist.children.length; i++) {
        if (artist.children[i].children[0].checked == true) {
            artistStr +=`${artist.children[i].children[0].value},`;
        }
    }
    artistStr = artistStr.substring(0, artistStr.length - 1);
    delete selectedItem['artists'];
    selectedItem['artists'] = artistStr;
}

function parse() {
    var str = '';
    for ( var key in selectedItem) {
        str += `productSearch[${key}]=${selectedItem[key]}&`;
        str = str;
    }
    window.location.search = str.substring(0, str.length -1);
}


sorting.onchange = function() {
    addMaxPrice();
    addFormats();
    addRating();
    addArtist();
    selectedItem['sort'] = selectedFilter.id;
    // parse();
}


sorting.onclick = event => {
    var target = event.target;
    var actualEl = target.nextElementSibling;
    var pointer = target.lastElementChild;
    if ( target.id == 'sort-block') {
        actualEl.classList.toggle('sort-block-active');
        pointer.classList.toggle('pointer-range');
    }


    
    //-------------Добавляю/удаляю фильтр в блок------
    // if ( target.getAttribute('added')) {
    //         var index = arr.indexOf(target.id);
    //         if (!(index + 1)) {
    //             render = true;
    //         } else {
    //             render = false;
    //             arr.splice(index, 1)
    //         }
    //     if (  render == true ) {
    //         var newDiv = document.createElement('div');
    //         newDiv.id = target.id;
    //         newDiv.innerHTML = `<span>${target.id}</span><a class="delete-selected-sort-item"></a>`;
    //         selectedSort.appendChild(newDiv)
    //         arr.push(target.id);
    //         target.checked = true;
    //     } else {
    //         for ( var i = 0; i < selectedSort.children.length; i++){
    //             if ( selectedSort.children[i].id == target.id) {
    //                 var remoove = selectedSort.childNodes[i];
    //                 remoove.remove();
    //                 target.checked = false;
    //                 return;
    //             }
    //         }
    //     }
    // }

    if ( target.classList.contains('delete-selected-sort-item')) {
        var targetId = target.name;
        var targetInput = sorting.getElementById(targetId);
        var curentElId = target.parentNode;
        curentElId.remove();
        targetInput.checked = false;
        if ( target.name == 'price') {
            curentElId.remove();
            maxPrice.value =  max;
            minPrice.value = min;
        }
    //     if ( !( index + 1 ) ) {
    //         render = true;
            
    //         arr.splice(index, 1)
    //         document.getElementsByName(curentElId.id)[0].checked = false;
    //     }
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

    // //-------Оценка
    // setRateGoods();

    //---Добавление в корзину
    checkCart();
    addToCart();
}



