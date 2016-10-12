'use strict';
var model = require('../models')
class Questions_Controller{
  static insert_questions(add){
    model.questions.create({
      question: add.question,
      instruction: add.instruction,
      option_a: add.option_a,
      option_b: add.option_b,
      option_c: add.option_c,
      option_d: add.option_d,
      option_e: add.option_e,
      answer: add.answer,
      question_levelId: add.question_levelId,
      questions_categoryId: add.questions_categoryId,
      questions_statusId: add.questions_statusId
    })
  }
  static get_questions(){
    model.questions.findAll({
      attributes:["id","questions","instruction","option_a","option_b","option_c","option_d","option_e","answer","question_levelId","questions_statusId","questions_categoryId"]
    }).then(function (result) {
      return result
    })
  }
  static update_questions(id,add){
    model.questions.update({
      question: add.question,
      instruction: add.instruction,
      option_a: add.option_a,
      option_b: add.option_b,
      option_c: add.option_c,
      option_d: add.option_d,
      option_e: add.option_e,
      answer: add.answer,
      question_levelId: add.question_levelId,
      questions_categoryId: add.questions_categoryId,
      questions_statusId: add.questions_statusId
      where:{
        id: id
      }
    })
  }
}
export default Questions_Controller
