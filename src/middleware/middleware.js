const validation = async (req, res, next) => {
    let header = req.headers['isFreeAppUser'];
    if (!header) header = req.headers['isfreeappuser'];
    if (!header) return res.send({ message: 'Mandatory header is not present' });
    next()
}

module.exports = { validation };
