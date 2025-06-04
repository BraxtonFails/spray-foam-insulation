import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Load environment variables
const EMAIL_USER = process.env.EMAIL_USER || 'sprayfoam@rocketmail.com';
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD || 'wirbiglxxfrpfoup';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, projectType } = body;

    console.log('Attempting to send email with data:', { name, email, phone, projectType });
    console.log('Environment variables:', {
      NODE_ENV: process.env.NODE_ENV,
      hasEmailUser: !!EMAIL_USER,
      emailUserValue: EMAIL_USER,
      hasEmailPassword: !!EMAIL_PASSWORD
    });

    if (!EMAIL_USER || !EMAIL_PASSWORD) {
      console.error('Missing email configuration:', {
        hasEmailUser: !!EMAIL_USER,
        hasEmailPassword: !!EMAIL_PASSWORD
      });
      throw new Error('Email configuration is missing');
    }

    // Create Rocketmail SMTP transporter with updated settings
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true, // use SSL
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      }
    });

    // Email content with simpler configuration
    const mailOptions = {
      from: EMAIL_USER,
      to: EMAIL_USER,
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Project Type: ${projectType}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Project Type:</strong> ${projectType}</p>
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
        message: "Failed to send message. Please try again or contact us directly.", 
        error: error.message
      },
      { status: 500 }
    );
  }
}
