// 1. Use the D3 library to read in `samples.json`.

// var data = d3.json("samples.json").then(function(data) {
//     console.log(data)
//  });


// console.log(data.metadata);


// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// * Use `sample_values` as the values for the bar chart.
// * Use `otu_ids` as the labels for the bar chart.
// * Use `otu_labels` as the hovertext for the chart.

//Submit Button Handler for the dropdown
function handleSubmit() {
  //prevent the page from reloading
  d3.event.preventDefault();

  //select the input value
  var testSubject = d3.select("#selDataset").node().value;
  console.log(testSubject);

  //clear the input value
  d3.select("#selDataset").node().value = "";

  //Build the plot with the testsubject data
  buildBarChart(testSubject);
};


// 3. Create a bubble chart that displays each sample.

// * Use `otu_ids` for the x values.

// * Use `sample_values` for the y values.

// * Use `sample_values` for the marker size.

// * Use `otu_ids` for the marker colors.

// * Use `otu_labels` for the text values.

// ![Bubble Chart](Images/bubble_chart.png)




// 4. Display the sample metadata, i.e., an individual's demographic information.

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// ![hw](Images/hw03.png)

// 6. Update all of the plots any time that a new sample is selected.