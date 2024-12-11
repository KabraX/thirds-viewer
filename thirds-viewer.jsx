// Asegúrate de que hay un documento abierto
if (app.documents.length > 0) {
  var doc = app.activeDocument;
  var artboards = doc.artboards;
  var artboardNames = [];

  // Crear el cuadro de diálogo
  var dlg = new Window("dialog", "Tercios");
  dlg.alignChildren = "fill"; // Alinear los elementos del diálogo

  // Crear un panel para las opciones de artboards
  var panel = dlg.add("panel", undefined, "Selecciona Artboards");
  panel.alignChildren = "left"; // Alinear los elementos del panel a la izquierda

  // Agregar casillas de verificación para cada artboard
  for (var i = 0; i < artboards.length; i++) {
    var artboardName = artboards[i].name;
    artboardNames.push(artboardName);
    panel.add("checkbox", undefined, artboardName);
  }

  // Botón para aplicar las reglas de tercios
  var btnGroup = dlg.add("group");
  btnGroup.alignment = "center"; // Centrar el grupo de botones
  var applyButton = btnGroup.add("button", undefined, "Aplicar");
  var cancelButton = btnGroup.add("button", undefined, "Cancelar");

  // Función para aplicar las reglas de tercios a los artboards seleccionados
  applyButton.onClick = function () {
    for (var j = 0; j < artboards.length; j++) {
      if (panel.children[j].value) {
        // Verificar si la casilla está seleccionada
        drawGuides(artboards[j]);
      }
    }
    dlg.close(); // Cerrar el diálogo después de aplicar
  };

  // Cerrar el diálogo si se presiona cancelar
  cancelButton.onClick = function () {
    dlg.close();
  };

  dlg.show(); // Mostrar el cuadro de diálogo
} else {
  alert("Por favor, abre un documento en Illustrator.");
}

// Función para dibujar las guías en el artboard seleccionado
function drawGuides(artboard) {
  var artboardRect = artboard.artboardRect; // [left, top, right, bottom]

  var width = artboardRect[2] - artboardRect[0]; // ancho del artboard
  var height = artboardRect[1] - artboardRect[3]; // altura del artboard

  var verticalThird1 = artboardRect[0] + width / 3; // 1/3 desde la izquierda
  var verticalThird2 = artboardRect[0] + (2 * width) / 3; // 2/3 desde la izquierda
  var horizontalThird1 = artboardRect[1] - height / 3; // 1/3 desde la parte superior
  var horizontalThird2 = artboardRect[1] - (2 * height) / 3; // 2/3 desde la parte superior

  // Dibujar guías verticales
  drawGuide(verticalThird1, artboardRect[1], verticalThird1, artboardRect[3]); // Guía vertical izquierda
  drawGuide(verticalThird2, artboardRect[1], verticalThird2, artboardRect[3]); // Guía vertical derecha

  // Dibujar guías horizontales
  drawGuide(
    artboardRect[0],
    horizontalThird1,
    artboardRect[2],
    horizontalThird1
  ); // Guía horizontal superior
  drawGuide(
    artboardRect[0],
    horizontalThird2,
    artboardRect[2],
    horizontalThird2
  ); // Guía horizontal inferior
}

// Función para dibujar una guía en el documento
function drawGuide(x1, y1, x2, y2) {
  var guideLine = app.activeDocument.pathItems.add();
  guideLine.setEntirePath([
    [x1, y1],
    [x2, y2],
  ]);
  guideLine.guides = true; // Convertir en guía
}
