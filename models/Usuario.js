import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nome: String,
  email: String
});

const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario