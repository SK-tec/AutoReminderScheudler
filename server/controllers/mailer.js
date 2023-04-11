const cron = require("node-cron");
const nodemailer = require("nodemailer");
const Student = require("../models/student");

const moment = require("moment");

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

const feeInfo = async () => {
  try {
    const dueFeeInfo = await Student.find({}, [
      "dueDate",
      "dueFee",
      "installments",
      "email",
    ]);
    const currentDate = moment(new Date()).format("MM/DD/YYYY");
    let reminderDate = "";
    const recipientList = [];
    dueFeeInfo.map((record) => {
      reminderDate = moment(record.dueDate)
        .subtract(14, "days")
        .format("MM/DD/YYYY");

      reminderDate == currentDate
        ? recipientList.push(record.email)
        : console.log("Date Not matched");
    });
    console.log(recipientList);
    mailScheduler(recipientList, currentDate);
  } catch (error) {
    console.log(error);
  }
};
const mailScheduler = (recipientList, currentDate) => {
  const dueDate = moment(new Date(currentDate))
    .add(14, "days")
    .format("MM/DD/YYYY");
  const remainderMail = {
    from: process.env.EMAIL_TEST,
    to: recipientList,
    subject: "Fee Reminder",
    html: getHTMLTemplateString(dueDate),
    attachments: [
      {
        filename: "Kidzee_logo.png",
        path: __dirname + "/Kidzee_logo.png",
        cid: "unique@logo",
      },
    ],
  };
  cron.schedule(`0 0 9 * * *`, () => {
    console.log("schedule Invoked");
    contactEmail.sendMail(remainderMail, function (err, info) {
      if (err) console.log("No recipient Found Today ");
      else console.log("Email sent successfully");
    });
  });
  // let task = cron.schedule(`0 0 9 * * *`, () => {
  //   console.log("schedule Invoked");
  //   contactEmail.sendMail(remainderMail, function (err, info) {
  //     if (err) console.log("No recipient Found Today ");
  //     else console.log("Email sent successfully");
  //   });
  // });
  //task.stop();
};

feeInfo();

function getHTMLTemplateString(dueDate) {
  // add your css and html inside the string below
  return `
  <div style="background-color:bisque;color:darkblue;">
    <h3>Dear Parents, It's a kind reminder for  your due Fee</h3>
    <p>Your 1st installment ₹6000 rupuees is due by ${dueDate}.Please pay the Fee on or before due date!</p>
    <h4>Thank you :)</h4>
    <img  style="width:250px;" src="cid:unique@logo"/></div>
    `;
}

module.exports = { createEnquiry };
