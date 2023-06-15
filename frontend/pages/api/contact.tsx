import nodemailer, { SendMailOptions } from 'nodemailer';

import type { NextApiRequest, NextApiResponse } from 'next/types';
import { ContactSchema } from 'components/Contact/types';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const MAIL_USERNAME = process.env.NEXT_MAIL_USERNAME;
  const MAIL_PASSWORD = process.env.NEXT_MAIL_PASSWORD;
  const REDIRECT_EMAIL = process.env.NEXT_REDIRECT_EMAIL;

  const body: ContactSchema = req.body;
  const { firstName, lastName, email, phone, subject, message } = body;

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    // host: 'mail.hover.com',
    port: 465,
    auth: {
      user: MAIL_USERNAME,
      pass: MAIL_PASSWORD
    }
  });

  const mailPackage: SendMailOptions = {
    from: body.email,
    to: REDIRECT_EMAIL,
    subject: subject,
    html: `<br>${message}
            <br><br><br><b>From:</b> ${email}
            <br><b>Name:</b> ${firstName} ${lastName}
            <br><b>Phone Number:</b> ${phone}`
  };

  try {
    await transporter.sendMail(mailPackage);
    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(400).json({ message: 'Message sent fail' });
  }
}
