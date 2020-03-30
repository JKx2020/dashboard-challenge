// 1. Use the D3 library to read in `samples.json`.
d3.json("samples.json").then(samples => console.log(samples));


d3.json("samples.json").then((collection)=>{
	collection.samples.forEach((sample) => {
		console.log(sample.otu_ids);
	});
});

// console.log(data.metadata)
// for (var key in data) {
//   Object.keys(data);
//   console.log(key);
// };


// var keys = d3.keys(data.metadata);
// console.log(keys);
// var keys = []
// Object.keys(data).forEach(key =>
//   keys.append(key));
//   ;
// console.log(keys);

// var data = d3.json("samples.json").then(function(data) {
//     console.log(data)

//  });

// console.log(Object.keys(data));

//create button handler for the di ashboard to refresh all graphs on page

//populate the drop down with the sample IDs
// var data = d3.json("names.json").then(function(data) {
//   data.forEach(console.log(data))
// });

// JSON.stringify(data);

// var sel = document.getElementById('selDataSet');

// for (var i = 0; i < names.length; i++) {
//   var option = document.createElement('option');
//   option.value = names[i];
//   sel.appendChild(option);
// };

// //Submit Button Handler for the dropdown
// function handleSubmit() {
//   //prevent the page from reloading
//   d3.event.preventDefault();

//   //select the input value
//   var testSubject = d3.select("#selDataset").node().value;
//   console.log(testSubject);

//   //clear the input value
//   d3.select("#selDataset").node().value = "";

//   //Build the plots with the testsubject data
//   buildCharts(testSubject);
//   buildDemoInfo(testSubject);
//   };

// // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

// // * Use `sample_values` as the values for the bar chart.
// // * Use `otu_ids` as the labels for the bar chart.
// // * Use `otu_labels` as the hovertext for the chart.

// //create the barchart & bubble functions
// function buildCharts() {
//   d3.json("samples.json").then(function(data) {

//     //grab the values for the charts and lables
//     var sampleValues = data.samples.sample_values;
//     var otuIds = data.samples.otu_ids;
//     var otuLables = data.samples.otu_lables;

//     // 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
//     var barTrace = {
//       type: "bar",
//       orientation: "h",
//       x: sampleValues,
//       y: otuIds,
//       hovertext: otuLables,
//       };
    
//     var barLayout = {
//       title: "Top 10 OTU's found in the Test Subject"
//       };

//     Plotly.newPlot("bar", barTrace, barLayout);

//     // 3. Create a bubble chart that displays each sample.
//     var bubbleTrace = {
//       type: "bubble",
//       x: otuIds,
//       y: sampleValues,
//       mode: 'markers',
//       marker: {
//         size: sampleValues,
//         color: otuIds},
//       text: otuLables
//     };

//     var bubbleLayout = {
//       title: "OTUs Most Commonly Found in Belly Buttons"
//     };

//     Plotly.newPlot("bubble", bubbleLayout, bubbleLayout);
//   });
// };

// // 4. Display the sample metadata, i.e., an individual's demographic information.

// //create filter function to filter the metadata objects on the selected test subject
 
// function filterSamples(sample) {
//   return sample.id === testSubject;
// }

// var panelRow = d3.select("panel");

// function buildDemoInfo(metadata) {

//    //grab the metadata values by filtering the objects by testSubject id choosen from dropdown
//    var testData = metadata.filter(filterSamples);
//    console.log("The metadata is:", testData);

//    testData.forEach(info => {
//      var row = panelRow.append("panel-body");

//      Object.entries(info).forEach(([key, value])=> row.text(key, ":", value));

//      });
//    };

// // Add event listener for submit button
// d3.select("#selDataset").on("click", handleSubmit);

// // 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// // ![hw](Images/hw03.png)

// // 6. Update all of the plots any time that a new sample is selected.