const imageOne = document.querySelector('.one');
const imageTwo = document.querySelector('.two');
const imageThree = document.querySelector('.three');
const imageFour = document.querySelector('.four');
const imageFive = document.querySelector('.five');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const sliders = document.querySelectorAll('.img-slider');
const container = document.querySelector('.container');
const closeZoom = document.querySelector('.closeBtn');
const overlay = document.querySelector('#overlay');
const imgsliders = document.querySelectorAll('.img-slider');
const btnSlider = document.querySelector('.slider');



var i = 5;
var mouseIn = false;


// Slider
function goNext(e) {
    e.stopPropagation();
    if (i >= Array.from(sliders).length) {
        i = 0;
    };

    if (i !== 0) {
        Array.from(sliders)[i].style.zIndex = 1;
        Array.from(sliders)[i - 1].style.zIndex = 0;
    } else {
        Array.from(sliders)[i].style.zIndex = 1;
        Array.from(sliders)[Array.from(sliders).length - 1].style.zIndex = 0;
    }
    i++;
}

function goPrevious(e) {
    e.stopPropagation();
    i--;
    if (i < 0) {
        i = Array.from(sliders).length - 1;
    };

    if (i > 0) {
        Array.from(sliders)[i - 1].style.zIndex = 1;
        Array.from(sliders)[i].style.zIndex = 0;
    } else if (i === 0) {
        Array.from(sliders)[i].style.zIndex = 0;
        Array.from(sliders)[Array.from(sliders).length - 1].style.zIndex = 1;
    }

}

nextBtn.addEventListener('click', goNext);
prevBtn.addEventListener('click', goPrevious);
nextBtn.addEventListener('touchend', goNext);
prevBtn.addEventListener('touchend', goPrevious);


//Adding functionality for arrow keys
container.addEventListener('mouseenter', () => { mouseIn = true });
container.addEventListener('mouseleave', () => { mouseIn = false });

function keyboardSlider(key) {
    if (mouseIn === true) {
        switch (key.keyCode) {
            case 39:
                goNext(key);
                break;
            case 37:
                goPrevious(key);
                break;
        }
    }
}

document.addEventListener('keydown', keyboardSlider);



//Adding the zoom mode
container.addEventListener('click', (e) => {
    imgsliders.forEach(slider => { slider.classList.add('bigWidth') });
    container.classList.add('zoomIn');
    container.classList.remove('removeClass');
    overlay.classList.add('overlay');
    overlay.classList.remove('disNone');
    closeZoom.id = 'zoomIn';
    closeZoom.classList.remove('closeZoom');
    btnSlider.classList.add('bigBtnSlider');
});


function closeWindow() {
    container.classList.remove('zoomIn');
    container.classList.add('removeClass');
    overlay.classList.remove('overlay');
    overlay.classList.add('disNone');
    closeZoom.id = '';
    closeZoom.classList.add('closeZoom');
    imgsliders.forEach(slider => { slider.classList.remove('bigWidth') });
    btnSlider.classList.remove('bigBtnSlider');
};


closeZoom.addEventListener('click', closeWindow);

function closeOnEsc(e) {
    if (e.keyCode === 27) {
        closeWindow();
    }
}

document.addEventListener('keydown', closeOnEsc);