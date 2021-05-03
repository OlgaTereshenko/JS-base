
    function addToCart(event){
        const productList = document.getElementsByClassName('product_list')[0];

        // Определяем объект, по которому произошло событие
        const target = event.target;

        // Определяем выбранный товар по id родительского элемента нажатой кнопки
        let currentProduct = target.parentElement.id;

        // Объявляем переменную, которая будет содержать стоимость товара
        let priceProduct;

        // Создаем элемент <p>, который будет содержать описание товара, и добавляем ему класс для стилизации
        let boxProduct = document.createElement('p');
        boxProduct.setAttribute('class', 'description');

        // Определяем товар, который будет добавлен в корзину 
        switch (currentProduct){
            case 'trousers': 
                priceProduct = 520.00;
                boxProduct.innerHTML = 'TROUSERS price: ' + priceProduct;

                // Добавляем описание товара блоку productList в качестве дочернего элемента
                productList.appendChild(boxProduct);
               
            break;
            case 'panama':
                priceProduct = 320.00;
                boxProduct.innerHTML = 'PANAMA price: ' + priceProduct;
                productList.appendChild(boxProduct);
                
            break;
            case 'jacket':
                priceProduct = 600.00;
                boxProduct.innerHTML = 'JACKET price: ' + priceProduct;
                productList.appendChild(boxProduct);
                
            break;
            default:
                alert('Product don\'\t undefined');
            break;
        }

        //Считаем общую цену всех товаров в корзиине
            const totalPrice = document.getElementById('total_price');
            sum = sum + priceProduct; 
            totalPrice.innerHTML = 'Total: ' + sum;
    }

    function init() {
        const buttonAdd = document.querySelectorAll('.product_button');
          for (let product of buttonAdd) {
            // При нажатии на кнопку она меняет цвет
                  product.onmousedown =  function() {
                  product.style.backgroundColor = '#F16D7F';
                  product.style.color = '#ffffff';
              };
            // При отжатии кнопки возвращаем цвет обратно
                  product.onmouseup = function() {
                  product.style.backgroundColor = '#ffffff';
                  product.style.color = '#F16D7F';
              };
              product.addEventListener('click', addToCart);
          }
      } 

    var sum = 0;
    window.addEventListener('load', init);