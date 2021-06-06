/* This script is designed for the browser console, it pulls all LinkedIn
links from the current tab and outputs them to a new popup window */

var links = document.querySelectorAll("a"); // Extract all links in current tab.
var lnk_str = [];

// Cleans links and pushes hyperlinks into lnk_str array.
var i;
var hyper;
for (i=0; i<links.length; i+=1) {
  hyper = links[i].href;
  lnk_str.push([hyper]);
}

// Function to show links in a separate tab if they match the search query.
function show_links() {
  // Seeding table with header.
  var table = "<table><thead><th>LinkedIn Links</th></thead><tbody>";
  // Processing of all links in lnk_str array.
  var j;
  for (j=0; j<lnk_str.length; j+=1) {
    // Only adding search string matches to the table. Change linkedin to
    // string of choice.
    if (lnk_str[j][0].match("linkedin.com")!==null) {
      table += "<tr><td>"+ (lnk_str[j][0]).link(lnk_str[j][0]) +"</td></tr>";
    }
  }
  // New window generation and table display.
  var output = window.open("");
  output.document.write(table);
}
show_links();
