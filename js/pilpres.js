const swiperContainers = document.querySelectorAll('.swiper-container');

      swiperContainers.forEach((container, index) => {
        const accordionContainer = document.getElementById(`accordion-container-${index + 1}`);
        const descriptionElements = accordionContainer.querySelectorAll('.slide-description');
        const accordionContent = accordionContainer.querySelector('.accordion-content');

        const swiper = new Swiper(container, {
          effect: 'cards',
          pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true,
          },
          spaceBetween: 20,
          loop: true, 
          on: {
            slideChange: function () {
              const activeSlideIndex = this.realIndex;

              descriptionElements.forEach(element => {
                element.classList.remove('active');
              });

              accordionContent.querySelector(`[data-slide-index="${activeSlideIndex}"]`).classList.add('active');
            },
          },
        });
      });