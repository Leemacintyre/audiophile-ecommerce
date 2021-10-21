const {
    createNewClient,
    getAllClientList,
} = require("../../models/clientList/clientList.model");

async function httpCreateClient(req, res) {
    try {
        return res.status(201).json(await createNewClient(req, res));
    } catch (error) {
        return res
            .status(400)
            .json({ error: error, location: "httpCreateClient" });
    }
}

async function httpGetAllClientList(req, res) {
    try {
        res.status(200).json(await getAllClientList(req, res));
    } catch (error) {
        res.status(400).json({
            error: error,
            location: "httpGetAllClientList",
        });
    }
}

module.exports = { httpCreateClient, httpGetAllClientList };
