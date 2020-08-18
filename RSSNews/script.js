
      jQuery(function($) {
        $("#rss-feeds").rss("https://news.yandex.ru/internet.rss", {
            limit: 20,
            ssl: true,
            dateFormat: 'Do MM, YYYY',
            entryTemplate: "<article class='message'><div class='message-header'><a href='{url}'>[{author}{date}] {title}</div><div class='message-body'>{shortBodyPlain} || >></div></article>",
            layoutTemplate: "<div class='container is-fluid'>{entries}</div>",
      });
    });
