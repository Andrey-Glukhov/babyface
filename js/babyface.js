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
var scroller;
//var controller

function ready() {

    var tmpltElement = document.querySelector('.container-fluid.placeholder_background');
    if (tmpltElement) {
        var excludeElement = document.querySelector('.baby_intro');
        var totalWidth = tmpltElement.clientWidth;
        var totalHeight = tmpltElement.clientHeight;
        var picWidth = excludeElement.clientWidth;
        var picHeight = excludeElement.clientHeight;
        var picTop = excludeElement.offsetTop;
        var picLeft = excludeElement.offsetLeft;
        var cellSize = Math.floor(Math.sqrt((totalHeight * totalWidth - picWidth * picHeight) / sizeFactor));
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
        // console.log(cells.length);
        // console.log(cells);
        for (cellCount = 1; cellCount < cells.length; cellCount++) {
            var cellElement = document.createElement('div');
            cellElement.className = 'star_cell';
            // console.log('position: absolute; width: ' + cellSize + 'px; height: ' + cellSize + 'px; left: ' + cells[cellCount].x + 'px; top: ' + cells[cellCount].y + 'px; background: url(http://localhost:8888/babyface/wordpress/wp-content/themes/babyface/img/Star.svg)');
            cellElement.style = 'position: absolute; width:' + cells[cellCount].picSize + 'px; height: ' + cells[cellCount].picSize + 'px; left: ' + cells[cellCount].x + 'px; top: ' + cells[cellCount].y + 'px; background: url(http://localhost:8888/babyface/wordpress/wp-content/themes/babyface/img/' + picList[picListCount] + '); background-size: cover; ';
            picListCount = (picListCount + 1) % picList.length;
            cellElement.dataset.toggle = 'tooltip';
            cellElement.setAttribute('title', cells[cellCount].text);
            tmpltElement.append(cellElement);

        }
        var blueAni = new TimelineLite();
        blueAni.staggerTo(".star_cell", 2, { rotation: 360, stagger: 0.2, repeat: -1 }, 1)


    }
    if (document.querySelector('#accordion')) {
        var activeItem;
        //$("#accordion li:first")[0];
        //$(activeItem).addClass('active');

        //$.jInvertScroll(['#accordion']);
        // scroller = new SweetScroll({
        //     trigger: '#accordion li',
        //     vertical: false, // Enable the vertical scroll
        //     horizontal: true // Enable the horizontal scroll
        // });

        //controller = new ScrollMagic.Controller({ vertical: false });
        $('html, body').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 25);
            // e.preventDefault();
        });

        $("#accordion li").click(function() {
            if (activeItem == this) {
                var preWidth;
                if (activeItem.clientWidth >= 400) {
                    preWidth = $('#accordion').width();
                }
                $(activeItem).animate({ width: "50px" }, { duration: 300, queue: false });
                activeItem = '';
                if (preWidth) {
                    $('#accordion').css('width', (preWidth - 400) + 'px');
                }
                return;
            }
            if ((activeItem && activeItem.clientWidth < 400) || !activeItem) {
                var preWidth = $('#accordion').width();
                $('#accordion').css('width', (preWidth + 400) + 'px');
            }
            $(activeItem).animate({ width: "50px" }, { duration: 300, queue: false });
            $(this).animate({ width: "450px" }, { duration: 300, queue: false });
            activeItem = this;
        });
    }
    if ($('.about_wrapper').length) {
        // var frm = document.getElementsByTagName('iframe')[1];
        // frm.onload = function() {
        //     //var frm1 = document.getElementsByTagName('iframe')[1];
        //     var otherdoc = frm.contentWindow.document;
        //     var otherhead = otherdoc.getElementsByTagName("head")[0];
        //     var link = otherdoc.createElement("link");
        //     link.setAttribute("rel", "stylesheet");
        //     link.setAttribute("type", "text/css");
        //     link.setAttribute("href", "http://localhost:8888/babyface/wordpress/wp-content/themes/babyface/css/embed.css");
        //     otherhead.appendChild(link);
        // }
    }

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

}

document.addEventListener("DOMContentLoaded", ready);