const XLSX = require('xlsx')//importing the excel library
function getData()
{
    const workbook = XLSX.readFile('testdata/applicationData.xlsx')
    const sheet = workbook.Sheets['loginpage']//select a particular sheet
    const data = XLSX.utils.sheet_to_json(sheet)//convert excel data into json
    return data
}
module.exports={getData}