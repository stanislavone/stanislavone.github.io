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
      localStorage.setItem("arr", JSON.stringify(arr));



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
      var id = $(this).attr("id");
      arr.splice($(this).attr("id"), 1);
      localStorage.removeItem('arr'+[id]);
      $(".del").each(function() {
        $(this).attr("id", countLi);
      })
      console.log(arr);
    })


      let str = '';
      var outArr = [];
      outArr = JSON.parse(localStorage.getItem('arr'));
      $.each(outArr, function(index, value) {
        $(".list-group").append("<li class='list-group-item'>"+value+"<button class='btn btn-sm close del' id='"+ countLi + "'>X</button></li>");
      })



// njf8uj8bgvj8gbj0u89jvgj8io fvifv89vjf7dfthrvfl9f9igfu90kb98fg90f0o9i09d9f--p[v-olovgb0-0f0pvl99fp[bfdp-d0k8ujj'][]]









  }) //ready
