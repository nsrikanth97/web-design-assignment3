//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

function displayTextArea(el){
  let node = el.parentElement.parentElement.nextElementSibling.childNodes[0];
  var style = window.getComputedStyle(node);
  var top = style.getPropertyValue('display');
  if(top == "none"){
    el.parentElement.parentElement.nextElementSibling.childNodes[0].style.display = "table-cell";
  }else{
    el.parentElement.parentElement.nextElementSibling.childNodes[0].style.display = "none";
  }
}

function changeColor(el){
  var checked = false; 
  var button = document.getElementById("button");
  var tableHeader  = document.getElementsByTagName("thead");
  var selectedRow = el.parentElement.parentElement;
  if(el.checked){ 
    selectedRow.style.backgroundColor = "orange";
    tableHeader[0].rows[0].cells[8].style.display = "table-cell";
    selectedRow.cells[8].style.display = "table-cell";
    tableHeader[0].rows[0].cells[9].style.display = "table-cell";
    selectedRow.cells[9].style.display = "table-cell";
    checked = true;
  }else{
    selectedRow.style.backgroundColor = "white";
    selectedRow.cells[8].style.display = "none";
    selectedRow.cells[9].style.display = "none";
    const checkboxList = document.querySelectorAll('input[type="checkbox"]');
    checkboxList.forEach(function(checkbox){
      if(checkbox.checked)
        checked = true;
    })

  }
 
  if(checked){
    button.style.backgroundColor = "orange";
    button.style.borderColor  = "orange";
    button.style.borderStyle   = "solid";
    button.style.borderWidth    = "thin";
    button.disabled = false;
    button.style.cursor = "pointer";
  }else{
    button.style.backgroundColor = "grey";
    button.style.border = "thin solid grey"
    button.disabled = true;
    tableHeader[0].rows[0].cells[8].style.display = "none";
    tableHeader[0].rows[0].cells[9].style.display = "none";
    button.style.cursor = "not-allowed";
  }
}


function addNewStudent(){
  try{
    addNewStudent2();
  } catch{
    window.alert("Error adding student!! Please try again after some time");
  }
}
function addNewStudent2(){
  var tbl  = document.getElementById("myTable");
  var length = (tbl.rows.length + 1)/2;
  var newRow = tbl.insertRow();
  var cell = newRow.insertCell();
  var checkboxChild  = document.createElement('input');
  checkboxChild.type = "checkbox";
  checkboxChild.onclick  =  function () { changeColor(checkboxChild); };
  cell.appendChild(checkboxChild);
  let child  = document.createElement('br');
  cell.appendChild(child);
  child  = document.createElement('br');
  cell.appendChild(child);
  child  = document.createElement('img');
  child.setAttribute('src' , 'down.png');
  child.setAttribute('width' , '25px');
  child.setAttribute('class' , 'imgButton');
  child.setAttribute('width' , '25px');
  child.addEventListener("click", function () { displayTextArea(child); });
  cell.appendChild(child);
  cell = newRow.insertCell();
  cell.innerHTML =  "Student " + length;
  cell = newRow.insertCell();
  cell.innerHTML =  "Teacher " + length;
  cell = newRow.insertCell();
  cell.innerHTML =  "Approved";
  cell = newRow.insertCell();
  cell.innerHTML =  "Fall";
  cell = newRow.insertCell();
  cell.innerHTML =  "TA";
  cell = newRow.insertCell();
  cell.innerHTML =  "23456";
  cell = newRow.insertCell();
  cell.innerHTML =  "100%";
  cell = newRow.insertCell();
  cell.setAttribute('class', 'hiddenRow');
  let buttonChild  = document.createElement('button');
  buttonChild.setAttribute('class', 'deleteButton');
  buttonChild.innerHTML = "Delete";
  buttonChild.addEventListener("click" , function () { deleteRow(buttonChild); });
  cell.appendChild(buttonChild);
  cell = newRow.insertCell();
  cell.setAttribute('class', 'hiddenRow');
  let buttonChild2  = document.createElement('button');
  buttonChild2.setAttribute('class', 'deleteButton');
  buttonChild2.innerHTML = "Edit";
  buttonChild2.addEventListener("click" , function () { editRow(buttonChild2); });
  cell.appendChild(buttonChild2);

  newRow = tbl.insertRow();
  newRow.setAttribute('class' , 'dropDownTextArea');
  cell = newRow.insertCell();
  cell.setAttribute('colspan' , 8);
  cell.innerHTML =  "Advisor:<br /><br />  Award Details<br/>Summer 1-2014(TA)<br/> Budget Number: <br /> Tuition Number: <br/> Comments:<br/><br /><br/> Award Status:<br /><br /><br />";
  window.alert("New student added successfully");

}

function deleteRow(el){
  let selectedRow = el.parentElement.parentElement;
  let table = selectedRow.parentElement.parentElement; 
  let rowIndex = selectedRow.rowIndex;
  table.deleteRow(rowIndex);
  table.deleteRow(rowIndex);
  const checkboxList = document.querySelectorAll('input[type="checkbox"]');
  let checked = false;
  checkboxList.forEach(function(checkbox){
    if(checkbox.checked)
      checked = true;
  })
  if(!checked){
    table.rows[0].cells[8].style.display = "none";
    table.rows[0].cells[9].style.display = "none";
  }
  window.alert("Student deleted successfully");
}


function editRow(el){
  window.alert("Edit the details");

}
var t = new Title("CONNECT WITH ME!");