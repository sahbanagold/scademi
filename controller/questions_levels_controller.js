'use strict';
var model = require('../models')
class Questions_Levels_Controller{
  static insert_questions_level(add){
    model.questions_levels.create({
      level: add.level
    })
  }
  static get_questions_level(){
    model.questions_levels.findAll({
      attributes:["id","level"]
    }).then(function (result) {
      return result
    })
  }
  static update_questions_level(id,add){
    model.questions_levels.update({
      level: add.level,
      where:{
        id: id
      }
    })
  }
}
export default Questions_Levels_Controller
