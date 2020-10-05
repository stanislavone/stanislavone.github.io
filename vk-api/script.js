$(document).ready(function () {
 
  // Инициализация
  VK.init({
    apiId: 7506667
  });
 
  $('#vkLogin').on('click', function () {
 
    // Авторизация
    VK.Auth.login(
      // callback-функция, которая будет вызвана после авторизации
      function (response) {
 
        console.log(response);

 
        if (response.status === 'connected') { // авторизация прошла успешно

                var user = response.session.user; //  информация о пользователе

                console.log(user.id);
            /*
             user.first_name - имя;
             user.last_name - фамилия;
             user.href - ссылка на страницу в формате https://vk.com/domain;
             user.id  - идентификатор пользователя;
             user.nickname -  отчество или никнейм (если указано);
             */
            
 
        } else if (response.status === 'not_authorized') { // пользователь авторизован в ВКонтакте, но не разрешил доступ приложению;
 
        } else if (response.status === 'unknown') { // пользователь не авторизован ВКонтакте.
 
        }
 
      },
      // права доступа (integer)
      // допустимые значения:
      // AUDIO:8
      // FRIENDS:2
      // MATCHES:32
      // PHOTOS:4
      // QUESTIONS:64
      // VIDEO:16
      // WIKI:128
      VK.access.PHOTOS
    );
 
  });
 
  $('#vkUnLogin').on('click', function () {
 
    // Выход
    VK.Auth.logout(function (response) {
      console.log(response);
      // {session: null, status: "unknown", settings: undefined}
    });
 
  });
 
  $('#vkGetPhotos').on('click', function () {
 
    VK.Api.call(
      'photos.getAll', // название метода API https://vk.com/dev/methods
      // параметры:
      {
        v: '5.73', // версия API (обязательный параметр)
        count: 10, // количество фотографий
        //photo_sizes: 1,
      }, function (r) {
 
        var count = r.response.count; // кол-во полученных фотографий
        var items = r.response.items; // массив с фотографиями
        console.log(items);
        for(let i = 0; i < count; i++) {
            console.log(items[i].photo_75, "3");
      }
      });
 

  });
});