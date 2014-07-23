$(function () {
  $(window).on('resize', function () {
    var header = $('#header');
    var content = $('#content');
    var footer = $('#footer');
    var flag = $(window).height() > header.height() + content.height() + footer.height();

    footer.toggleClass('fixed', flag);
  }).triggerHandler('resize');
});