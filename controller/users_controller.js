'use strict';
var model = require('../models')
class Users_Controller{
  static insert_user(add){
    model.users.create({
      name: add.name,
      birthday: add.birthday,
      phone: add.phone,
      email: add.email,
      address: add.address,
      username: add.username,
      password: add.password,
      user_roleId: add.user_roleId
    })
  }
  static get_user(){
    model.users.findAll({
      attributes:["id","name","birthday","phone","email","address","username","password","user_roleId"]
    }).then(function (result) {
      return result
    })
  }
  static update_user(id,add){
    model.users.update({
      name: add.name,
      birthday: add.birthday,
      phone: add.phone,
      email: add.email,
      address: add.address,
      username: add.username,
      password: add.password,
      user_roleId: add.user_roleId,
      where:{
        id: id
      }
    })
  }
}
export default Users_Controller
