const openai = require('../config/openai');
const InputPrompt = require('../model/inputModel');

module.exports = {
    async sendText(request, response) {

        const openAI = openai.configuration();
        const inputModel = new InputPrompt(request.body)
        try {
            const response = await openAI.createCompletion(openai.textCompletion(inputModel));
            return response.status(200).json({
                success: true,
                data: response.data.choices[0].text
            })
        }
        catch (error) {
            return response.status(500).json({
                success: false,
                error: error.response ? error.response.data : 'An error ocurred'
            })
        }

    }
}