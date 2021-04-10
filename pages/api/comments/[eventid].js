export default function handler(req, res){
	const {eventid} = req.query

	if(req.method==='GET'){
		const data = [
			{id:'c1', name:'Max', comment:'I am First!'},
			{id:'c2', name:'Manuel', comment:'No, I am first!'},
		]
		res.status(201).json(data)
	}
	if(req.method==='POST'){
		const {email, name, comment} = req.body.commentData;
		if(!email||email.trim()===''||!email.includes('@')||!name||name.trim()===''||!comment||comment.trim() === ''){
			return res.status(422).json({message:'Invalid input'})
		}
		console.log(email, name, comment);
		return res.status(201).json({message:'Added comment'})
	}
}