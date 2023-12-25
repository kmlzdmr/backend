var mongoose = require("mongoose");
var dbURI = "mongodb+srv://kamil:mekanmekan@mekanbul.ay7tmfn.mongodb.net//mekanbul";
mongoose.connect(dbURI);

mongoose.connection.on("connected", () => {
  console.log(dbURI + " adresine bağlandı!");
});

mongoose.connection.on("error", () => {
  console.log("Bağlantı hatası!");
});

mongoose.connection.on("disconnected", () => {
  console.log("Bağlantı kesildi!");
});

process.on("SIGINT", () => {
  mongoose.connection.close();
  console.log("Bağlantı kapatıldı!");
  process.exit(0);
});

require("./venue")