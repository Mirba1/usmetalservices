import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, message, name, service, phone } = await request.json();

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD,
        },
    });

    // Email to yourself
    const mailOptionsToYou: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `New message from a Client`,
        html: `
        <div class="flex justify-center items-center">
            <h1 class="text-4xl">New Message from ${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Number:</strong> ${phone}</p>
            <p><strong>What they are interested in:</strong> ${service}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
            <p>Check your admin panel for more details.</p>
        </div>
    `,};

    // Confirmation email to the customer
    const mailOptionsToCustomer: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: email,
        subject: "Thank you for your message!",
        text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get in touch with you soon.\n\nBest regards,\nUS Metal Services`,
    };

        // Send the email to yourself
        await transport.sendMail(mailOptionsToYou);
        // Send the confirmation email to the customer
        await transport.sendMail(mailOptionsToCustomer);

}

