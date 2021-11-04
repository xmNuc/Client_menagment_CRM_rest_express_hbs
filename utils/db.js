const { readFile, writeFile } = require('fs').promises;
const { join } = require('path');
const { v4: uuid } = require('uuid');

class Db {
  constructor(dbFileName) {
    this.dbFileName = join(__dirname, '../data', dbFileName);
    this._load();
  }
  async _load() {
    this._data = JSON.parse(await readFile(this.dbFileName, 'utf8'));
    // console.log(this._data);
  }
  _save() {
    writeFile(this.dbFileName, JSON.stringify(this._data), 'utf8');
  }

  create(obj) {
    this._data.push({
      id: uuid(),
      ...obj,
    });
    this._save();
  }

  getAll() {
    return this._data;
  }

  update(id, newObj) {
    this._data = this._data.map((oneObj) => {
      if (oneObj.id === id) {
        return {
          ...oneObj,
          ...newObj,
        };
      } else {
        return oneObj;
      }
    });
    this._save();
  }

  delete(id) {
    this._data = this._data.filter((oneObj) => oneObj.id !== id);

    this._save();
  }
}

const db = new Db('client.json');
