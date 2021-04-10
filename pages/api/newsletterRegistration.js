export default function handler(req, res){
	if(req.method === 'POST'){
		const {email} = req.body
		if(!email || !email.includes('@')){
			res.status(422).json({message:'Invalid email address'});
			return;
		}
		res.status(201).json({message:'Newsletter registration successful.'})
		return;
	}
}