import firestore from "../../../src/firestore";

export default (req, res) => {
    firestore.collection("confirms").doc(`${new Date().getTime()}_${req.body.name.replace(/\s/g,"")}_${req.body.confirm}`).set(req.body)
    .then(() => {
        res.status(200).json(req.body)
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}
