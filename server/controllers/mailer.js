const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
  host: "mail.ecorvi.com",
  port: 587,
  //secure: false, // upgrade later with STARTTLS
  auth: {
    user: "samatha.kasireddy@ecorvi.com",
    pass: "mich@REG42",
  },
  tls: {
    rejectUnauthorized: false,
  },
  /*service: 'gmail',
 auth: {
   user: "samathagamidi@gmail.com",
   pass: "nlvgbpkrwguaglcn",
 },*/
  /*auth: {
     user: "***************@gmail.com",
     pass: "********",
   },*/
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
      //to: "samathagamidi@gmail.com",
      to: "samatha.kasireddy@ecorvi.com",
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
