$(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
      if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
      } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
      }
    });
  
    $("#reserveButton").click(()=>{
       $('#reserveModal').modal('show');
    });
    $("#loginButton").click(()=>{
      alert("Hello");
       $('#loginModal').modal('show');
    });
    let count = 0;
$("#counter").click(()=>{ count++;
document.getElementById('display').innerHTML = count;
});


  });

