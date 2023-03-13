import sendGrid from "@sendgrid/mail";

interface SendEmail {
  from: string;
  to: string | string[]; // send one or multiple emails
  subject: string;
  text?: string;
  html?: string;
}

export const sendEmail = async ({
  from,
  to,
  text = "",
  html,
  subject,
}: SendEmail): Promise<boolean> => {
  try {
    await sendGrid.send({
      from: process.env.DEFAULT_EMAIL || from,
      to,
      text,
      html,
      subject,
    });

    return true; // successfully sent
  } catch (err: any) {}

  return false;
};
