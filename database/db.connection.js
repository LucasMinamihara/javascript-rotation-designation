import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

function connectDatabase() {
  const databaseWIthPassword = process.env.DATABASE_URL.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
  );

  const databaseWithPointer = databaseWIthPassword.replace(
    "test",
    process.env.DATABASE_USER
  );

  mongoose.connect(databaseWithPointer).then(() => {
    console.log("conectado com banco de dados", databaseWithPointer);
  });
}

export default connectDatabase;
