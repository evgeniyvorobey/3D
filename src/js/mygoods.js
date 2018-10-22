var goodsFilterShow = document.getElementsByClassName('my-goods-filter-show')[0];
var blockWithFilter = document.getElementsByClassName('my-goods-body-top-filter')[0];

goodsFilterShow.onclick = function() {
    var arrow = document.getElementsByClassName('filter-show-arrow')[0];
    blockWithFilter.classList.toggle('active-block');
    arrow.classList.toggle('arrow-active');
}

var activeFilterBlock = document.getElementsByClassName('active-filter')[0];

function isFilter() {
    if ( activeFilterBlock.children.length == 0 ){
        activeFilterBlock.style.display = 'none';
    }
}

activeFilterBlock.onclick = e => {
    var target = e.target;
    if ( target.classList.contains('delete-this-filter')) {
        var remove = target.parentNode;
        remove.remove();
        isFilter();
    }
}
var container = document.querySelector('.my-goods-body-item-wrapper');
var itemShade = document.querySelector('.shade-for-item');

function clearAllitemShade() {
    var allItemShade = document.querySelectorAll('.shade-for-item');
    for ( var i = 0; i < allItemShade.length; i++) {
        allItemShade[i].classList.remove('shade-for-item-active');
    }
}
function clearAllItemAction() {
    var allContainer = document.querySelectorAll('.wrapper-description-actions-item');
    console.log(allContainer)
    for ( var i = 0; i < allContainer.length; i++) {
        allContainer[i].classList.remove('description-actions-item-on')
    }
}
container.onclick = function(e) {
    var target = e.target
    if (document.body.offsetWidth <= 768) {
        if (target.classList.contains('my-item')) {
            var itemShade = target.children[0];
            var last = parseInt(target.children.length);
            clearAllitemShade();
            clearAllItemAction();
            itemShade.classList.toggle('shade-for-item-active');
            target.children[last-1].classList.toggle('description-actions-item-on')
        }
        if ( target.classList.contains('shade-for-item')){
            clearAllitemShade();
            clearAllItemAction();
        }
    }
}

var uploadModel = document.querySelector('.upload-3d-model');

var myGoods = document.querySelector('.my-goods')
var pagesButton = document.querySelector('.pages-button')
uploadModel.onclick = () => {
    myGoods.classList.add('clear-block');
    pagesButton.classList.add('clear-block');
}