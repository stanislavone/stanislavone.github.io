    
        let interval= '';
        let out = "";

      $(document).on("click", ".high", function () {
        interval = Math.floor(Math.random() * (16 - 8) + 8);     
        for(var i = 0; i < interval; i++) {
        out += Math.floor(Math.random(23) * 32).toString(36);
            }
        $("h1").text(out);
        out = '';
        interval = '';
        }); 

    $(document).on("click", ".medium", function() {
        interval = Math.floor(Math.random() * (8 - 4) + 4); 
        for(var i = 0; i < interval; i++) {
        out += Math.floor(Math.random(23) * 32).toString(36);
          }
        $("h1").text(out);

        out = '';
        interval = '';
        });



    