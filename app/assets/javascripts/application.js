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

function disableSaveButton() {
  $(".btn").last().prop("disabled", true);
  $("form").submit();
}

$(function (){
  $(".btn").last().on("click", disableSaveButton);
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


// jQuery above

function hideDeletedRow(button) {
  var hideRow = button.parentElement.parentElement.parentElement; //association_container
  var markDestroyTrue = button.parentElement.lastElementChild; //checkbox for destroy (hidden)
  hideRow.style.display = "none";
  markDestroyTrue.checked = true; // on last button, tries to check and nothing happens
}

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
