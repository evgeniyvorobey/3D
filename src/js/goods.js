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
var priceRangeMin = document.getElementById('min-price-range');
var priceRangeMax = document.getElementById('max-price-range');

watchInputMinPrice = () => {
    if ( minPrice.value > maxPrice.value ) {
        maxPrice.value = minPrice.value;
        priceRangeMax.value = priceRangeMin.value;
    }
    priceRangeMin.value = minPrice.value;
}
watchInputMaxPrice = () => {
    if ( maxPrice.value > minPrice.value ) {
        minPrice.value = maxPrice.value
        priceRangeMin.value = priceRangeMax.value;
    }
    priceRangeMax.value = maxPrice.value;
}
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

minPriseF = () => {
    watchInputMinPrice();
}

maxPriseF = () => {
    watchInputMaxPrice();
}
priceRangeMin.oninput = () => {
    if ( priceRangeMin.value > priceRangeMax.value ) {
        priceRangeMax.value = priceRangeMin.value;
        maxPrice.value = minPrice.value;
    }
    minPrice.value = priceRangeMin.value;
    
}

priceRangeMax.oninput = () => {
    if ( priceRangeMax.value < priceRangeMin.value ) {
        priceRangeMin.value = priceRangeMax.value;
        minPrice.value = maxPrice.value;
    }
    maxPrice.value = priceRangeMax.value;
}

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
            if (!(index+1)) {
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
            target.setAttribute("checked", "checked")
        } else {
            for ( var i = 0; i < selectedSort.children.length; i++){
                if ( selectedSort.children[i].id == target.name) {
                    var remoove = selectedSort.childNodes[i];
                    remoove.remove();
                    return;
                }
            }
        }
    }

    if ( target.classList.contains('delete-selected-sort-item')) {
        var curentElId = target.parentNode;
        if ( !(index+1) ) {
            render = true;
            arr.splice(index, 1)
            curentElId.remove();
        }
    }
}

// var wrapperForGoods = document.getElementsByClassName('wrapper-for-goods');

// wrapperForGoods.onclick =  event => {
//     target = event.target;

// }