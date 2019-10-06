$(document).ready(function() {
    
    $("li")
      .addClass("list-group-item");
    $(".form-control")
      .css("margin-top", "10px");

    function alert() {
       $(".container-fluid").append("<div class='notify'></div>");
        $('.notify').addClass("alert alert-primary");
        $('.notify').attr("role", "alert");
        $('.notify').text("Введите задачу");
        $('.notify').hide(5000);

    }

    var arr = [];
    function makeCounter() {
      var count = 0;
      return function() {
        return count++
      }
    }

   var counter = makeCounter();


    $("body").on("click", ".add", function() {
      var tt = $(".form-control").val();
      if(tt === '') {
        alert();
        return false;
      }
      var countLi = $("ul li").length;
      var add = "<li class='list-group-item'>" + tt + "<button class='btn btn-primary del' id='"+ countLi + "'>DELETE</button></li>";
      // console.log(counter());

      $("ul").append(add);
      arr.push(tt);
      console.log("add : " +arr);
      $('.form-control').val('');

    });




    $("body").on("click", ".del", function() {
      $(this).parent().remove();
      let id = $(this).attr("id");
      console.log(id);
      arr.splice($(this).attr("id"), 1);
      console.log(arr);
    })









  }) //ready
