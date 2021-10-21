const ClientList = require("./clientList.mongo");

async function createNewClient(req, res) {
    try {
        const newClient = new ClientList({
            userId: req.body.userId,
            fName: req.body.fName,
            lName: req.body.lName,
            address: req.body.address,
        });
        console.log(newClient);
        return await newClient.save();
    } catch (error) {
        console.log(`Unable to create new client ${error}`);
    }
}

async function getAllClientList(req, res) {
    try {
        const userId = req.body.userId;
        return await ClientList.find({ userId: "113577393364732277603" });
    } catch (error) {
        console.log(`unable to get client list ${error}`);
    }
}

module.exports = { createNewClient, getAllClientList };
