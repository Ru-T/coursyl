// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require d3
//= require_tree .

// function disableSaveButton() {
//   $("input[type=submit]").prop("disabled", true);
//   $("form").submit();
// }

$(function (){
  $("input[type=submit]").on("click", disableSaveButton);
});

function hideLastRow() {
  last = $(".association.container").last()
  if(last) {
    last.hide(); // only do this at the right moment
  }
}

$(hideLastRow); // when page is done loading, run this function

function showLastRow() {
  $(".association.container").last().show();
}

$(function (){
  $(".new-association").on("click", showLastRow);
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
