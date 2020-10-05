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


    ymaps.ready(init);
    var myMap;
    
    function init () {
        myMap = new ymaps.Map("map", {
            center: [57.5262, 38.3061], // Углич
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        });
    
        // Обработка события, возникающего при щелчке
        // левой кнопкой мыши в любой точке карты.
        // При возникновении такого события откроем балун.
        myMap.events.add('click', function (e) {
            let items = null;
                var coords = e.get('coords');
                console.log(coords);

                VK.Api.call(
                    'photos.search',
                    {
                        count: 10,
                        lat: coords[0].toPrecision(6),
                        long: coords[1].toPrecision(6),
                        radius: '100',
                        v: '5.52',
                    }, function(r) {
                        items = r.response.items;
                        let count = r.response.count;
                        
                        for(let i = 0; i < count-1; i++) {
                         
                          console.log(items[i].photo_75, "5");
                          $("ul").append("<a href="+items[i].photo_1280+"><img src="+items[i].photo_75+"></a>");
                      }
          
                    }
                )

        });
    
    }
})