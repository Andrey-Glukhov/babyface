var sizeFactor = 300;
var testTotal = 100;
var sizeRandomRate = 0.3;
var starList = [
    'john doe-1',
    'john doe-2',
    'john doe-3',
    'john doe-4',
    'john doe-5',
    'john doe-6',
    'john doe-7',
    'john doe-8',
    'john doe-9',
    'john doe-10',
    'john doe-11',
    'john doe-12',
    'john doe-13',
    'john doe-14',
    'john doe-15',
    'john doe-16',
    'john doe-17',
    'john doe-18',
    'john doe-19',
    'john doe-20',
    'john doe-21',
    'john doe-22',
    'john doe-23',
    'john doe-24',
    'john doe-25',
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
var picList = ['Star.svg', 'Star1.svg', 'Star2.svg'];
var picListCount = 0;

function ready() {
    var tmpltElement = document.querySelector('.container-fluid.placeholder_background');
    var excludeElement = document.querySelector('.baby_intro');
    var totalWidth = tmpltElement.clientWidth;
    var totalHeight = tmpltElement.clientHeight;
    var picWidth = excludeElement.clientWidth;
    var picHeight = excludeElement.clientHeight;
    var picTop = excludeElement.offsetTop;
    var picLeft = excludeElement.offsetLeft;
    var cellSize = Math.floor(Math.sqrt((totalHeight * totalWidth - picWidth * picHeight) / sizeFactor));
    // cellSize = cellSize* 0.5 + Math.floor(Math.random() * cellSize);
    var cells = [];
    cells.push({ x: picLeft, y: picTop, x1: picLeft + picWidth, y1: picTop + picHeight, text: '', picSize: 0 });
    var starCount, count, posX, posY, cross;

    for (starCount = 0; starCount < starList.length; starCount++) {
        for (testCount = 0; testCount < testTotal; testCount++) {
            posX = getXPosition();
            posY = getYPosition();
            cross = false;
            var randCellSize = Math.floor(cellSize * (1 - sizeRandomRate) + (Math.random() * cellSize * 2 * sizeRandomRate));
            for (cellCount = 0; cellCount < cells.length; cellCount++) {
                if (intersect(cells[cellCount], { x: posX, y: posY, x1: posX + cellSize, y1: posY + cellSize, text: '', picSize: 0 })) {
                    cross = true;
                    break;
                }

            }
            if (cross == false) {
                cells.push({ x: posX, y: posY, x1: posX + cellSize, y1: posY + cellSize, text: starList[starCount], picSize: randCellSize });
                break;
            } else {

            }

        }



    }
    console.log(cells.length);
    console.log(cells);
    for (cellCount = 1; cellCount < cells.length; cellCount++) {
        var cellElement = document.createElement('div');
        cellElement.className = 'star_cell';
        // console.log('position: absolute; width: ' + cellSize + 'px; height: ' + cellSize + 'px; left: ' + cells[cellCount].x + 'px; top: ' + cells[cellCount].y + 'px; background: url(http://localhost:8888/babyface/wordpress/wp-content/themes/babyface/img/Star.svg)');
        cellElement.style = 'position: absolute; width:' + cells[cellCount].picSize + 'px; height: ' + cells[cellCount].picSize + 'px; left: ' + cells[cellCount].x + 'px; top: ' + cells[cellCount].y + 'px; background: url(http://localhost:8888/babyface/wordpress/wp-content/themes/babyface/img/' + picList[picListCount] + '); background-size: cover; ';
        picListCount = (picListCount + 1) % picList.length;
        cellElement.dataset.toggle = 'tooltip';
        cellElement.setAttribute('title', cells[cellCount].text);
        tmpltElement.append(cellElement);
        //var tipElement = document.createElement('div');
        // tipElement.className = 'cl2';
        // // console.log('position: absolute; width: ' + cellSize + 'px; height: ' + cellSize + 'px; left: ' + cells[cellCount].x + 'px; top: ' + cells[cellCount].y + 'px; background: url(http://localhost:8888/babyface/wordpress/wp-content/themes/babyface/img/Star.svg)');
        // tipElement.style = 'display: none; position: absolute; left: ' + cells[cellCount].x + 'px; top: ' + (cells[cellCount].y + cellSize) + 'px; background: url(http://localhost:8888/babyface/wordpress/wp-content/themes/babyface/img/Star.svg); background-size: cover;';
        // tipElement.innerText = cells[cellCount].text;
        // tmpltElement.append(tipElement);

    }
    var blueAni = new TimelineLite();
    blueAni.staggerTo(".star_cell", 2, { rotation: 360, stagger: 0.2, repeat: -1 }, 1)


    function getXPosition() {
        var x_position = Math.floor(Math.random() * (totalWidth - cellSize));
        return x_position;
    }

    function getYPosition() {
        var y_position = Math.floor(Math.random() * (totalHeight - cellSize));
        return y_position;
    }

    function intersect(a, b) {
        return (
            (
                (
                    (a.x >= b.x && a.x <= b.x1) || (a.x1 >= b.x && a.x1 <= b.x1)
                ) && (
                    (a.y >= b.y && a.y <= b.y1) || (a.y1 >= b.y && a.y1 <= b.y1)
                )
            ) || (
                (
                    (b.x >= a.x && b.x <= a.x1) || (b.x1 >= a.x && b.x1 <= a.x1)
                ) && (
                    (b.y >= a.y && b.y <= a.y1) || (b.y1 >= a.y && b.y1 <= a.y1)
                )
            )
        ) || (
            (
                (
                    (a.x >= b.x && a.x <= b.x1) || (a.x1 >= b.x && a.x1 <= b.x1)
                ) && (
                    (b.y >= a.y && b.y <= a.y1) || (b.y1 >= a.y && b.y1 <= a.y1)
                )
            ) || (
                (
                    (b.x >= a.x && b.x <= a.x1) || (b.x1 >= a.x && b.x1 <= a.x1)
                ) && (
                    (a.y >= b.y && a.y <= b.y1) || (a.y1 >= b.y && a.y1 <= b.y1)
                )
            )
        );
    }
    $('[data-toggle="tooltip"]').tooltip();
}

document.addEventListener("DOMContentLoaded", ready);