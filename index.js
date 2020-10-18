
var clickedCategory = null;
$('.c-h2').click(function(event){
  var categoriesLocation = $('.categories').offset().top;
  window.scrollTo({top: categoriesLocation, behavior: 'smooth'});
  if ($('.'+clickedCategory).hasClass('clicked-category') == true){
    $('.'+clickedCategory).removeClass('clicked-category');
    $( '.product-section' ).slideUp( "slow", function(){
    });
  }
  clickedCategory = event.target.id;
  console.log(clickedCategory);
  console.log(categoriesLocation);
  $('.'+clickedCategory).addClass('clicked-category');
    $( '.product-section' ).slideDown( "slow", function(){
    });
});

//366px vaseye har kala jadid
