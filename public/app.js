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
})
