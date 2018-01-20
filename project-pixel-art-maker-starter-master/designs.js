$(document).ready(function () {
  const colorInput = $('input[type=color]');
  const sizeInput = $('input[type=submit]');
  let height, width;
  let values = {};
  let table;

  // When size is submitted by the user, call makeGrid()
  $('#sizePicker').on('submit', makeGrid);

  /*
  * @description Makes the table grid. Clears the table on each submission.
  * @param {object} event - Information about the event.
  */
  function makeGrid(event) {
    event.preventDefault();
    let row;
    table = document.getElementById('pixel_canvas');

    $.each($('#sizePicker').serializeArray(), function(i, field) {
      values[field.name] = field.value;
    });

    if (table !== null && table.rows.length > 0) {
      for (var row = 0; row < table.rows.length; i++) {
        table.deleteRow(row);
      }
    }

	// Convert string values to integers.
    height = +values.height;
    width = +values.width;

    if (table !== null) {
      for (var i = 0; i < height; i++) {
        row = table.insertRow(i);
        for (var j = 0; j < width; j++) {
          addClickListener(row.insertCell(j));
        }
      }
    }
  }

  /*
  * @description Adds a click event listener to the cell which changes its background color.
  * @param {object} cell - The table cell.
  */
  function addClickListener(cell) {
    $(cell).on('click', function() {
      $(cell).css('background-color', colorInput.val());
    });
  }
});