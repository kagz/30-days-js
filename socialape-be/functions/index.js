const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("HARROOOO!");
});

exports.getScreams =functions.https.onRequest((req,res)=>{
db.collection('screams')
.get()
.then(data =>{
    let screams =[];
    data.forEach(doc=>{
screams.push(doc.data());

    });
    return res.json(screams);
}).catch(err=> console.error(err));

});

exports.createScreams = functions.https.onRequest((req,res)=>{
const newScream={
    body:req.body.body,
    userHandle:req.body.userHandle,
    createdAt: "2020-05-21"
};
db.collection('screams')
  .add(newScream)
  .then(doc =>{
      res.json({
          message :`document ${doc.id}created succefully`
      })
  }).catch(err=>{
  console.error(err)
    res.status(500).json({
        error:'shit happened'
    });

  });

    
});