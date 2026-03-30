# Google Sheets Integration Setup

## Step 1: Create a Google Sheet
1. Go to https://sheets.google.com and create a new spreadsheet
2. Name it "VIK Bookings"
3. In Row 1, add these headers:
   `Timestamp | Adventure | Duration | Price | Dates | Flexible Dates | Group Size | Accommodation | First Name | Last Name | Email | Phone | Country | Notes`

## Step 2: Add the Apps Script
1. In your Google Sheet, go to **Extensions > Apps Script**
2. Delete any existing code and paste this:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.timestamp || new Date().toISOString(),
    data.adventure || "",
    data.duration || "",
    data.price || "",
    data.dates || "Flexible",
    data.flexibleDates || "No",
    data.groupSize || "",
    data.accommodation || "No preference",
    data.firstName || "",
    data.lastName || "",
    data.email || "",
    data.phone || "",
    data.country || "",
    data.message || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Click **Deploy > New deployment**
4. Select type: **Web app**
5. Set "Execute as": **Me**
6. Set "Who has access": **Anyone**
7. Click **Deploy** and copy the URL

## Step 3: Add the URL to Vercel
1. Go to https://vercel.com/your-project/settings/environment-variables
2. Add these environment variables:
   - `GOOGLE_SHEET_URL` = the Apps Script URL from Step 2
   - `NEXT_PUBLIC_SHEET_URL` = same URL (for client-side fallback)
3. Redeploy the project

## Done!
Every booking submission will now automatically appear as a new row in your Google Sheet.
