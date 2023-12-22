var slider = document.getElementById('slider');
var currentPosition = 0;
var casillaWidth = 50; // Ancho de cada casilla
var isDragging = false;
var startX;
var dragStartPosition;

function moverSlider(direccion) {
    var newPosition = currentPosition + direccion * casillaWidth;

    // Ajusta el rango del slider
    newPosition = Math.max(-(slider.scrollWidth - slider.clientWidth), Math.min(0, newPosition));

    currentPosition = newPosition;
    slider.style.transition = 'transform 0.8s ease';
    slider.style.transform = 'translateX(' + currentPosition + 'px)';
}

slider.addEventListener('mousedown', function (e) {
    isDragging = true;
    startX = e.clientX - slider.offsetLeft;
    dragStartPosition = currentPosition;
    slider.style.transition = 'none';
});

document.addEventListener('mouseup', function () {
    isDragging = false;
    slider.style.transition = 'transform 0.8s ease';
    slider.style.transform = 'translateX(' + currentPosition + 'px)';
});

document.addEventListener('mousemove', function (e) {
    if (isDragging) {
        var x = e.clientX - startX;
        currentPosition = dragStartPosition + x;
        slider.style.transform = 'translateX(' + currentPosition + 'px)';
    }
});

// Restaura la transición al soltar el cursor
slider.addEventListener('transitionend', function () {
    slider.style.transition = 'transform 0.3s ease';
});