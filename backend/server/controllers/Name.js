import model from '../models';

const { Name } = model;
const { Number } = model;

class Names {
  static addName(req, res) {
    const { name, role, email } = req.body
      return Name
        .create({
          name,
          role,
          email
        })
        .then(nameData => res.status(201).send({
          success: true,
          message: `${name} successfully created`,
          nameData
        })).catch(error => res.status(400).send(error));
    }
    static getNames(req, res){
        return Name.findAll()
        .then(names => res.status(200).send(names));
    }

    static getName(req, res){
        const { nameId } = req.params
        return Name.findOne({
            where: {
                id: nameId
            }
        }).then(name => res.status(200).send(name));
    }

    static deleteName(req, res){
        const { nameId } = req.params
        return Name.findOne({
            where: {
                id: nameId
            }
        }).then(name => {
            if(!name) {
                return res.status(401).send({
                    message: 'Unauthorized Action'
                });
            }
            return name
                .destroy()
                .then( ()=> {
                    return res.status(204).send({
                        message: 'Name Deleted'
                    });
                }).catch(error => res.status(400).send(error));
        }).catch(error => res.status(400).send(error));
    }

    static getNamesAndNumbers(req, res) {
        return Name.findAll({
            include: [
                { model: Number}
            ]
        }).then(data => res.status(200).send(data));
    }
}

export default Names;