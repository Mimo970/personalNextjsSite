import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const body = await req.json();
  //   const { name, email, message } = body;

  console.log(body.name, body.email, body.message);

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: body.email,
      to: "adr9702297@gmail.com",
      subject: `New message from ${body.email}, subject: ${body.subject}`,
      text: body.message,
    });

    console.log("Email sent:", info); // Log successful email send
    NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error); // Log error
    NextResponse.json({ error: "Error sending email" });
  }
}

// import nodemailer from "nodemailer";

// export async function POST(req, res) {
//   try {
//     const body = await req.json();
//     const { name, email, message, subject } = body;

//     const transporter = nodemailer.createTransport({
//       service: "Gmail",
//       auth: {
//         user: process.env.GMAIL_USER,
//         pass: process.env.GMAIL_PASS,
//       },
//     });

//     const info = await transporter.sendMail({
//       from: email,
//       to: "adr9702297@gmail.com",
//       subject: `New message from ${name}: ${subject}`,
//       text: message,
//     });

//     console.log("Email sent:", info);
//     return res.status(200).json({ message: "Email sent successfully" });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return res.status(500).json({ error: "Error sending email" });
//   }
// }
