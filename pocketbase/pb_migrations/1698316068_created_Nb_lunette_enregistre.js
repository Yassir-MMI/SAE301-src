/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5c6ysiq6zi2wex7",
    "created": "2023-10-26 10:27:48.611Z",
    "updated": "2023-10-26 10:27:48.611Z",
    "name": "Nb_lunette_enregistre",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sgvv8d7m",
        "name": "user",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "p23rvsbt",
        "name": "couleur_branche",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bpj5r4bq",
        "name": "couleur_cadre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "t9optjhu",
        "name": "couleur_verre",
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
    "options": {
      "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as \nuser,lunette.couleur_branche as couleur_branche,lunette.couleur_cadre,lunette.couleur_verre\nFROM lunette, users\nWHERE lunette.enregistre = TRUE"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5c6ysiq6zi2wex7");

  return dao.deleteCollection(collection);
})
