/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63kxms4rs43pql0")

  collection.name = "lunette"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("63kxms4rs43pql0")

  collection.name = "lunettes"

  return dao.saveCollection(collection)
})
