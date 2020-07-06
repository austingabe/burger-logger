// Make sure we wait to attach our handlers until the DOM is fully loaded
$(function () {
  // Click event changing "devoured" state from 0 to 1 or 1 to 0
  $(".change-devour").on("click", function (event) {
    const id = $(this).data("id");
    const newDevour = $(this).data("newdevour");

    const newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function () {
        console.log("changed devoured to", newDevour);
        // Reload the page to get the updated list. Clicked burger should now appear in different list
        location.reload();
      }
    );
  });
  // Submit event "creating" a new burger
  $(".create-form").on("submit", event => {
    // preventDefault on a submit event
    event.preventDefault();

    const newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      () => {
        console.log("created new burger");
        // Reload the page to get the updated list with new burger added
        location.reload();
      }
    );
  });
  // Click event deleting selected burger
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");

    // Send the DELETE request
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list without deleted burger
        location.reload();
      }
    );
  });
});
