'use strict';
var model = require('../models')
class Questions_Categories_Controller{
  static insert_catogries(add){
    model.questions_categories.create({
      category: add.category
    })
  }
  static get_categories(){
    model.questions_categories.findAll({
      attributes:["id","category"]
    }).then(function (result) {
      return result
    })
  }
  static update_categories(id,add){
    model.questions_categories.update({
      category: add.category,
      where:{
        id: id
      }
    })
  }
}
export default Questions_Categories_Controller
