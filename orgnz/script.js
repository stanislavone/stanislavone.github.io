$(document).ready(function() {
    $("h2")
      .text("text jquery");
    $("li")
      .addClass("list-group-item");
    $(".form-control")
      .css("margin-top", "10px");
    
    
    
    var arr = [];
    var callback = $.Callbacks();
    callback.add(add);
    callback.add(del);

    

    $(".add").click(function() {
      var tt = $(".form-control").val();
      if(tt === '') {
        $(".container-fluid").append("<div class='notify'></div>");
        $('.notify').addClass("alert alert-primary");
        $('.notify').attr("role", "alert");
        $('.notify').text("Введите задачу");
        $('.notify').hide(5000);

        return false;
      }

      arr.unshift(tt);
      console.log(arr);
      callback.fire(add);
      $('.form-control').val('');

    });

    function deleteItem() {
      let id = $(".delete").attr('id');
      id--;
      $('#1').remove();
      arr.splice($.inArray(id, arr), 1);
    }


    $(document).on("click", ".delete", function() {
      deleteItem();     
      console.log(arr);
      callback.fire(del);
    })

    

    let last = arr.length;
    function add() {
    $.each(arr, function(index, value) {
      if(last === index) {
      $(".list-group")
        .append("<li class=\"list-group-item\">" + value + "</li>");
      $('.list-group-item').attr("id", function(index) {
          return index + 1
        });
     // $(".list-group-item")
      //  .append("<button class='btn btn-primary delete'>DEL</button>");
        console.log(index + " : " + value);

      }
     
    })
    }

    function addButtonDel() {
        $(".list-group")
        .append("<button class='btn btn-primary delete'>DEL</button>");
        $('.delete').attr("id", function(index) {
          return index + 1;
        })
            
        }
       

    
   
     function del() {
     $.each(arr, function(index, value) {
      if(last === index) {
          addButtonDel();
      
      }
        console.log(index + " : " +value);
        console.log(arr.length);
      
      })

   }

  }) //ready