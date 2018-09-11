
var startDate = '';
var finishDate = '';
var operationType = '';


$('input[name="startDate"]').daterangepicker( {
    "startDate": "09.01.2018",
    "endDate": "09.07.2018"
}, function(start, end) {
    startDate = start.format('YYYY-MM-DD');
    finishDate = end.format('YYYY-MM-DD');
    console.log(start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
});

var balanceHistoryButton = document.getElementsByClassName('balance-history-button')[0];
var balanceHistoryFilter = document.getElementsByClassName('balance-history-filter')[0];
var arrow = document.getElementsByClassName('arrow-span')[0];

var operationTypeFilter = document.getElementsByClassName('operation-type')[0];
var filterType = document.getElementsByClassName('filter-type')[0];
var arrowSpan = document.getElementsByClassName('span-arow')[0]

balanceHistoryButton.onclick = () => {
    filterType.classList.remove('filter-type-active');
    arrowSpan.classList.remove('span-arow-rotate');
    arrow.classList.toggle('arrow-span-rotate');
    balanceHistoryFilter.classList.toggle('balance-history-filter-active');
}

operationTypeFilter.onclick = () => {
    filterType.classList.toggle('filter-type-active');
    arrowSpan.classList.toggle('span-arow-rotate');
}

var currnetFilter = document.getElementsByClassName('current-filter-type')[0];

filterType.onclick = e =>{
    var t = e.target;
    if (t.classList.contains('filter-type-item')) {
        currnetFilter.id = t.id;
        currnetFilter.innerHTML = t.innerHTML;
        getFilter()
    }
}

var selectedFilter = [];

var date = document.getElementById('date');


parse = () => {
    var str = '';
    for ( var key in selectedFilter) {
        console.log(key)
        str += `ProductSearch[${key}]=${selectedFilter[key]}&`;
        str = str;
    }
    window.location.search = str.substring(0, str.length -1);
}
getFilter = () => {
    if (finishDate.length > 0){
        selectedFilter['starDateSearch'] = startDate;
        selectedFilter['finishDateSearch'] = finishDate;    
    }
    selectedFilter['typeOperation'] = currnetFilter.id;
    parse();
}

date.onchange = () => {
    getFilter();
}




var wrapperForPurchases = document.getElementsByClassName('wrapper-for-purchases')[0];
var buttonContainer = document.getElementsByClassName('block-for-button')[0];
var abortButton = document.getElementsByClassName('abort-button')[0];
var submitButton = document.getElementsByClassName('submit-button')[0];
var returnGoods = document.getElementsByClassName('return-goods')[0];



function deactivate() {
    var count = wrapperForPurchases.children.length - 1;
    for ( var i = 0; i < count; i++ ) {
        wrapperForPurchases.children[i + 1].classList.remove('active');
    }
}


buttonContainer.onclick = e => {
    target = e.target;
    if (target.classList.contains('button-style')) {
        for ( var i = 0; i< target.parentElement.children.length; i++ ) {
            target.parentElement.children[i].classList.remove('style-active-button');
            deactivate();
            delButton();
        }
        var targetChildren = document.getElementsByClassName(target.value)[0];
        targetChildren.classList.add('active');
        target.classList.add('style-active-button');
    }
}


var abortButton = document.getElementsByClassName('abort-button')[0];
var createRequest = document.getElementsByClassName('create-request')[0];
var returnToList = document.getElementsByClassName('return-to-list')[0];
var buttonContainer = document.getElementsByClassName('under-line-button')[0];
var refoundRequest = document.getElementsByClassName('description-for-refound-request')[0];
var returnToChoice = document.getElementsByClassName('return-to-choice')[0];
var selectRequestType = document.getElementsByClassName('select-request-type')[0];

function delButton() {
    for( var i = 0; i < buttonContainer.children.length; i++) {
        buttonContainer.children[i].classList.remove('active');
    }
}

createRequest.onclick = function() {
    var targetParent = this.parentNode.parentNode;
    var targetChildren = document.getElementsByClassName(this.value)[0];
    targetParent.classList.remove('active');
    targetChildren.classList.add('active');
    abortButton.classList.add('active');
}

abortButton.onclick =  function() {
    returnGoods.classList.remove('active');
    refoundRequest.classList.remove('active');
    document.getElementsByClassName('request-history')[0].classList.add('active');
    delButton();
}
returnToChoice.onclick = function() {
    var targetParent = this.parentNode.parentNode;
    targetParent.classList.remove('active');
    document.getElementsByClassName('request-history')[0].classList.add('active');
    delButton();
}
returnToList.onclick = function() {
    var targetParent = this.parentNode.parentNode;
    targetParent.classList.remove('active');
    document.getElementsByClassName('request-history')[0].classList.add('active');
    delButton();
}
var dropTypeList = document.getElementsByClassName('drop-down-current-type-list')[0];
var spanArowType = document.getElementsByClassName('span-arow-type')[0];
var currentType = document.getElementsByClassName('current-type')[0];
var textAr = document.getElementsByTagName('textarea');

returnGoods.onclick = e =>{
    var target = e.target;
    if ( target.classList.contains('download-purchased-button') ) {
        deactivate();
        refoundRequest.classList.add('active');
        submitButton.classList.add('active')
    }
}
selectRequestType.onclick = e =>{
    var target = e.target;
    dropTypeList.classList.toggle('active');
    spanArowType.classList.toggle('span-arow-rotate')
    if (target.classList.contains('current-type-list-item')) {
        currentType.innerHTML = target.innerHTML;
    }
}
var requestArr = [];

submitButton.onclick = function() {
    requestArr['requestType'] = currentType.innerHTML;
    requestArr['requestText'] = textAr[0].value;
    console.log(requestArr)
}
