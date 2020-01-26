$(document).ready(function() {
  /* animated function */
  
 

  /* add to list */
  let val = '';
  let arr = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
  function add() {
    
    $('.add').click(function() {
      
      val = $('.form-control').val();
    arr.push(val);
    $('.form-control').val(null);
    localStorage.setItem("items", JSON.stringify(arr));
    $.ajax({
      cache: false,
	    success: function(html){
        $("body").html(html);
      },
    });
    return false;
  });
  
  }
  add();

  /* List */

  localStorage.setItem("items", JSON.stringify(arr));
  let data = JSON.parse(localStorage.getItem("items"));
  for(let item in data) { 
    $(".list-group").append("<div class='item' id='"+item+"'><li class='list-group-item'>" + data[item] + "</li><button type='button' id='"+item+"' class='btn del'>&#10006;</button></div>");
    
  }
  
  /* delete item */

  function del() {
    $(".del").click(function() {
      let id = $(this).attr('id');
      $('div#' + id).addClass("animated fadeOutLeft delay-1");
      data.splice(id, 1);
      localStorage.setItem("items", JSON.stringify(data));
      console.log(data);
      console.log(arr);
      setTimeout(function(){
        $('div#' + id).remove();
      }, 500);
    });
    
  }
  del();
  
  /* alert */

  $(".item").click(function() {
    let id = $(this).attr('id');
    $('#'+id).click(function() {
    localStorage.setItem("items", JSON.stringify(arr));
    let data = JSON.parse(localStorage.getItem("items"));
    swal(data[id], { buttons: false, });
    })
  })
  
  
  }) //ready