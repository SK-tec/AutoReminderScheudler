const nodemailer = require("nodemailer");
const contactEmail = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_TEST,
    pass: process.env.EMAIL_TEST_APP_PWD,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const createEnquiry = async (req, res) => {
  try {
    console.log(req.body);
    const name = req.body.fullName;
    const email = req.body.email;
    const message = req.body.query;
    const mail = {
      from: name,
      to: "kidzee.wbs@gmail.com",
      subject: "Kidzee Enquiry",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  } catch (error) {
    res.json(500).json({ message: error.message });
  }
};
const remainderMail = async (req, res) => {
  try {
  } catch (error) {
    res.json(500).json({ message: error.message });
  }
};

module.exports = { createEnquiry, remainderMail };
