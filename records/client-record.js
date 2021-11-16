const { ValidationError } = require('../utils/error');

class ClientRecord {
  constructor(obj) {
    const { id, name, mail, nextContactAt, notes } = obj;

    if (!id || typeof id !== 'string') {
      throw new ValidationError(' ID must be added and have to be text');
    }

    if (!name || typeof name !== 'string' || name.length < 3) {
      throw new ValidationError(' Name should have min 3 letters');
    }

    if (!mail || typeof mail !== 'string' || mail.indexOf('@') === -1) {
      throw new ValidationError('E-mail is not valid');
    }

    if (typeof nextContactAt !== 'string') {
      throw new ValidationError('Date of next contact have to be text');
    }

    if (typeof notes !== 'string') {
      throw new ValidationError('Notes have to be text');
    }

    this.id = id;
    this.name = name;
    this.mail = mail;
    this.nextContactAt = nextContactAt;
    this.notes = notes;
  }
}

module.exports = {
  ClientRecord,
};
