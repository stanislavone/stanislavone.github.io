$(document).ready(function() {

  /* add to list */

  let arr = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];
  function add() {
    $('.add').click(function(e) {
      let val = $('.form-control').val();
      if(val.length > 30) {
        val= val.slice(0, 30) + "...";
      } else if (val === '') {
        return false;
      }
    arr.push(val);
    if(arr.length > 2) {
      $(":input[type=button]").prop("disabled", true);
      swal({
        title: "s4day88@yandex.ru",
        button: false,
        icon: "info",
      });
      return false;
    }
    $('.list-group').append("<li class='list-group-item' id='"+arr.length+"'>"+val
    +"<button class='btn btn-sm close del' id='"+arr.length+"'>X</button></li>");
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
    $(".list-group").append("<li class='list-group-item' id='" + item + "'>" + data[item] + "<button class='btn btn-sm close del' id='" + item + "'>X</button></li>");
  }
  
  /* delete item */

  function del() {
    $(".del").click(function() {
      let id = $(this).attr('id');
      $('#' + id).slideUp();
      data.splice(id, 1);
      localStorage.setItem("items", JSON.stringify(data));
    })
  }
  del();

  /* alert */

  $(".list-group-item").click(function() {
    let id = $(this).attr('id');
    $('#'+id).click(function() {
    localStorage.setItem("items", JSON.stringify(arr));
    let data = JSON.parse(localStorage.getItem("items"));
    console.log(data[id]);
    
  })
 });
  
  }) //ready