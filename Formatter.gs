function onFormSubmit(e) {
  //CHANGE FROM TEST TO NAME OF YOUR SHEET
  const sheet = e.source.getSheetByName('Test');
  const row = e.range.getRow();

  convertDateToDayOfWeek(e, sheet, row);
  rowColorChanger(e, sheet, row);
  formatYesText(e, sheet, row);

  autoSort(sheet);
}

function autoSort(sheet) {
  // Get the range of the data to sort
  const range = sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn());

  // Sort the data by the specified columns
  range.sort([
    { column: 2, ascending: false }, // Sorted by Week first
    { column: 3, ascending: true }, // Sorted by Group second
    { column: 1, ascending: true } // Sorted by Date last
  ]);
}

function rowColorChanger(e, sheet, row) {
  const columnEnd = sheet.getLastColumn();
  const keyword = sheet.getRange(row, 3).getValue(); // Get the keyword from the 3rd column

  // CHANGE GROUP NAMES AS NEEDED
  const keywordsColors = {
    'Red Group': '#e06666', // Red
    'Orange Group': '#f6b26b', // Orange
    'Yellow Group': '#ffd966', // Yellow
    'Green Group': '#93c47d', // Green
    'Blue Group': '#6d9eeb', // Blue
    'Purple Group': '#8e7cc3', // Purple
    'ACT': '#c0c0c0' // Silver
  };

  // Apply the background color if the keyword matches
  if (keywordsColors[keyword]) {
    sheet.getRange(row, 1, 1, columnEnd).setBackground(keywordsColors[keyword]);
  }
}

function formatYesText(e, sheet, row) {
  const columnEnd = sheet.getLastColumn();

  for (let col = 1; col <= columnEnd; col++) {
    let cell = sheet.getRange(row, col);
    let value = cell.getValue();
    if (value === 'Yes') {
      cell.setFontColor('white').setFontWeight('bold');
    }
  }
}

function convertDateToDayOfWeek(e, sheet, row) {
  const dateColumn = 1; // Date is in the first column
  const dayOfWeekColumn = 1; // Write the day of the week in the fifth column

  let dateValue = sheet.getRange(row, dateColumn).getValue();
  if (dateValue instanceof Date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = daysOfWeek[dateValue.getDay()];
    sheet.getRange(row, dayOfWeekColumn).setValue(dayOfWeek);
  }
}
