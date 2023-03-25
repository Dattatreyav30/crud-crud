const Form = require('../models/formModel');

exports.postAddproduct = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.ph_no;
    const time = req.body.time
    Form.create({
        name: name,
        email: email,
        phone: phone,
        time: time
    })
        .then((result) => {
            res.status(200).json({ success: true });
        })
        .catch((err) => {
            res.status(500).json({ success: false, error: err.message });
        })
}

exports.getallDetails = (req, res, next) => {
    Form.findAll()
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            console.error(err);
        })
}

exports.postDeleteData = (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    Form.findByPk(id)
        .then((user) => {
            user.destroy();
        })
        .then((result) => {
            res.status(200).json({ message: 'Record deleted successfully.' });
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({ message: 'Failed to delete record.' });
        })
}


