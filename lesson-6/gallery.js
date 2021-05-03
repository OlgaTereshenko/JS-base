function openImage(event) {
    console.log(event);

    /* получаем div элемент галерии */
    const gallery = document.getElementsByClassName("gallery")[0];

    /* очищаем галерею */

    gallery.innerHTML = "";

    /* получаем порождающий событие объект */
	const target = event.target;

    /* получаем data-атрибут с номером картинки */
	const seed = target.dataset.seed;

    /* если номер пустой, то прерываем выполнение */
	if (!seed) {
	    return;
    }

    /* создаем картинку */
	const image = document.createElement("img");

    /* добавляем атрибуты к картинке */
    image.id  = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${seed}/400`;
    image.alt = `Изображение ${seed}`;
    image.dataset.seed = seed;
    
    /* добавила проверку на существование картинки по адресу*/ 
    image.addEventListener('error', notLoad);

    /* добавляем новый блок в галерею */
    gallery.appendChild(image);
}

function init() {
    const images = document.querySelectorAll(".thumbnails > img");

    for (let image of images) {
        image.addEventListener('click', openImage);
    }

    // Опеределяем кнопки и добавляем им событие смены картинки
    const buttonRight = document.getElementById("button-right");
    buttonRight.addEventListener('click', nextImage);

    const buttonLeft = document.getElementById("button-left");
    buttonLeft.addEventListener('click', prevImage);
}

function notLoad() {
    alert('Картинка не найдена');
}


function nextImage() {

    const nextImgGallery = document.getElementsByClassName("gallery")[0];

    // Определяем номер текущей картинки
    let seed = nextImgGallery.children[0].dataset.seed;
    
    // Добавляем проверку на количество картинок
    if(seed == 3) {
        seed = 1;
    } else {
        seed++;
    };

    // Очищаем галерею
    nextImgGallery.innerHTML = "";

    // И создаем в галерее новую картинку с атбирутами
    const image = document.createElement("img");
    image.id  = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${seed}/400`;
    image.alt = `Изображение ${seed}`
    image.dataset.seed = seed;
    
    // Делаем проверку на существование картинки по src
    image.addEventListener('error', notLoad);

    nextImgGallery.appendChild(image);
}

// Повторяем все для левой кнопки
function prevImage() {
    const prevImgGallery = document.getElementsByClassName("gallery")[0];
    let seed = prevImgGallery.children[0].dataset.seed;
    
    if(seed == 1) {
        seed = 3;
    } else {
        seed--;
    };

    prevImgGallery.innerHTML = "";
    const image = document.createElement("img");
   
    image.id  = `image-${seed}`;
    image.src = `https://picsum.photos/seed/${seed}/400`;
    image.alt = `Изображение ${seed}`
    image.dataset.seed = seed;
    
    image.addEventListener('error', notLoad);

    prevImgGallery.appendChild(image);
}

window.addEventListener('load', init);
