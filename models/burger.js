const orm = require('../config/orm');

class Burger {
  constructor({name, devoured}) {
    this.burger_name = name;
    this.devoured = devoured;
  }

  async save() {
      if(this.id){
          //need to call update this burger already exists
          return await this.update()
      }
      else{
          //call insert
      }
    return await orm.insertOne(this);
  }

  async update() {
    return await orm.updateOne(this);
  }

  async static getAllBurgers(){
     return  await orm.selectAll()
  }
}

module.exports = Burger;
