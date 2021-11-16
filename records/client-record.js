class ClientRecord {
  constructor(obj) {
    const { name } = obj;

    if (!name || typeof name !== 'string' || name.length < 3) {
      throw new Error(' Name should have min 3 letters');
    }

    this.id = obj.id;
    this.name = obj.name;
    this.mail = obj.mail;
    this.nextContactAt = obj.nextContactAt;
    this.notes = obj.notes;
  }
}

module.exports = {
  ClientRecord,
};
