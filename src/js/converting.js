var addProduct = document.getElementById('add-product');
var fromPurchased = document.getElementById('from-purchased');
var convertationFileLocation = document.getElementsByClassName('convertation-file-location')[0];
var plus = document.getElementsByClassName('plus')[0];
var windowIco = document.getElementsByClassName('window')[0];
var addDropedFile = document.getElementById('add-droped-file');
var purchasedBlock = document.getElementsByClassName('from-purchased-block')[0];
var priceTitle = document.getElementById('price-request-title');
var requestButtonPosition = document.getElementsByClassName('price-request')[0];
var fromPurchasedButton = document.getElementById('from-purchased-button');
var closePurchasedBlock = document.getElementById('close-purchased-block');
var blockWithPurchasedItem = document.getElementsByClassName('purchased-item')[0];


addProduct.onclick = function() {
    remooveActiveClass();
    addProduct.classList.toggle('file-location-button-active');
    for ( var i = 0; i < plus.children.length; i++ ) {
        plus.children[i].classList.add('plus-active');
    }
    priceTitle.style.display = 'flex';
    requestButtonPosition.style.justifyContent = 'space-between';
    
    addDropedFile.classList.add('visible');
    purchasedBlock.classList.remove('visible');

}

fromPurchased.onclick = function() {
    remooveActiveClass();
    fromPurchased.classList.add('file-location-button-active');
    for ( var i = 0; i < plus.children.length; i++ ) {
        windowIco.children[i].classList.add('window-active');
    }
    priceTitle.style.display = 'none';
    requestButtonPosition.style.justifyContent = 'flex-end';

    addDropedFile.classList.remove('visible');
    purchasedBlock.classList.add('visible');


}

function remooveActiveClass() {
    var numberElement = convertationFileLocation.children.length;
    for ( var i = 0; i < numberElement; i++) {
        convertationFileLocation.children[i].classList.remove('file-location-button-active');
    }
    for ( var i = 0; i < plus.children.length; i++ ) {
        plus.children[i].classList.remove('plus-active');
        windowIco.children[i].classList.remove('window-active');
    }
}



fromPurchasedButton.onclick = function() {
    shadeOn();
    blockWithPurchasedItem.classList.add('purchased-item-active');
}

closePurchasedBlock.onclick = function() {
    shadeOff();
    blockWithPurchasedItem.classList.remove('purchased-item-active');
}

// mouse event

// var purchasedItemBlock = document.getElementsByClassName('purchased-item-block')[0];

// var currentElement = null;

// purchasedItemBlock.onmouseover = function(e) {
//     if (currentElement) {
//         return;
//     }
//     target = e.target;
// console.log(this)
//     while ( target != this) {
//         if (target.id == 'mouse-on' )break;
//             target = target.parrentNode;
//     }
//     if ( target == this ) return;
    
//     currentElement = target;
//     target.classList.add('active-mouse-on');
//     target.children[0].classList.add('add-to-convertation')
// };

// purchasedItemBlock.onmouseout = function(e) {
//     if (!currentElement) return;

//     var relatedTarget = event.relatedTarget;
//     if (relatedTarget) {
//         while (relatedTarget) {
//             if (relatedTarget == currentElement) return;
//             relatedTarget = relatedTarget.parrentNode;
//         }
//     }

//     currentElement.classList.remove('active-mouse-on');
//     currentElement.children[0].classList.remove('add-to-convertation')
//     currentElement = null;
// }

var purchasedItemBlock = document.getElementsByClassName('purchased-item-block')[0];


var addToConvertation = document.getElementById('add-to-convertation');
var deleteButton = document.getElementById('delete-from-convertation');


purchasedItemBlock.onclick = function(e) {
    var addMyElemrntToConverting = document.getElementById('add-my-elemrnt-to-converting');

    var target = e.target; 
    if ( target.id == 'add-to-convertation' ){
        var elSrc = target.parentNode.parentNode.children[0].currentSrc;
        target.classList.remove('active-button-for-select-item');
        target.nextElementSibling.classList.add('active-button-for-select-item');
        target.parentNode.nextElementSibling.classList.add('active-button-for-select-item');
        target.parentNode.parentNode.parentNode.id = 'add';
        purchasedBlock.innerHTML += `<div class="preconvering-item">
                                        <img src="${elSrc}" alt="">
                                    </div>`
    } else if ( target.id == 'delete-from-convertation' ) {
        target.classList.remove('active-button-for-select-item');
        target.previousElementSibling.classList.add('active-button-for-select-item');
        target.parentNode.nextElementSibling.classList.remove('active-button-for-select-item');
        target.parentNode.parentNode.parentNode.id = '';
    } else {
        return;
    }
    var sum = 0;
    for ( var i = 0; i < purchasedItemBlock.children.length; i++) {
        if (purchasedItemBlock.children[i].id == 'add') {
            sum += 1;
        }
    }

    if (sum > 0) {
        addMyElemrntToConverting.classList.add('active-button-for-select-item');
        
    } else {
        addMyElemrntToConverting.classList.remove('active-button-for-select-item');
        return;
    }
}




addToConvertation.onclick = function() {
    addToConvertation.classList.remove('active-button-for-select-item');
    deleteButton.classList.add('active-button-for-select-item');
}










var dropZone = document.getElementById('drop-zone');

// Обработчики событий над областью drop
['dragenter','dragover','dragleave','drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false)
})
function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
}

['dragenter','dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false)
});

['dragleave','drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false)
});

function highlight() {
    dropZone.classList.add('highlight');
}
function unhighlight() {
    dropZone.classList.remove('highlight');
}

dropZone.addEventListener('drop', handleDrop, false)
var arr = {};
function handleDrop(e) {
    var dt = e.dataTransfer
    var files = dt.files
    console.log(files)

    handleFiles(files)
}
function handleFiles(files) {
    ([...files]).forEach(uploadFile)
}


// ---------------отправка на сервер
function uploadFile(file) {
    var url = 'https://api.cloudinary.com/v1_1/YOU/image/upload';
    var formData = new FormData();

    formData.append('file', file)

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(function(respons) {
        console.log(respons.status)
    })
    .catch(function() {
        console.log('fail')
    })
}
// ---------------рендер на странице
function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
    let img = document.createElement('img')
    img.src = reader.result
    addDropedFile.appendChild(img)
    }
}

function handleFiles(files) {
    files = [...files]
    // files.forEach(uploadFile)
    files.forEach(previewFile)

}
