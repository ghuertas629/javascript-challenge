// from data.js
var tableData = data;

// YOUR CODE HERE!
// Declare variable for table body
var tbody = d3.select("tbody")

// Define table create function
function createTable(data) {

    // Clears table prior to rendering again
    tbody.html("");

    // Loop through each row of data using for each and append to table body
    data.forEach((dataRow) => {
        var row = tbody.append("tr");

        // Loop through and obtain the values in each row and append value to table data
        Object.values(dataRow).forEach((value) => {
            var cell = row.append("td");
            cell.text(value);
        });
    })
}

// Display tableData using createTable function
createTable(tableData);

// Declare variables for user input and filter table button
var dateUserInput = d3.select("#datetime")
var filterButton = d3.select("#filter-btn")

// Define filter table function that will filter the UFO sighting data using the user input date
function filterTable(){
    // Prevent page from reloading
    d3.event.preventDefault();
    // Declare variable to store the filtered data
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === dateUserInput.property("value"))
    // Display filteredData using createTable function
    createTable(filteredData);
}

// Run filterTable function upon clicking filter table button
filterButton.on("click", filterTable)