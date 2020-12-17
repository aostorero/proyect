const person = require('../models/Person');

exports.getPeople = async (req, res) => {
    let people;
    let name = req.query.name;
    let birthday = req.query.birthday;
    let sex = req.query.sex;
    let home_address = req.query.home_address;
    //object where the 'where' used to get specific results from db.
    var options = {where: {}};
    //checks if there are requests to filter.  
    if (name) {
        options.where.name = name
    }
    if (birthday) {
        options.where.birthday = birthday
    }
    if (sex) {
        options.where.sex = sex
    }
    if (home_address) {
        options.where.home_address = home_address
    }
    people = await person.findAll(options);
    
    res.json(people);
}
    



exports.getPerson = async (req, res) => {
    const result = await person.findAll({
        where: {
            id: req.params.id
        }
    });
    res.json(result);
}

exports.createPerson = async (req, res) => {
    let = {name, birthday, sex, home_address} = req.body;
    //console.log( name, birthday, sex, home_address );
    try {
        await person.create({
            name,
            birthday,
            sex,
            home_address
        })
        .then(console.log("añadido a db"));
        res.json({
            message: "added"
        })
    } catch (error) {
        console.log(error);
    }
}

exports.updatePerson = async (req, res) => {
    let = {name, birthday, sex, home_address} = req.body;
   try {
    await person.update({name: name,
        birthday: birthday,
        sex: sex,
        home_address: home_address}, {
            where: {
                id: req.params.id
            }
        })
        .then(res.json({
            message: "successfuly updated"
        }));
   } catch (error) {
       console.log(error);
   }
}

exports.deletePerson = async (req, res) => {
    try {
        await person.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(res.json({
            message: "successfuly deleted"
        }))
    } catch (error) {
        console.log(error);
    }
}