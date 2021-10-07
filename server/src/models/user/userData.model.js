const User = require("./userData.mongo");
const passport = require("passport");

// save session to cookie
// function serializeGoogleUser() {
//     passport.serializeUser(async (currentUser, done) => {
//         done(null, currentUser);
//     });
// }

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

// read session from cookie
// function deserializeGoogleUser() {
//     passport.deserializeUser(async (obj, done) => {
//         const { sub, given_name, family_name, picture, email } = obj;
//         // console.log("lee user", obj);
//         const doesUserExit = await User.exists({ _id: sub });
//         if (!doesUserExit) {
//             try {
//                 const newUser = new User({
//                     _id: sub,
//                     fName: given_name,
//                     lName: family_name,
//                     profilePicture: picture,
//                     email: email,
//                 });
//                 await newUser.save();
//             } catch (error) {
//                 console.log("could not save user");
//             }
//         }

//         done(null, obj);
//     });
// }

module.exports = { getCurrentUser };
