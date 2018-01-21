$(document).ready(function () {
  const colorInput = $('input[type=color]');
  const sizeInput = $('input[type=submit]');
  const sizePicker = $('#sizePicker');
  let height, width;
  let values = {};
  let table;

  /*
  * @description Adds a click event listener to the cell which changes its background color.
  * @param {object} cell - The table cell.
  */
  function addClickListener(cell) {
    $(cell).on('click', function() {
      $(cell).css('background-color', colorInput.val());
    });
  }

  /*
  * @description Makes the table grid. Clears the table on each submission.
  * @param {object} event - Information about the event.
  */
  function makeGrid(event) {
    event.preventDefault();
    let row;
    let k = 0;
    table = document.getElementById('pixel_canvas');

    $.each($('#sizePicker').serializeArray(), function(iter, field) {
      values[field.name] = field.value;
    });

    // Convert string values to integers.
    height = +values.height;
    width = +values.width;

    // Clears the table upon submission if there is rows present.
    if (table != null && table.rows.length > 0) {
      let length = table.rows.length;

      while (length > 0) {
        table.deleteRow(length - 1);
        length--;
      }
    }

    if (table != null) {
      for (var i = 0; i < height; i++) {
        row = table.insertRow(i);
        for (var j = 0; j < width; j++) {
          addClickListener(row.insertCell(j));
        }
      }
    }
  }

  // When size is submitted by the user, call makeGrid()
  sizePicker.on('submit', makeGrid);
});
