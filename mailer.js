var nm = require("nodemailer");
var t = nm.createTransport();

function sendAlert(stringerName, alertContent) {
  t.sendMail({
    from: "bot@data.string.er",
    to: config.userEmail,
    subject: "ALERT for " + stringerName,
    text: "On today's run, " + stringerName + "generated an alert, with the " +
        "following content:\n" + alertContent // TODO pretty print the object
  },
  function(err, info) {
    if(err) {
      console.log(err);
    }
  });
}

module.exports = {
  sendAler: sendAlert,
};
