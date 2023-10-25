/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("9np6d6c5v2j204a");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "9np6d6c5v2j204a",
    "created": "2023-10-25 11:56:57.145Z",
    "updated": "2023-10-25 11:56:57.145Z",
    "name": "utilisateur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lcu9yqq8",
        "name": "email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "0d9vhxdp",
        "name": "password",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
