var appobj = {};

(function(app, cards) {
  var appName = 'JS Flash Cards';
  var version = '0.1';

  app.init = function() {
    $('#contactinfo').bind('expand',function() {
      $(document).scrollTop($(document).height());
    }).bind('collapse', function() {
        $(document).scrollTop(0);
      });
  };
  app.init();
})(appobj, cards);

$(document).ready(function() {
  appobj.init();
});

$(document).delegate("#title-page", "pagecreate", function() {
  $(this).css('background', '#f0db4f');
});

