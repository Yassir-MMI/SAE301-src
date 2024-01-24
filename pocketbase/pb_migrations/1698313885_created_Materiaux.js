/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vrnkairsupnnwmh",
    "created": "2023-10-26 09:51:25.687Z",
    "updated": "2023-10-26 09:51:25.687Z",
    "name": "Materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "aatndsh1",
        "name": "libelle",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vrnkairsupnnwmh");

  return dao.deleteCollection(collection);
})
