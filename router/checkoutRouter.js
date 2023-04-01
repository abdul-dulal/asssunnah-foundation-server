const router = require("express").Router();
const mongoose = require("mongoose");
const checkoutSchem = require("../schema/checkoutSchema");
const Checkout = mongoose.model("checkout", checkoutSchem);

const SSLCommerzPayment = require("sslcommerz-lts");
//sslcommerce

const store_id = "abc641ff4404b4af";
const store_passwd = "abc641ff4404b4af@ssl";
const is_live = false;

router.post("/chekcout", async (req, res) => {
  const { email, amaount, category } = req.body;

  const transctionId = "acd124578ff"; //new ObjectId().toSrting();
  const data = {
    total_amount: amaount,
    currency: "BDT",
    tran_id: transctionId, // use unique tran_id for each api call
    success_url: "http://localhost:3000/payment/success",
    fail_url: "http://localhost:3000/payment/fail",
    cancel_url: "http://localhost:3000/payment/cancel",
    ipn_url: "http://localhost:3030/ipn",
    shipping_method: "Courier",
    product_name: "Computer.",
    product_category: "Electronic",
    product_profile: "general",
    cus_name: "Customer Name",
    cus_email: email,
    cus_add1: "Dhaka",
    cus_add2: "Dhaka",
    cus_city: "Dhaka",
    cus_state: "Dhaka",
    cus_postcode: "1000",
    cus_country: "Bangladesh",
    cus_phone: "01711111111",
    cus_fax: "01711111111",
    ship_name: "Customer Name",
    ship_add1: "Dhaka",
    ship_add2: "Dhaka",
    ship_city: "Dhaka",
    ship_state: "Dhaka",
    ship_postcode: 1000,
    ship_country: "Bangladesh",
  };

  const checkout = new Checkout(req.body);

  try {
    await checkout.save();
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(data).then((apiResponse) => {
      // Redirect the user to payment gateway
      let GatewayPageURL = apiResponse.GatewayPageURL;
      res.send({ url: GatewayPageURL });
    });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
