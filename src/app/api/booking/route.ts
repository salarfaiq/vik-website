import { NextRequest, NextResponse } from "next/server";

// Google Apps Script Web App URL for Google Sheets
const SHEET_URL = process.env.GOOGLE_SHEET_URL || "";
const WHATSAPP_NOTIFY_NUMBER = "9647501116377";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // 1. Forward to Google Sheets via Apps Script
    if (SHEET_URL) {
      try {
        await fetch(SHEET_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } catch (sheetError) {
        console.error("Google Sheets error:", sheetError);
      }
    }

    // 2. Log the booking (visible in Vercel logs)
    console.log("=== NEW BOOKING ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("===================");

    // 3. Build WhatsApp notification URL for the guide
    const waMessage = encodeURIComponent(
      `New VIK Booking!\n\n` +
      `Adventure: ${data.adventure}\n` +
      `Dates: ${data.dates || "Flexible"}\n` +
      `Group: ${data.groupSize}\n` +
      `Accommodation: ${data.accommodation || "No preference"}\n` +
      `Name: ${data.firstName} ${data.lastName}\n` +
      `Email: ${data.email}\n` +
      `Phone: ${data.phone || "N/A"}\n` +
      `Country: ${data.country || "N/A"}\n` +
      `${data.message ? `Notes: ${data.message}` : ""}`
    );

    return NextResponse.json({
      success: true,
      message: "Booking received",
      // Return the WhatsApp URL so the admin dashboard can use it
      whatsappUrl: `https://wa.me/${WHATSAPP_NOTIFY_NUMBER}?text=${waMessage}`,
    });
  } catch (error) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process booking" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "VIK Booking API. POST to submit a booking.",
  });
}
