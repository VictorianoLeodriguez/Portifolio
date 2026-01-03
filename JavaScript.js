$(document).on('click', '.navHead-btn', function () {
  var target = $(this).data('target');

  document.getElementById(target).scrollIntoView({
    behavior: 'smooth'
  });
});

$(document).ready(function () {
  $('.skills_Text').addClass('show');
});

$(".tabs-container .tab").click(function () {
  const container = $(this).closest(".tabs-container");
  const target = $(this).data("tab");

  container.find(".tab").removeClass("active");
  $(this).addClass("active");

  container.find(".tab-content").removeClass("active");
  container.find("#" + target).addClass("active");
});

