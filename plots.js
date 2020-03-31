// 1. Use the D3 library to read in `samples.json`.
var data = "samples.json";
d3.json(data).then(samples => console.log(samples));


// 2. Populate the drop down with the sample ID Names

d3.json(data).then((collection)=>{
	collection.names.forEach((name) => {

    //create the new option element using the sample.names
    var option = document.createElement("option");

    option.text = name;
    option.value = name;

    //append the new option to the selDataset element
    var sel = document.getElementById("selDataset");
    sel.appendChild(option);
	});
});


// 3. call 'optionChanged' when a change is made to the dropdown
d3.selectAll("#selDataset").on("change", optionChanged);


// 4. Create the optionChanged function to update the graphs when a change is made
function optionChanged() {

  //select the dropdown value selected
  var testSubject = d3.select("#selDataset").property("value");
  
  //loop through the data, filter the data by the selected ID and cteate the graphs
    d3.json(data).then((collection)=>{
    collection.samples.forEach((object) => {
      
      if (object.id === testSubject) {
        console.log(object.id);

        //build the bar chart
        var barData = [{
          y: String(object.otu_ids.slice(0,10)),
          x: object.sample_values.slice(0,10),
          type: "bar",
          orientation: "h",
          hovertext: object.otu_labels.slice(0,10)
        }];

        var barLayout = {
          title: "Top 10 OTU's found in the Test Subject"
          };

        Plotly.newPlot("bar", barData, barLayout);


        //build the bubble chart
        var bubbleData = [{
          y: object.sample_values,
          x: object.otu_ids,
          mode: "markers",
          marker: {
            size: object.sample_values,
            color: object.otu_ids},
          type: "bubble",
          text: object.otu_labels
        }];

        Plotly.newPlot("bubble", bubbleData);
        };
      });
    });
  //loop through the data, filter the data by the selected ID and cteate the metadata table
  d3.json(data).then((collection)=>{
    collection.samples.forEach((object) => {
      
      if (object.id === testSubject) {
        console.log(object.id);

        //build out the metadata table
        var barData = [{
          y: String(object.otu_ids.slice(0,10)),
          x: object.sample_values.slice(0,10),
          type: "bar",
          orientation: "h",
          hovertext: object.otu_labels.slice(0,10)
        }];

        };
      });
    });


};


// 4. Display the sample metadata, i.e., an individual's demographic information.

//create filter function to filter the metadata objects on the selected test subject
 
function filterSamples(sample) {
  return sample.id === testSubject;
}

var panelRow = d3.select("panel");

function buildDemoInfo(metadata) {

   //grab the metadata values by filtering the objects by testSubject id choosen from dropdown
   var testData = metadata.filter(filterSamples);
   console.log("The metadata is:", testData);

   testData.forEach(info => {
     var row = panelRow.append("panel-body");

     Object.entries(info).forEach(([key, value])=> row.text(key, ":", value));

     });
   };


// // 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// // ![hw](Images/hw03.png)

// // 6. Update all of the plots any time that a new sample is selected