/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c6ysiq6zi2wex7")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as \nuser,lunette.couleur_branche as couleur_branche,lunette.couleur_cadre as lunette_cadre,lunette.couleur_verre as couleur_verre\nFROM lunette, users\nWHERE lunette.enregistre = TRUE"
  }

  // remove
  collection.schema.removeField("sgvv8d7m")

  // remove
  collection.schema.removeField("p23rvsbt")

  // remove
  collection.schema.removeField("bpj5r4bq")

  // remove
  collection.schema.removeField("t9optjhu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0wqf6j86",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pstqv8ka",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "63y9a990",
    "name": "lunette_cadre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m7ncztuo",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("5c6ysiq6zi2wex7")

  collection.options = {
    "query": "SELECT (ROW_NUMBER() OVER()) as id,users.username as \nuser,lunette.couleur_branche as couleur_branche,lunette.couleur_cadre,lunette.couleur_verre\nFROM lunette, users\nWHERE lunette.enregistre = TRUE"
  }

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // add
  collection.schema.addField(new SchemaField({
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
  }))

  // remove
  collection.schema.removeField("0wqf6j86")

  // remove
  collection.schema.removeField("pstqv8ka")

  // remove
  collection.schema.removeField("63y9a990")

  // remove
  collection.schema.removeField("m7ncztuo")

  return dao.saveCollection(collection)
})
