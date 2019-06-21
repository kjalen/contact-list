import model from '../models';

const { Number } = model;

class Numbers {
  static addNumber(req, res) {
    const { number, number_type } = req.body
    const { nameId } = req.params
      return Number
        .create({
          number,
          number_type,
          nameId
        })
        .then(numberData => res.status(201).send({
          success: true,
          message: `${number} successfuly created and associated with nameId ${nameId}`,
          numberData
        })).catch(error => res.status(400).send(error));
    }
    static getNumber(req, res) {
        const { id } = req.params
        return Number.findOne({
            where: {
                id: id
            }
        }).then(number => res.status(200).send(number))
        .catch(error => {res.status(400).send(error)});
    }
    static deleteNumber(req, res) {
        const { id } = req.params
        return Number.findOne({
            where: {id:id}
        }).then(number => {
            if(!number){
                return res.status(401).send({
                    message: 'Unauthorized Action'
                });
            }return number.destroy()
            .then( () => {
                return res.status(204).send({
                    message: 'Number Deleted'
                });
            }).catch(error => res.status(400).send(error));
        }).catch(error => res.status(400).send(error));
    }
}

export default Numbers;