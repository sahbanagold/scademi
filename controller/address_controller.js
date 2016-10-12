'use strict';
var model = require('../models')
class Address_Controller{
static insert_address(add){
  model.address.create({
    provinsi: add.prov,
    kabupaten: add.kab,
    kecamatan: add.kec,
    desa: add.desa,
    kelurahan: add.kel
  })
}
static get_address(){
  model.address.findAll({
    attributes:["id","provinsi","kabupaten","kecamatan","desa","kelurahan"]
  }).then(function (result) {
    return result
  })
}
static update_address(id,add){
  model.address.update({
    provinsi: add.prov,
    kabupaten: add.kab,
    kecamatan: add.kec,
    desa: add.desa,
    kelurahan: add.kel,
    where:{
      id: id
    }
  })
}

}
export default Address_controller
