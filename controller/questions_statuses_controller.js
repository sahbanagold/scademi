'use strict';
var model = require('../models')
class Questions_Statuses_Controller{
  static insert_questions_statuses(add){
    model.questions_statuses.create({
      status: add.status
    })
  }
  static get_questions_statuses(){
    model.questions_statuses.findAll({
      attributes:["id","status"]
    }).then(function (result) {
      return result
    })
  }
  static update_questions_statuses(id,add){
    model.questions_statuses.update({
      status: add.status,
      where:{
        id: id
      }
    })
  }
}
export default Questions_Statuses_Controller
