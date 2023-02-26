$(document).ready(function () {
    $("#movie-form").submit(function (event) {
        event.preventDefault(); 
        let title = $("#title").val();
        let rating = $("#rating").val();
        let $li = $("<li>").text(`${title} - ${rating}`); 
        let $deleteButton = $("<button>").addClass("delete").text("Delete"); 
    
        if (
            !isNaN(rating) &&  
            parseInt(rating) >= 1 && 
            parseInt(rating) <= 10 
        ) {
            if (title.trim().length >= 2) {
                $li.append($deleteButton); 
                $("#movie-list").append($li); 
                $("#title").val(""); 
                $("#rating").val("");
            } else {
                alert("Please enter more than 1 character for title.");
            }
        } else {
            alert("Please enter a number between 1 and 10 for rating.");
        }
    });
    

    $("#movie-list").on("click", ".delete", function () {
        $(this).parent().remove();
    });
    
    
$("#alpha").on("click", function (event) {
  let $lis = $("#movie-list").children("li");
  $lis.sort(function (a, b) {
    let titleA = $(a).text().split(" - ")[0].trim();
    let titleB = $(b).text().split(" - ")[0].trim();
    let ratingA = $(a).text().split(" - ")[1].trim();
    let ratingB = $(b).text().split(" - ")[1].trim();
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    if (ratingA < ratingB) {
      return -1;
    }
    if (ratingA > ratingB) {
      return 1;
    }
    return 0;
  });
  $lis.detach().appendTo("#movie-list");
});

$("#rank").on("click", function () {
  let $lis = $("#movie-list li");
  $lis.sort(function (a, b) {
    let ratingA = parseInt($(a).text().split(" - ")[1].trim());
    let ratingB = parseInt($(b).text().split(" - ")[1].trim());
    return ratingA - ratingB;
  });
  $("#movie-list").append($lis);
});
    
});



