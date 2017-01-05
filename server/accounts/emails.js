Accounts.emailTemplates.siteName = "Transsafe";
Accounts.emailTemplates.from = "Transsafe <admin@transsafe.com>"

Accounts.emailTemplates.verifyEmail = {
	subject() {
		return "Transsafe Verify Your Email address";
	},
	text(user, url) {
		let emailAddress = user.emails[0].address,
				urlWithoutHash = url.replace('#/', ''),
				supportEmail = "transsafeproject@gmail.com",
				emailBody = `Щоб підтвердити ваш ${emailAddress} перейдіть по наступному посиланню:\n\n${urlWithoutHash}\n\n Якщо ви не знаєте джерело цього повідомлення - ігноруйте його. Якщо ви відчули, що щось не так, повідомте: ${supportEmail}.`;

			return emailBody;
	}
}