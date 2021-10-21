const User = require("./userData.mongo");

// get current user
async function getCurrentUser(currentUser) {
    // console.log("i am here");
    console.log("getCurrentUser Function", currentUser);
    try {
        return await User.findById(currentUser);
    } catch (error) {
        console.log(`Could not find current user ${error}`);
    }
}

module.exports = { getCurrentUser };
