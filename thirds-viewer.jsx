// Make sure a document is open
if (app.documents.length > 0) {
  var doc = app.activeDocument;
  var artboards = doc.artboards;

  // Create the dialog
  var dlg = new Window("dialog", "Thirds-Viewer");
  dlg.alignChildren = "fill"; // Align dialog elements

  // Create a panel for artboard options
  var panel = dlg.add("panel", undefined, "Select Artboards");
  panel.alignChildren = "left"; // Align panel elements to the left

  // Add space between title and checkboxes
  panel.add("statictext", undefined, " "); // Empty space

  // Add checkboxes for each artboard
  for (var i = 0; i < artboards.length; i++) {
    var artboardName = artboards[i].name;
    panel.add("checkbox", undefined, artboardName);
  }

  // Button to apply the rules of thirds
  var btnGroup = dlg.add("group");
  btnGroup.alignment = "center"; // Center the button group
  var applyButton = btnGroup.add("button", undefined, "Apply");
  var cancelButton = btnGroup.add("button", undefined, "Cancel");

  // Function to apply rules of thirds to selected artboards
  applyButton.onClick = function () {
    for (var j = 0; j < artboards.length; j++) {
      if (panel.children[j + 1].value) {
        // Check if the checkbox is selected (adjust index)
        drawGuides(artboards[j]);
      }
    }
    dlg.close(); // Close the dialog after applying
  };

  // Close the dialog if cancel is pressed
  cancelButton.onClick = function () {
    dlg.close();
  };

  dlg.show(); // Show dialog
} else {
  alert("Please, open a Adobe Illustartor document.");
}

// Function to draw the guides on the selected artboard
function drawGuides(artboard) {
  var artboardRect = artboard.artboardRect; // [left, top, right, bottom]

  var width = artboardRect[2] - artboardRect[0]; // Artboard width
  var height = artboardRect[1] - artboardRect[3]; // Artboard height

  var verticalThird1 = artboardRect[0] + width / 3; // 1/3 from the left
  var verticalThird2 = artboardRect[0] + (2 * width) / 3; // 2/3 from the right
  var horizontalThird1 = artboardRect[1] - height / 3; // 1/3 from the top
  var horizontalThird2 = artboardRect[1] - (2 * height) / 3; // 2/3 from the top

  // Draw vertical guides
  drawGuide(verticalThird1, artboardRect[1], verticalThird1, artboardRect[3]); // Left vertical guide
  drawGuide(verticalThird2, artboardRect[1], verticalThird2, artboardRect[3]); // Right vertical guide

  // Draw horizontal guides
  drawGuide(
    artboardRect[0],
    horizontalThird1,
    artboardRect[2],
    horizontalThird1
  ); // Upper horizontal guide
  drawGuide(
    artboardRect[0],
    horizontalThird2,
    artboardRect[2],
    horizontalThird2
  ); // Lower horizontal guide
}

// Function to draw a guide on the document
function drawGuide(x1, y1, x2, y2) {
  var guideLine = app.activeDocument.pathItems.add();
  guideLine.setEntirePath([
    [x1, y1],
    [x2, y2],
  ]);
  guideLine.guides = true; // Convert into guide
}
