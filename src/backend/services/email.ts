import * as sgMail from "@sendgrid/mail";

type MailMessage = {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html: string;
};

const sendMail = async (message: MailMessage) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

  try {
    const sendResponse = await sgMail.send(message);
  } catch (err: any) {
    console.log(err.response.body.errors);
  }
};

const sendExternalMemberInvite = (toEmail: string) => {
  return sendMail({
    from: "narenderv7@gmail.com",
    to: "brandonlostboy@gmail.com",
    subject: "You've been invited!",
    html: "You have been invited to join brydge",
  });
};

const EmailService = { sendExternalMemberInvite };

export default EmailService;
