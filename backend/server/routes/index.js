import Name from '../controllers/Name';
import Number from '../controllers/Number';

export default (app) => {

    app.get('/api', (req, res) => res.status(200).send({
        message: 'Welcome to the contacts API!',
    }));

    app.post('/api/names', Name.addName); // API route for adding a name
    app.post('/api/names/:nameId/numbers', Number.addNumber); // API route for adding 
    app.get('/api/names/:nameId', Name.getName);
    app.get('/api/names', Name.getNames);
    app.delete('/api/names/:nameId', Name.deleteName);
    app.get('/api/numbers/:id', Number.getNumber);
    app.delete('/api/numbers/:id', Number.deleteNumber);
    app.get('/api/report', Name.getNamesAndNumbers);
};
