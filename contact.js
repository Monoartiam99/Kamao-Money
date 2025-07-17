function doPost(e) {
  var sheet = SpreadsheetApp.openById("1HYyRTTa39bqSi1UcqE9yGPhUkgwMCSMbf17g1QbLSLw").getSheetByName("Sheet1");
  sheet.appendRow([
    e.parameter.name,
    e.parameter.phone,
    e.parameter.email,
    new Date()
  ]);
  return ContentService.createTextOutput("Success");
}
