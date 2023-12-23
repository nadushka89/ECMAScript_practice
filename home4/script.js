// Задача 1

// Необходимо получить список всех пользователей с помощью бесплатного API
//  (https://jsonplaceholder.typicode.com/users) и отобразить их на странице.
//   Пользователь должен иметь возможность удалить любого пользователя из списка.

// const url = 'https://jsonplaceholder.typicode.com/users';

// async function getData(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   return data;
// }

// try {
//   const data = await getData(url);
//   const body = document.querySelector('body');
//   data.forEach((element) => {
//     const userEl = document.createElement('ul');
//     userEl.innerHTML = `<li>${element.name} <button class='delete_user'> Удалить </button> </li> `;
//     body.appendChild(userEl);

//     const deleteUser = userEl.querySelector('.delete_user');
//     deleteUser.addEventListener('click', async () => {
//       try {
//         userEl.remove();
//       } catch {
//         console.error('Ошибка при удалении пользователя');
//       }
//     });
//   });

//   console.log(data);
// } catch (error) {
//   console.log('no connect');
// }

// Задача 2
// Необязательная задача

// Необходимо реализовать отрисовку 10 картинок собак из API https://dog.ceo/dog-api/ с интервалом в 3 секунды.

const urlDog = 'https://dog.ceo/api/breeds/image/random';

async function getData(urlDog) {
  const res = await fetch(urlDog);
  const data = await res.json();
  return data;
}

try {
  let imageCount = 0;
  const intervalId = setInterval(async () => {
    try {
      const data = await getData(urlDog);
      const body = document.querySelector('body');

      // Отрисовываем картинку
      body.insertAdjacentHTML(
        'beforeend',
        `<figure>
            <img src="${data.message}" alt="pic">
        </figure>
      `,
      );

      imageCount++;

      if (imageCount >= 10) {
        clearInterval(intervalId);
      }
    } catch (error) {
      console.error('Ошибка при получении данных', error);
    }
  }, 3000); // Интервал (3 секунды)
} catch (error) {
  console.log('Ошибка при первоначальном получении данных', error);
}
