import firestore from "../../../src/firestore";

export default  (req, res) => {
    firestore.collection('confirms').get().then(data => {
        res.status(200).json(data.docs.map(doc => doc.data()))
    })
}
