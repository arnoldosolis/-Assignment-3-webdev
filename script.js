let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a row
function addR() 
{
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");
    // Stores row that will be appended to table element
    let addRow = document.createElement("tr");

    // Assuming no table(grid) has been created (considering the variables 
    // above I just made it a condition)
    if (numRows === 0 && numCols === 0)
    {
        var box = document.createElement("td");
        box.onclick = function()
        {
            this.style.backgroundColor = document.getElementById("colorPicker").value;
        };
        addRow.appendChild(box);
        numCols++;
    }
    else
    {
        for (let i = 0; i < numCols; i++)
        {
            var box = document.createElement("td");
            box.onclick = function()
            {
                this.style.backgroundColor = document.getElementById("colorPicker").value;
            };
            addRow.appendChild(box);
        }
    }

    currGrid.appendChild(addRow);
    numRows++;
}
//Adds a column
function addC() 
{
    alert("Clicked Add Col")
}

//Removes a row
function removeR() 
{
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() 
{
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected() 
{
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill() 
{
    alert("Clicked Fill All")
}

function clearAll() 
{
    alert("Clicked Clear All")
}

function fillU() 
{
    alert("Clicked Fill All Uncolored")
}