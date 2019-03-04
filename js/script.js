 $(document).ready(function () {
      //live() runs on 1.7.1v but uppers is deprecated
    $("#b1").click(function () {
        alert("Hello world");
    });
    $('#b2').click(function () {
        $(".topnav").toggleClass('topnav2');
    
    });
  }); 
