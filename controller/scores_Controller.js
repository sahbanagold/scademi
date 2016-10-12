'use strict';
var model = require('../models')
class Scores_Controller{
  static insert_score(add){
    model.scores.create({
      score: add.score,
      verbal_answer: add.verbal_answer,
      numeric_answer: add.numeric_answer,
      intelligence_answer: add.intelligence_answer,
      userId: add.userId
    })
  }
  static get_score(){
    model.scores.findAll({
      attributes:["id","score","verbal_answer","numeric_answer","intelligence_answer"]
    }).then(function (result) {
      return result
    })
  }
  static update_score(id,add){
    model.scores.update({
      score: add.score,
      verbal_answer: add.verbal_answer,
      numeric_answer: add.numeric_answer,
      intelligence_answer: add.intelligence_answer,
      userId: add.userId
      where:{
        id: id
      }
    })
  }
}
export default Scores_Controller
