//check off specific todos by clicking on them
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation(); //stopping event bubbling
});

$("input[type='text']").keypress(function (event) {
  if (event.which === 13 && $(this).val().trim() !== "") {
    //grabbing new todo text from input
    let todoText = $(this).val();
    //create a new li and add to ul
    $("ul").append(
      `<li><span><i class='fas fa-trash'></i></span> ${todoText}</li>`
    );
    //empty the input
    $(this).val("");
  } else {
  }
});

$(".fa-minus").click(function () {
  $("input[type='text']").fadeToggle();
  $(this).toggleClass("fa-minus");
  $(this).toggleClass("fa-plus");
});
