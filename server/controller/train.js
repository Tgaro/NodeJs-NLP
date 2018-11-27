const classifier = require('../../utils/classifier')

module.exports = app => {
	app.post('/train', (req, res) =>{
		try{
			classifier.addTrain(req.body.trainText, req.body.context, req.body.filePath)
		}catch(e){
			console.log(e)
		}
		res.status(200).redirect('/')
	})
}
