module.exports = app => {

	const trainner = app.app.server.controller.trainner

	app.get('/train', (req,res) => {

		res.render('train')
	})

	app.post('/train', (req, res) =>{
		
		try{

			console.log('Add train', req.body)
			trainner.addTrain(
				req.body.languages, 
				req.body.trainText, 
				req.body.context, 
				req.body.filePath
			)
			res.status(200).redirect('/train')
		}catch(e){
			console.log(e)
		}
	})

	app.get('/answer', (req,res) => {

		res.render('answer', {
				context: ''
		})
	})

	app.post('/answer', (req, res) =>{
		
		try{

			console.log('Add answer', req.body)
			trainner.addAnswer(
				req.body.languages, 
				req.body.answerText, 
				req.body.context, 
				req.body.filePath
			)
			res.status(200).redirect('/answer')
		}catch(e){
			console.log(e)
		}
	})
}
