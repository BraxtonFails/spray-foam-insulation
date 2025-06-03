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

    // Create Rocketmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.mail.yahoo.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      debug: true,
      tls: {
        rejectUnauthorized: false // Only for testing, remove in production
      }
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('Transporter verification successful');
    } catch (verifyError) {
      console.error('Transporter verification failed:', verifyError);
      throw verifyError;
    }

    // Email content
    const mailOptions = {
      from: {
        name: 'Spray Foam Insulation Contact Form',
        address: process.env.EMAIL_USER
      },
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
      `,
    };

    console.log('Attempting to send mail with options:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject
    });

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Message sent successfully:', {
      messageId: info.messageId,
      response: info.response
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed error sending email:', {
      errorMessage: error.message,
      errorName: error.name,
      errorStack: error.stack,
      errorCode: error.code
    });
    
    return NextResponse.json(
      { 
        message: "Failed to send email", 
        error: error.message,
        details: {
          name: error.name,
          code: error.code
        }
      },
      { status: 500 }
    );
  }
}
