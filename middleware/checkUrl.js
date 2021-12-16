/** @format */

export const checkUrl = (req, res, next) => {
	const url = /* req.protocol + '://' +  */ req.get('origin') + req.originalUrl;
	console.log(url);
	console.log(req);
	if (url.includes('local')) {
		next();
	} else {
		res.status(403).send('du kommst hier ned rein');
	}
};
