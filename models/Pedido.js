import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  numero: Number,
  valor: Number
});

const Pedido = mongoose.model("Pedido", pedidoSchema)

export default Pedido