# thirds-viewer: Rule of Thirds Script for Adobe Illustrator

This script helps users create guides for the Rule of Thirds in Adobe Illustrator. It allows you to select which artboards to apply the guides to through a simple dialog box.

## Features

- Displays a dialog box with a list of all artboards in the active document.
- Allows users to select multiple artboards using checkboxes.
- Automatically draws horizontal and vertical guides at the one-third and two-thirds positions of the selected artboards.

## Requirements

- Adobe Illustrator (version compatible with ExtendScript)
- Basic knowledge of how to run scripts in Adobe Illustrator

## Installation

1. Copy the script code into a text editor.
2. Save the file with a `.jsx` extension (e.g., `RuleOfThirds.jsx`).
3. Place the file in the Illustrator scripts folder:
   - **Windows**: `C:\Program Files\Adobe\Adobe Illustrator <version>\Presets\<language>\Scripts`
   - **Mac**: `/Applications/Adobe Illustrator <version>/Presets/<language>/Scripts`
4. Restart Adobe Illustrator if it was open.

## Usage

1. Open Adobe Illustrator and create or open a document with multiple artboards.
2. Run the script by navigating to `File > Scripts > RuleOfThirds`.
3. In the dialog box that appears, select the artboards where you want to apply the guides.
4. Click "Apply" to draw the guides on the selected artboards or "Cancel" to exit without making changes.

## Code Overview

The script performs the following tasks:

- Checks if there is an open document.
- Creates a dialog box with checkboxes for each artboard.
- Draws horizontal and vertical guides at one-third and two-thirds positions based on user selection.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by design principles such as the Rule of Thirds, which helps create balanced compositions in visual arts.
