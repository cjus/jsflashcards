var app = (function(cardDeck) {
  "use strict";

  var appName = 'JS Flash Cards',
    version = '0.1',
    cardCount = 0,
    cardsLength = cards.length;

  function shuffle(array) {
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    var counter = array.length, temp, index;
    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter = counter - 1;

      // And swap the last element with it
      temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }

  return {
    init: function() {
      cardCount = 0;
      cardDeck = shuffle(cardDeck);
    },
    getNextCard: function() {
      var card;
      if (cardCount !== cardsLength) {
        card = cardDeck[cardCount];
        cardCount = cardCount + 1;
      } else {
        cardCount = 0;
      }
      return card;
    }
  };
})(cards);

/*
 jQueryMobile event handlers
 */
$(document).bind('pageinit', function(event, ui) {
  "use strict";
  app.init();
});

$(document).delegate("#title-page", "pagecreate", function() {
  "use strict";
  $(this).css('background', '#f0db4f');
});

$(document).delegate("#main-page", "pageinit", function() {
  "use strict";
  $("#next-card").bind("click", function(event, ui) {
//    event.stopImmediatePropagation();
//    event.preventDefault();

    $('#flash-card').trigger('collapse');

    var card = app.getNextCard();
    if (card === undefined) {
      window.location.href = '#resources-page';
    } else {
      $('#question').html(card.question);
      $('#answer').html(card.answer);
    }
  });
});

$(document).delegate('#main-page', 'pageshow', function() {
  "use strict";
  var card = app.getNextCard();
  $('#question').html(card.question);
  $('#answer').html(card.answer);
});

