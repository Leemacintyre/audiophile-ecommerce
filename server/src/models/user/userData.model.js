const User = require("./userData.mongo");
const passport = require("passport");

// save session to cookie
function serializeGoogleUser() {
    passport.serializeUser(async (currentUser, done) => {
        const { sub, given_name, family_name, picture, email } = currentUser;
        console.log("lee user", currentUser);
        const doesUserExit = await User.exists({ _id: sub });
        if (!doesUserExit) {
            try {
                const newUser = new User({
                    _id: sub,
                    fName: given_name,
                    lName: family_name,
                    profilePicture: picture,
                    email: email,
                });
                await newUser.save();
            } catch (error) {
                console.log("could not save user");
            }
        }
        done(null, currentUser);
    });
}

// read session from cookie
function deserializeGoogleUser() {
    passport.deserializeUser(async (obj, done) => {
        done(null, obj);
    });
}

module.exports = { serializeGoogleUser, deserializeGoogleUser };
