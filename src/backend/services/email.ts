import * as sgMail from "@sendgrid/mail";

type MailMessage = {
  to: string;
  from: string;
  subject: string;
  templateId: string;
  dynamicTemplateData: any;
};

const sendMail = async (message: MailMessage) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  try {
    await sgMail.send(message);
  } catch (err: any) {
    console.log(err.response.body.errors);
  }
};

const sendEmailConfirmation = (
  toEmail: string,
  token: string,
  username: string
) => {
  console.log("http://localhost:3000/api/email-confirmation?token=" + token);

  return sendMail({
    from: "inside@brydgehq.co",
    to: toEmail,
    subject: "Brydge Email Confirmation",
    templateId: "d-7cbe184462c445adaa5c660765e3f48b",
    dynamicTemplateData: {
      linkUrl: "http://localhost:3000/api/email-confirmation?token=" + token,
      username: username,
    },
  });
};

// const sendExternalMemberInvite = (toEmail: string) => {
//   return sendMail({
//     from: "narenderv7@gmail.com",
//     to: "brandonlostboy@gmail.com",
//     subject: "You've been invited!",
//     html: "You have been invited to join brydge",
//   });
// };

const EmailService = { sendEmailConfirmation };

export default EmailService;
