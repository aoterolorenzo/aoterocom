const Resume = require('../models/resume.model');

/*
  aotero: Any model need a controller, even if it do NOTHING but calling model methods directly.
  App layers had to be ALWAYS separated and independent each other, and business logic have to be ALWAYS
  separated of the different use cases.
 */

function getAlberto(req, res) {
    let filter = {email : 'info@aotero.com'};

    Resume.findOne(filter)
      .then((modelInstance) => {

        if (modelInstance != null) {
          res.json(modelInstance);
        }
        else {
          res.status(404).send({message: 'Not found'});
        }

      }).catch((err) => {
      res.status(500).send({message: 'Internal server error'})
    });
}

/**
 * @typedef Resume
 */
module.exports =  {getAlberto};
