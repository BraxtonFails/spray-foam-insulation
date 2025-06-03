import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    console.log('Attempting to send email with data:', { name, email, phone, service });
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error('Missing email configuration:', {
        hasEmailUser: !!process.env.EMAIL_USER,
        hasEmailPassword: !!process.env.EMAIL_PASSWORD
      });
      throw new Error('Email configuration is missing');
    }

    // Create Rocketmail SMTP transporter with updated settings
    const transporter = nodemailer.createTransport({
      service: 'Yahoo',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      }
    });

    // Email content with simpler configuration
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Service: ${service}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    };

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent successfully:', info.messageId);
      
      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (sendError: any) {
      console.error('Failed to send email:', {
        error: sendError.message,
        code: sendError.code,
        response: sendError.response
      });
      throw sendError;
    }
  } catch (error: any) {
    console.error('Error in email route:', error);
    
    return NextResponse.json(
      { 
        message: "Failed to send email", 
        error: error.message
      },
      { status: 500 }
    );
  }
}
