import { NextRequest, NextResponse } from "next/server";

const SHEET_URL = process.env.GOOGLE_SHEET_URL || "";
const WHATSAPP_NOTIFY_NUMBER = "9647501116377";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Log the booking (always visible in Vercel logs)
    console.log("=== NEW BOOKING ===");
    console.log(JSON.stringify(data, null, 2));
    console.log("===================");

    // Forward to Google Sheets via Apps Script
    // Use redirect: "follow" and send as form data to handle Google's 302 redirect
    if (SHEET_URL) {
      try {
        // Google Apps Script redirects POST to GET on 302, losing the body.
        // Workaround: send data as URL params on a GET request instead.
        const params = new URLSearchParams();
        for (const [key, value] of Object.entries(data)) {
          params.append(key, String(value));
        }

        const response = await fetch(`${SHEET_URL}?${params.toString()}`, {
          method: "GET",
          redirect: "follow",
        });

        const text = await response.text();
        console.log("Sheet response:", response.status, text.substring(0, 200));
      } catch (sheetError) {
        console.error("Google Sheets error:", sheetError);
      }
    }

    // Build WhatsApp notification URL
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
