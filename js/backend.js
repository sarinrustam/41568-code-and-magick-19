'use strict';

(function () {
  var URL = 'https://js.dump.academy/code-and-magick';
  var LOAD_URL = 'https://js.dump.academy/code-and-magick/data';
  var RESPONSE_TYPE = 'json';
  var STATUS_200 = 200;
  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';

  var load = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_200) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open(METHOD_GET, LOAD_URL);
    xhr.send();
  };

  var save = function (data, onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = RESPONSE_TYPE;

    xhr.addEventListener('load', function () {
      try {
        onLoad(xhr.response);
      } catch (err) {
        onError('Произошла ошибка');
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.open(METHOD_POST, URL);
    xhr.send(data);
  };

  window.backend = {
    load: load,
    save: save
  };
})();
