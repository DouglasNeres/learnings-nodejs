const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:<${process.env.MONGODB_PASSWORD}>@learnnodejs.ejhagtt.mongodb.net/?retryWrites=true&w=majority`,
    (error) => {
      (error) => {
        if (error) {
          return console.log(
            "Ocorreu um erro de conexão com o Banco de Dados",
            error
          );
        }

        return console.log("Conexão realizada com sucesso!");
      };
    }
  );
};

module.exports;
