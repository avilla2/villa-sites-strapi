module.export = {
	async afterCreate(event) {
		const { result } = event;
		try {
			console.log(result);
			await strapi.plugins['email'].services.email.send({
				to: result.data.SendTo,
				from: result.data.SendFrom,
				subject: result.data.Subject,
				replyTo: result.data.Email,
				text: result.data.Message
			});
		} catch(error) {
			console.log(error);
		}
	}
}

