const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const UserSchema = require("../schemas/UserSchema");

// ✅ ASYNC middleware → NO next()
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
