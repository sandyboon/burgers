const orm = require('../config/orm');

class Burger {
  constructor({ burger_name, devoured, id }) {
    this.burger_name = burger_name;
    this.devoured = devoured;
    this.id = id;
  }

  async save() {
    if (this.id) {
      //need to call update this burger already exists
      await this.update();
    } else {
      //call insert
      this.id = await orm.insertOne(this);
    }
    return this;
  }

  async update() {
    return await orm.updateOne(this);
  }

  static async getAllBurgers() {
    return await orm.selectAll();
  }
}

module.exports = Burger;
