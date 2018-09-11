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
