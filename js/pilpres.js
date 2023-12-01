const fotoContainer = document.querySelector('.foto-container');
const fotoControlsContainer = document.querySelector('.foto-controls');
const fotoControls = ['previous', 'next'];
const fotoItems = document.querySelectorAll('.foto-item');

class Carousel {

    constructor(container, items, controls){
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];
    }

    updateFoto(){
        this.carouselArray.forEach(el => {
            el.classList.remove('foto-item-1');
            el.classList.remove('foto-item-2');
            el.classList.remove('foto-item-3');
            el.classList.remove('foto-item-4');
            el.classList.remove('foto-item-5');
        });
    

        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`foto-item-${i+1}`);
        });
    }

    setCurrentState(direction){
        if (direction.className == 'foto-controls-previous'){
            this.carouselArray.unshift(this.carouselArray.pop());
        }else{
            this.carouselArray.push(this.carouselArray.shift());
        }
        this.updateFoto();
    }

    setControls(){
        this.carouselControls.forEach(control => {
            fotoControlsContainer.appendChild(document.createElement('button')).className = `foto-controls-${control}`;
            document.querySelector(`.foto-controls-${control}`).innerText = control;
        });
    }

    useControls(){
        const triggers = [...fotoControlsContainer.childNodes];
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

const exampleCarousel = new Carousel(fotoContainer, fotoItems, fotoControls);

exampleCarousel.setControls();
exampleCarousel.useControls();
