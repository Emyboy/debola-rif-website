import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});
export default async function handler(req, res) {
  if (req.method == 'POST') {
    const { email, name, phoneNumber, subject, message } = req.body;

    try {
      const info = await transporter.sendMail({
        from: `"RIF Contact Form" <${process.env.EMAIL}>`,
        to: 'contact@rif.ng',
        subject: subject,
        html: `<div>
        <p><b>Sender Name:</b> ${name} </p>
        ${phoneNumber && `<p><b>Sender Phone Number:</b> ${phoneNumber} </p>`}
        <p><b>Sender Email:</b> ${email} </p>
        <h4 style="text-align:center; margin-top: 1rem">Message</h4>
        <p>${message} </p>
      </div>`,
      });

      return res.status(200).json({
        message: 'success',
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        message: 'An error occurred',
      });
    }
  }
}
