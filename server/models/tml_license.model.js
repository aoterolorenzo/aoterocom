const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let LicenseSchema = new Schema({
  name: String,
  license: String,
  unlimited: Boolean,
  count: Number,
});


/**
 * Statics
 */
LicenseSchema.statics = {
  /**
   * Get license
   * @param {ObjectId} id - The objectId of license.
   * @returns {Promise<resume, APIError>}
   */
  get(id) {
    return this.findById(id)
      .exec()
      .then((resume) => {
        if (resume) {
          return resume;
        }
        const err = new APIError('No such resume exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },

  /**
   * List resumes in descending order of 'createdAt' timestamp.
   * @param {number} skip - Number of resumes to be skipped.
   * @param {number} limit - Limit number of resumes to be returned.
   * @returns {Promise<resume[]>}
   */
  list({ skip = 0 } = {}) {
    return this.find()
      .sort({ createdAt: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec();
  }
};



/**
 * @typedef Resume
 */
module.exports =  mongoose.model('License', LicenseSchema);
