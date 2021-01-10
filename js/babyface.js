var sizeFactor = 120;
var sartList = [
    'john doe-1',
    'john doe-2',
    'john doe-3',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1',
    'john doe-1'
];

function ready() {
    var tmpltElement = document.querySelector('.template');
    var excludeElement = document.querySelector('.textblock');
    var picWidth = tmpltElement.clientWidth;
    var picHeight = tmpltElement.clientHeight;
    var plSize = Math.floor(Math.sqrt(picHeight * picWidth / sizeFactor));


}

document.addEventListener("DOMContentLoaded", ready);