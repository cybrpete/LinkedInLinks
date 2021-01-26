/* This script is designed for the browser console, it pulls all LinkedIn
links from the current tab and outputs them to a new popup window. This script
builds on the previous LinkedInLinks.js script by providing a column for the
name and a column for the number of link occurrences in the page. */

var links = document.querySelectorAll("a"); // Extract all links in current tab.
var lnk_str = [];

// Cleans links and pushes hyperlinks and cleaned name into lnk_str array.
var i;
var linkname;
var clinkname;
var hyper;
for (i=0; i<links.length; i+=1){
  linkname = links[i].textContent;
  // Global modifier to replce all whitespaces, followed by trim.
  clinkname = linkname.replace(/\s+/g, " ").trim();
  hyper = links[i].href;
  lnk_str.push([clinkname, hyper]);
}

// Function to show links in a separate tab if they match the search query.
function make_table() {
  // Dictionary to hold counts of link occurrences.
  var counts = {};
  // Seeding table with headers.
  var table = "<table><thead><th>Name</th><th>Link</th>" +
  "<th>Occurrences</th></thead><tbody>";
  // Processing of all links in lnk_str array.
  var j;
  for (j=0; j<lnk_str.length; j+=1) {
    // Only adding search string matches to the table. Change linkedin to
    // string of choice.
    if (lnk_str[j][1].match("linkedin")!==null) {
      // Populating dictionary of counts.
      if (lnk_str[j][1] in counts) {
        counts[lnk_str[j][1]] += 1;
      } else {
        counts[lnk_str[j][1]] = 1;
      }
      table += "<tr><td>" + lnk_str[j][0] + "</td><td>" + lnk_str[j][1] +
      "</td><td>" + counts[lnk_str[j][1]] + "</td></tr>";
    }
  }
  // New window generation and table display.
  var output = window.open("");
  output.document.write(table);
}
make_table();
