$(document).ready(function() {

   $('ul.grid').find('li.row').find('.post-toggle').click(function(){

      //Expand or collapse this panel
      $(this).next('.post-content').slideToggle('fast');

      //Hide the other panels
      $(".post-content").not($(this).next('.post-content')).slideUp('fast');

    });
})
