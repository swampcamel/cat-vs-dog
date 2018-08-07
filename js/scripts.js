$(document).ready(function() {
  $("button#catbtn").click(function() {
  $("ul#bark").append("<li>BARK</li>");
    $("li").addClass("list-group-item");
    });
  $("button#dogbtn").click(function() {
  $("ul#meow").append("<li>MEOW</li>");
  $("li").addClass("list-group-item");
  });
});
$(document).ready(function() {
  $("#catshow").click(function() {
    $("#cat2").toggle();
  });
  $("#dogshow").click(function() {
    $("#dog2").toggle();
  });
});
