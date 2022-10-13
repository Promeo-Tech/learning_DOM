
function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.innerHTML = document.getElementById('cellOne').value;
  document.getElementById('cellOne').value = '';
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}


