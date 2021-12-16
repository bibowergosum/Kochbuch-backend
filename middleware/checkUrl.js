/** @format */

export const checkUrl = (req, res, next) => {
	console.log(req.get('Host'));
	if (req.get('Host').includes('keen-turing-04ea0a.netlify.app')) {
    next();
	} else {
		res.status(403).send('du kommst hier ned rein');
	}
};
