$(document).ready(function() {

  // General
  $('html').removeClass('no-js');
  setTimeout(function(){
    $('body').addClass('ready');
    $('#js-preloaded').attr('class', 'header');
    $('#js-preloaded p').remove();
  }, 2000);

  var oldURL = document.referrer;
  if ( oldURL === 'http://clients.ckdt.nl/hiil/rechtwijzer-mobile/proto-3/contact.html') {
    setTimeout(function(){
      $('body').addClass('complete');
    }, 300);
  }

  $('#curtain').attr('class', 'hidden');

});

$(function() {

  $( '.label' ).draggable({revert: "valid"});
  $( '.droparea' ).droppable({
    activeClass: "ui-state-hover",
    hoverClass: "ui-state-active",
    drop: function( event, ui ) {
      deleteItem( ui.draggable );
    }
  });

  function deleteItem( $item ) {
    var text = $item.data('text');
    var classes = $item.attr('class');
    $('.droparea').empty();
    $item.css('opacity', 0);
    $('.label').not($item).css('opacity', 1);
    $('.droparea').prepend('<div>' + text + '</div>');
    if($item.hasClass('vraag-1')){
      $('.result div.span .antwoord-1 span').empty();
      $('.result div.span .antwoord-1 span').append('<div class="rule">' + text + '</div>');
    } else if($item.hasClass('vraag-2')){
      $('.result div.span .antwoord-2 span').empty();
      $('.result div.span .antwoord-2 span').append('<div class="rule">' + text + '</div>');
    } else if($item.hasClass('vraag-3')){
      $('.result div.span .antwoord-3 span').empty();
      $('.result div.span .antwoord-3 span').append('<div class="rule">' + text + '</div>');
    }
    $('footer a').addClass('active');
  }
});

$('footer a').click(function(){

  if ( $('body').hasClass('one') ) {
    $(this).attr('class', '');
    $('body').attr('class', 'ready two');
    $('.question').css('left', '-100%');
    $('.bar').width('66%');
    $('.droparea').empty();
  } else if ( $('body').hasClass('two') ) {
    $(this).attr('class', '');
    $('body').attr('class', 'ready three');
    $('.question').css('left', '-200%');
    $('.bar').width('100%');
    $('.droparea').empty();
    $(this).text('See arrangement');
  } else if ( $('body').hasClass('three') ) {
    $(this).attr('class', '');
    $('body').attr('class', 'ready result');
    $('.question-3').hide();
    $('.result').addClass('visible');
    $('.droparea').empty();
  }
});

// Stay in app view
$('a').click(handleClick);
  function handleClick(e) {
    var target = $(e.target).closest('a');
    if( target ) {
      e.preventDefault();
      $('#curtain').attr('class', 'visible');
      setTimeout(function(){
        window.location = target.attr('href');
      }, 2000);
  }
}

// Contenteditable area
$( ".result header .edit" ).click(function(e) {
  e.preventDefault();
  var value = $('.result .span').attr('contenteditable');

  if (value == 'false') {
      $('.result .span').attr('contenteditable','true');
      $('.result .span').attr('class','span true');
      $('.result .span').focus();
  }
  else {
      $('.result .span').attr('contenteditable','false');
      $('.result .span').attr('class','span');
  }
});

$('.result header .retry').click(function(e) {

  e.preventDefault();
  window.location = 'http://clients.ckdt.nl/hiil/rechtwijzer-mobile/proto-3/index.html';

});

$(document).ready(function($) {
  $("#js-cards").owlCarousel({
    items: 1,
    addClassActive: true
  });
});