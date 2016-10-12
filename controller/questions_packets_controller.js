'use strict';
var model = require('../models')
class Questions_Packets_Controller{
  static insert_questions_packet(add){
    model.questions_packets.create({
      verbal: add.verbal,
      numeric: add.numeric,
      intelligence: add.intelligence
    })
  }
  static get_questions_packet(){
    model.questions_packets.findAll({
      attributes:["id","verbal","numeric","intelligence"]
    }).then(function (result) {
      return result
    })
  }
  static update_questions_packet(id,add){
    model.questions_packets.update({
      verbal: add.verbal,
      numeric: add.numeric,
      intelligence: add.intelligence,
      where:{
        id: id
      }
    })
  }
}
export default Questions_Packets_Controller
