const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({ region: "ap-south-1" });

exports.handler = async (event) => {
    try {
        console.log("Event:", event);

        const body = JSON.parse(event.body || "{}");
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "Missing required fields" }),
            };
        }

        const params = {
            Destination: {
                ToAddresses: ["rohitbhupat300@gmail.com"], // your verified email
            },
            Message: {
                Body: {
                    Text: {
                        Data: `You got a new message from your portfolio:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
                    },
                },
                Subject: { Data: "New Portfolio Contact Form Submission" },
            },
            Source: "rohitbhupat300@gmail.com", // must be verified in SES
            ReplyToAddresses: [email],
        };

        const command = new SendEmailCommand(params);
        await sesClient.send(command);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST",
                "Access-Control-Allow-Headers": "Content-Type",
            },
            body: JSON.stringify({ success: true, message: "Email sent successfully!" }),
        };
    } catch (error) {
        console.error("Error sending email:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email" }),
        };
    }
};

// this is for testing to check whether the backend ci cd is working or not