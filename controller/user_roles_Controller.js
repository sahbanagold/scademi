'use strict';
var model = require('../models')
class User_Roles_Controller{
  static insert_role(add){
    model.user_roles.create({
      role: add.role
    })
  }
  static get_role(){
    model.user_roles.findAll({
      attributes:["id","role"]
    }).then(function (result) {
      return result
    })
  }
  static update_role(id,add){
    model.user_roles.update({
      role: add.role,
      where:{
        id: id
      }
    })
  }
}
export default User_Roles_Controller
