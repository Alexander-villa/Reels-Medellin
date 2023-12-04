const ul = document.querySelector('.number_pag');
let allPages = 7;

function elem(allPages, page){
    let li = '';

    let beforePages = page - 1;
    let afterPages = page + 1;
    let liActive;

    if(page > 1){
        li += `<a href="#" onclick="elem(allPages, ${page-1})">&laquo;</a>`;
    }

    for (let pageLength = beforePages; pageLength <= afterPages; pageLength++){

        if(pageLength > allPages){
            continue;
        }
        if(pageLength == 0){
            pageLength = pageLength + 1;
        }

        if(page == pageLength){
            liActive = 'active';
        }else{
            liActive = '';
        }

        li += `<a href="" class="active${Active}" onclick="elem(allPages, ${pageLength})" >${pageLength}</a>`
    }

    if(page < allPages){
        li += `<a href="#" onclick="elem(allPages, ${page+1})" >&raquo;</a>`;
    }

    ul.innerHTML = li;
}
elem(allPages, 2);

//DESLIZADOR

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carousel');
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;

    carousel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startPos = e.clientX;
      currentTranslate = getTranslateX();
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - startPos;
        const translate = currentTranslate + deltaX;
        setTranslateX(translate);
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    function getTranslateX() {
      const style = window.getComputedStyle(carousel);
      const matrix = new WebKitCSSMatrix(style.transform || style.webkitTransform);
      return matrix.m41;
    }

    function setTranslateX(translate) {
      carousel.style.transform = `translateX(${translate}px)`;
    }
  });