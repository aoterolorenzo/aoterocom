const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Promise = require('bluebird');
const httpStatus = require('http-status');



let LangSchema = new Schema({
  name: String,
  abbr: String,
});

let ContactIconSchema = new Schema({
  name: String,
  icon: String,
  link: String,
});

let EducationSchema = new Schema({
  name: String,
  place: String,
  start: Date,
  end: Date,
  icon: String,
});

let SkillSchema = new Schema({
  name: String,
  percent: Number,
});

let TechSchema = new Schema({
  name: String,
  icon: String
});

let TechCategorieSchema = new Schema({
  name: String,
  icon: String,
  items: [TechSchema],
});

let ResumeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  uname: String,
  img: String,
  birth_date: Date,
  birth_place: String,
  nacionality: String,
  driving_license: String,
  description: String,
  parallax1: String,
  parallax2: String,
  contact_lat:  String,
  contact_long: String,
  contact_line: String,
  contact_place: String,
  email: String,
  words: [String],
  langs: [LangSchema],
  social_links: [ContactIconSchema],
  education: [EducationSchema],
  skills: [SkillSchema],
  techs: [TechCategorieSchema],
  lv: String
});


/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 *  aotero: I don't need a full CRUD app, so there's no need to
 *  add or remove any content due it's static. Anyway here would
 *  put field validations, pre-save conditions...
*/

/**
 * Methods
 */
ResumeSchema.method({

  /**
   * aotero: Nor methods are needed
   */
});


/**
 * Statics
 */
ResumeSchema.statics = {
  /**
   * Get resume
   * @param {ObjectId} id - The objectId of resume.
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
  list({ skip = 0, limit = 50 } = {}) {
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
module.exports =  mongoose.model('Resume', ResumeSchema);
