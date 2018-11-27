const classifier = require('../../utils/classifier')

module.exports = app => {
	app.get('/train', (req,res) => {

		res.render('train')
	})

	app.post('/train', (req, res) =>{
		
		try{
			classifier.addTrain(req.body.trainText, req.body.context, req.body.filePath)
		}catch(e){
			console.log(e)
		}
		res.status(200).redirect('/train')
	})
}
