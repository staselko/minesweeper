$(".begin-button").click(function() {
  $(".begin-button").replaceWith(
    '<table><tr><td class="item1" data-positioan="0"></td><td data-positioan="1" class="item2"></td><td class="item3" data-positioan="2"></td></tr><tr><td class="item4" data-positioan="3"></td><td class="item4"></td><td class="item6" data-positioan="5"></td></tr><tr><td class="item7" data-positioan="6"></td><td class="item8" data-positioan="7"></td><td class="item9" data-positioan="8"></td></tr></table><br /><input class="reset" type="button" value="Reset" />'
  );

$(function() {
  var player = 1;
  var table = $("table");
  var messages = $(".messages");
  var turn = $(".turn");

  $("td").click(function() {
    td = $(this);
    var state = getState(td);
    if (!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(td, pattern);
      if (checkIfPlayerWon(table, pattern)) {
        alert("Player " + player + "won.");
        window.location.reload();
        turn.html("");
      } else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
      }
    } 
  });

  $(".reset").click(function() {
    player = 1;
    reset(table);
    displayNextPlayer(turn, player);
  });
});

function getState(td) {
  if (td.hasClass("cross") || td.hasClass("circle")) {
    return 1;
  } else {
    return 0;
  }
}

function changeState(td, pattern) {
  return td.addClass(pattern);
}

function definePatternForCurrentPlayer(player) {
  if (player == 1) {
    return "cross";
  } else {
    return "circle";
  }
}

function setNextPlayer(player) {
  if (player == 1) {
    return (player = 2);
  } else {
    return (player = 1);
  }
}
function checkIfPlayerWon(table, pattern) {
  var won = 0;
  if (
    table.find(".item1").hasClass(pattern) &&
    table.find(".item2").hasClass(pattern) &&
    table.find(".item3").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item1").hasClass(pattern) &&
    table.find(".item4").hasClass(pattern) &&
    table.find(".item7").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item1").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item9").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item4").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item6").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item7").hasClass(pattern) &&
    table.find(".item8").hasClass(pattern) &&
    table.find(".item9").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item2").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item8").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item3").hasClass(pattern) &&
    table.find(".item6").hasClass(pattern) &&
    table.find(".item9").hasClass(pattern)
  ) {
    won = 1;
  } else if (
    table.find(".item3").hasClass(pattern) &&
    table.find(".item5").hasClass(pattern) &&
    table.find(".item7").hasClass(pattern)
  ) {
    won = 1;
  }
  return won;
}

function reset(table) {
  table.find("td").each(function() {
    $(this)
      .removeClass("circle")
      .removeClass("cross");
  });
}
});
