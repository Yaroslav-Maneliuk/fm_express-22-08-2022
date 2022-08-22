const db = new Map(); //table

class User {
  constructor({ name, email, gender }) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.id = `${db.size + 1}`;
    this.createdAt = new Date();
    db.set(this.id, this);
    return Promise.resolve(this);
  }
}

User.findAll = async () => {
  return [...db.values()];
};

User.findByPk = async (id) => {
  return db.get(id);
};

User.deleteUser = async (id) => {
  return [db.values(() => {id !== req.params.id})];
};

User.updateUser = async (id) => {
  return [db.values(() => {id !== req.params.id})];
};

module.exports = User;
