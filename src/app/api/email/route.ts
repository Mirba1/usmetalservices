import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    const { email, message, name } = await request.json();

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
        subject: `Message from ${name} (${email})`,
        text: `You have received a new message from ${name} (${email}). Check your admin panel for more details.\n\n Here is their message: \n\n${message}`,
    };

    // Confirmation email to the customer
    const mailOptionsToCustomer: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: email,
        subject: "Thank you for your message!",
        text: `Hi ${name},\n\nThank you for reaching out! We have received your message and will get in touch with you soon.\n\nBest regards,\nUS Metal Services`,
    };

    const sendMailPromise = (mailOptions: Mail.Options) =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        // Send the email to yourself
        await sendMailPromise(mailOptionsToYou);
        // Send the confirmation email to the customer
        await sendMailPromise(mailOptionsToCustomer);

        return NextResponse.json({ message: 'Your message was successfully sent \n\n We will get in touch with you soon' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}

