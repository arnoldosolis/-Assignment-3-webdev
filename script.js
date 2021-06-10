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
            this.style.backgroundColor = document.getElementById("selectedID").value;
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
                this.style.backgroundColor = document.getElementById("selectedID").value;
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
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");
    // Stores Column that will be appended to the table element
    let addColumn = document.querySelectorAll("tr");

    //  Amount of rows
    let currNumOfRows = 0;

    // Global variable is set to 0 so this is needed
    if (numRows === 0)
    {
        addR();
        currNumOfRows++;
    }

    for (let i = 0; i < numRows; i++)
    {
        var box =  document.createElement("td");
        box.onclick = function()
        {
            this.style.backgroundColor = document.getElementById("selectedID").value;
        };
        addColumn[currNumOfRows].appendChild(box);

        currNumOfRows++;
    }
    numCols++;
}

//Removes a row
function removeR() 
{
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");

    // Delete last inserted row
    currGrid.deleteRow(numRows-1);

    numRows--;
}
//Remove a column
function removeC() 
{
    // Gets table element from the DOM
    let currGrid = document.getElementById("grid");

    // Gets all rows from the grid
    let currNumOfRowsInGrid = document.querySelectorAll("tr");

    let currNumOfRows = 0;

    for (let i = 0; i < numRows; i++)
    {
        currNumOfRowsInGrid[currNumOfRows].removeChild(currNumOfRowsInGrid[currNumOfRows].lastChild);
        // amount of rows deleted
        currNumOfRows++;
    }
    
    numCols--;
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