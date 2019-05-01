// perform GET request for all table data
$.ajax({
  url: "/api/tables",
  method: "GET"
})
  .then(function (tableData) {
    tableData.forEach(printTable);
  });

function printTable(tableInfo) {
  console.log(tableInfo);
  // create a list item using jQuery
  const $li = $("<li>").addClass("list-group-item");

  // add content to <li>
  $li.text(`ID: ${tableInfo.id} - ${tableInfo.name} || ${tableInfo.email} || ${tableInfo.phone}`);

  // add <li> to page based on if it's on waiting list or not
  if (tableInfo.isWaiting === false) {
    // add them to left column
    $("#not-waiting").append($li);
  } else {
    // add them to right column
    $("#waiting").append($li);
  }

}