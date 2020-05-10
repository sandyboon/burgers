const orm = require('../config/orm');

class Burger {
  constructor({ burger_name, devoured, id }) {
    this.burger_name = validateName(burger_name);
    this.devoured = sanitizeBoolean(devoured);
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

//if ui return boolean convert it to 1 or 0
function sanitizeBoolean(val) {
  if (val && (val === true || val === 1)) {
    return 1;
  } else {
    return 0;
  }
}

//Name Validation
function validateName(burger_name) {
  if (!burger_name || burger_name.trim().length <= 0) {
    throw new Error('Burger name can not empty');
  }
  return burger_name;
}

module.exports = Burger;
