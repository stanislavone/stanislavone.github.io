$(document).ready(function() {

    $(".form-control")
      .css("margin-top", "10px");
    $("btn .del").addClass("btn-sm");
  $(".item").css("background-color", "red");


    function alert() {
       $(".container-fluid").append("<div class='notify'></div>");
        $('.notify').addClass("alert alert-primary");
        $('.notify').attr("role", "alert");
        $('.notify').text("Введите задачу");
        $('.notify').hide(5000);

    }

    var arr = [];
  var anim;
    function makeCounter() {
      var count = 0;
      return function() {
        return count++
      }
    }

   var counter = makeCounter();
   function cikl() {
          for(i = 0; i <= arr.length; i++) {
          return i;
          }
        }
  var countLi = $("ul li").length;

    $("body").on("click", ".add", function() {
      var tt = $(".form-control").val();
      if(tt === '') {
        alert();
        return false;
      }
      let cntr = 0;
      var add;
      arr.push(tt);
      localStorage.setItem(arr, JSON.stringify(arr));


      $.each(arr, function(index, value) {


      add = "<li class='list-group-item animated fadeIn'>" + value + "<button class='btn btn-sm close del' id='"+ countLi + "'>X</button></li>";
      });


      $("ul").append(add);
     // arr.push(tt);
      console.log("add : " +arr);
      $('.form-control').val('');

    });




    $("body").on("click", ".del", function() {
      $(this).parent()
      .remove();
      arr.splice($(this).attr("id"), 1);
      localStorage.removeItem($(this).attr("id"));
      $(".del").each(function() {
        $(this).attr("id", countLi);
      })
      console.log(arr);
    })


      let str = '';
      function localValue() {
      for(let i = 0; i < localStorage.length; i++) {
          return JSON.parse(localStorage.getItem(localStorage.key(i)));
      }
    }

    for(let i = 0; i < localStorage.length; i++) {
    $(".list-group").append("<li class='list-group-item'>"+localValue(i)+"</li>");
}









  }) //ready
