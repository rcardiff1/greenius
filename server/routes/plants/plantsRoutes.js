var plantsHandler = require('./plantsHandler.js');

module.exports = function(app) {
 app.post('/addPlant', plantsHandler.addPlant);
 app.get('/loadPlants', plantsHandler.getPlantsForAUser);
 app.post('/loadSpecieInfo', plantsHandler.getSpecieInfo);
 app.post('/loadPlantInfo', plantsHandler.getPlant);
};
