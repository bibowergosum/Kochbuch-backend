/** @format */

export const checkUrl = (req, res, next) => {
	const url = /* req.protocol + '://' +  */ req.get('origin') + req.originalUrl;
	console.log(url);
	console.log(req);
	if (url.includes('https://keen-turing-04ea0a.netlify.app/')) {
		next();
	} else {
		res.status(403).send('du kommst hier ned rein');
	}
};
