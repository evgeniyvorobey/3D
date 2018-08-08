var addProduct = document.getElementById('add-product');
var fromPurchased = document.getElementById('from-purchased');
var convertationFileLocation = document.getElementsByClassName('convertation-file-location')[0];
var plus = document.getElementsByClassName('plus')[0];
var windowIco = document.getElementsByClassName('window')[0];
var addDropedFile = document.getElementById('add-droped-file');
var purchasedBlock = document.getElementsByClassName('from-purchased-block')[0];

function toggleBlock() {
    addDropedFile.classList.toggle('visible');
    purchasedBlock.classList.toggle('visible');
}

addProduct.onclick = function() {
    remooveActiveClass();
    addProduct.classList.toggle('file-location-button-active');
    for ( var i = 0; i < plus.children.length; i++ ) {
        plus.children[i].classList.add('plus-active');
    }
    toggleBlock();
}

fromPurchased.onclick = function() {
    remooveActiveClass();
    fromPurchased.classList.add('file-location-button-active');
    for ( var i = 0; i < plus.children.length; i++ ) {
        windowIco.children[i].classList.add('window-active');
    }
    toggleBlock();
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



var dropZone = document.getElementById('drop-zone');
// dropZone.addEventListener('dragenter', handlerFunction, false);
// dropZone.addEventListener('dragleave', handlerFunction, false);
// dropZone.addEventListener('dragover', handlerFunction, false);
// dropZone.addEventListener('drop', handlerFunction, false);

// Обработчики событий над областью drag
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
    files.forEach(uploadFile)
    files.forEach(previewFile)
    arr += files.map(function(item, i, filter){
        arr[item]
        // console.log(arr)
    })
}
