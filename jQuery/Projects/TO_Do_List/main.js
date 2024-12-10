$(document).ready(function () {
  $("#addTask").on("click", function () {
    let inputText = $("#taskInput").val().trim();
    if (inputText !== "") {
      $("#taskList").append(`
        <li>
        <span>${inputText}</span>
        <button class="deleteBtn">Delete</button>
        </li>
        `);
    }
    $("#taskInput").val("");
  });

  $("#taskInput").on("keypress", function (event) {
    if (event.which === 13) {
      $("#addTask").click();
    }
  });

  $(document).on("click", ".deleteBtn", function () {
    $(this).closest("li").remove();
  });
});
