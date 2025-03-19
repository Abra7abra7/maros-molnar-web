import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    // Validate the request
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Chýbajú povinné polia' },
        { status: 400 }
      );
    }

    // In a real application, you would send an email or save to a database here
    // For demonstration purposes, we'll just log the data
    console.log('Contact form submission:', { name, email, phone, message });

    // Here you would typically integrate with an email service like SendGrid, Mailgun, etc.
    // Example: await sendEmail({ name, email, phone, message });

    return NextResponse.json(
      { success: true, message: 'Správa bola úspešne odoslaná' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Nastala chyba pri spracovaní formulára' },
      { status: 500 }
    );
  }
}
