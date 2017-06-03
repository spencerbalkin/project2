$(document).ready(function(){

  $('#delete-button').on('click', () => {
     const postId = $('#delete-button').data('id');

     $.ajax({
       method: 'DELETE',
       url: `/${postId}`
     })
     .then((response) => {
       console.log('success');
       window.location.replace('/');
     })
     .catch((err) => {
         console.log(err)
     });
   });

   $("#age_scale").on("change", function() {
     window.location.href = "/?age=" + $(this).val();
   });

   var ageGiven = window
    .location
    .search
    .match(/age=(\d+)/)[1];

   $("#age_scale").val(ageGiven);
})
