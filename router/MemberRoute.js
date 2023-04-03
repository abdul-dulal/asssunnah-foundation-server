const router = require("express").Router();
const mongoose = require("mongoose");
const memberSchema = require("../schema/MemberSchema.js");
const Member = mongoose.model("member", memberSchema);

router.post("/addMember", async (req, res) => {
  const member = new Member(req.body);
  try {
    await member.save();
    res.send({ success: true });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
