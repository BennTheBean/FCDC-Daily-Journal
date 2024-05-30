# FCDC Formatter

FCDC Formatter is a Google Sheets Script designed to tidy up raw data from our cabin journal Google Form in the response Google Sheet.

## Installation

1. Copy the code from Formatter.gs into an Apps Script for the response sheet.
2. On line 3, change 'Test' to the name of your sheet: 'Example-Name'.
3. On lines 31 - 37, change the group names accordingly.
4. Click the Triggers button in the far-left menu (Clock icon).
5. Click the Add Trigger button in the bottom right corner.
6. For "Choose which function to run," select onFormSubmit.
7. For "Select event type," select On form submit.

## Usage

When a new form submission is received, the script will automatically format and sort it.

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
