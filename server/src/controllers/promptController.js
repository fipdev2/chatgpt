const openai = require("../config/openai");
const inputPrompt = require("../model/inputModel");

module.exports = {
	async sendText(req, res){

		const openAI = openai.configuration();
		const inputModel = new inputPrompt(req.body);

		try {
			const response = await openAI.createCompletion(openai.textCompletion(inputModel));

			return res.status(200).json({
				success: true,
				data: response.data.choices[0].text
			})

		} catch (error) {

			return res.status(400).json({
				success: false,
				error: error.response
				? error.response.data
				: 'There was an issue on the server'
			})

		}
	}

}
