const express = require('express')
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const shortId = require('shortid')

const app = express();
app.use(bodyParser.json());
app.use(cors())

app.use("/", express.static(__dirname + "/build"));
app.get("/", (req, res) => res.sendFile(__dirname + "/build/index.html"));

const url = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.rrq7z.mongodb.net/products?retryWrites=true&w=majority`
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})

const Product = mongoose.model(
  "products", 
  new mongoose.Schema({
    _id: { type: String, default: shortId.generate},
    image: String,
    title: String,
    description: String,
    price: Number,
    availableSizes: [ String ],
  })
)


app.get('/', async (req, res) => {
  res.send('hello guys')
})

app.get('/api/products', async (req, res) => {
  const products = await Product.find({});
  res.send(products);
})

app.post('/api/products', async (req, res) => {
  const newProduct = await Product(req.body);
  const saveProduct = await newProduct.save();
  res.send(saveProduct);
})

app.delete('/api/products/:id', async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.id);
  res.send(deleteProduct);
})

const Order = mongoose.model(
  "order", 
  new mongoose.Schema({
    _id: {
      type: String, default: shortId.generate
    },
    email: String,
    name: String,
    address: String,
    total: Number,
    cartItems: [
      {
        _id: String,
        title: String,
        price: Number,
        count: Number,
      },
    ],
  }, {
    timestamps: true,
  })
)

app.post('/api/orders', async (req, res) => {
  if(
    !req.body.name || 
    !req.body.email ||
    !req.body.address ||
    !req.body.total ||
    !req.body.cartItems 
    ) {
      return res.send({message: "Data is required."})
    }

  const order = await Order(req.body)
  const saveOrder = await order.save()
  res.send(saveOrder)
})

app.get('/api/orders', async (req, res) => {
  const order = await Order.find({})
  res.send(order)
})

app.get('/api/orders/data', async (req, res) => {
  try {
    const email = await req.query.email;
    const orders = await Order.find({email: email});
    res.send(orders)
  } catch (error) {
    res.send(error)
  }
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`The app is running on port http:localhost:${port}`))