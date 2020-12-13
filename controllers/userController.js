const user = require('../models/User');
const bcrypt = require('bcrypt');

exports.authenticate = async (req, res) => {
    const userToAuth = req.body;
    const userInDb = await user.findOne({where: {email: userToAuth.email}});
    if(userInDb == null) {
        res.json({message: 'no such user is registerd'});
        return false;
    } else if (!bcrypt.compareSync(userToAuth.password, userInDb.password)) {
        res.json({message: 'Incorrect password'});
        return false;
    }
    res.json({message: 'logged in'});
    return true;
}

exports.register = async (req, res) => {
    let email = req.body.email;
    let unHashedPassword = req.body.password;
    let password = (await bcrypt.hash(unHashedPassword, 10)).toString();
    try {
        await user.create({
            email,
            password
        })
        .then(console.log("si"));
        res.json({
            message: "new user added to db successfully"
        });
    } catch (error) {
        console.log(error);
    }
}