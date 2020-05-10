const orm = require('../config/orm');

class Burger {
  constructor({ name, devoured }) {
    this.burger_name = name;
    this.devoured = devoured;
  }

  async save() {
    if (this.id) {
      //need to call update this burger already exists
      return await this.update();
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
