1: Find all the result of the given collection.
                    db.collectionName.find()

2:Show the result in pretty format()
                  db.collectionName.find().pretty()

3: Get only MongoDB data as a output.
                db.collectionName.find(query, projection).pretty()
                db.collectionName.find({name: "Aamir"}).pretty()

4: Get only  MongoDB data as a output with only name field.
               db.collectionName.find({name: "Aamir"}, {name: 1})

5: Get the MongoDB data without _ID field in it.
              db.collectionName.find({name: "Aamir", _id: 0}).pretty()

6: set the filter to "active:true" and get only the first field with "active:true" value.
             db.collectionName.find({active: true}).pretty().limit(1)

7: Do the same as 6th question but with different method.
             db.collectionName.findOne({active: true})           you can't use pretty method with findOne method

8: Do the same as 6th question but this time, get the 2nd field with active: true by skipping the 1st field.
           db.collectionName.find({active: true}).pretty().limit(3).skip(1)




