$(document).on('click', '.navHead-btn', function () {
  var target = $(this).data('target');

  document.getElementById(target).scrollIntoView({
    behavior: 'smooth'
  });
});

$(document).ready(function () {
  $('.skills_Text').addClass('show');
});

$(function() {
  $(".tab").click(function() {
    var target = $(this).data("tabs").toLowerCase();

    $(".tab").removeClass("active");

    $(this).addClass("active");

    $(".tab-content").removeClass("active");

    $("#" + target).addClass("active");
  });
});
