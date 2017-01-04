Accounts.emailTemplates.siteName = "Transsafe";
Accounts.emailTemplates.from = "Transsafe <admin@transsafe.com>"

Accounts.emailTemplates.verifyEmail = {
	subject() {
		return "Transsafe Verify Your Email address";
	},
	text(user, url) {
		let emailAddress = user.emails[0],
				urlWithoutHash = url.replace('#/', ''),
				supportEmail = "support@godun.com",
				emailBody = `To verify yout email address ${emailAddress} visit the following link:\n\n${urlWithoutHash}\n\n If you did not request this  verification, please ignore this email. If you feel something is wrong, please contact our support team: ${supportEmail}.`;

			return emailBody;
	}
}