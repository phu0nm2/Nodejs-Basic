const connection = require("../config.js/configDB");

exports.homePage = (req, res) => {
  // simple query
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    console.log(results); // results contains rows returned by server

    const data = results.map((row) => {
      return row;
    });

    console.log("data", typeof data);
    return res.render("index.ejs", { dataUser: JSON.stringify(data) });
  });
};
