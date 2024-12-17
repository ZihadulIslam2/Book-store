const Order = require('./order.model')

const createAOrder = async (req, res) => {
  try {
    // Create a new order using the request body
    const newOrder = new Order(req.body)

    // Save the new order to the database
    const savedOrder = await newOrder.save()

    // Send a success response with the saved order
    res
      .status(201)
      .json({ message: 'Order successfully created!', order: savedOrder })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to create an order.' })
  }
}

 const getOrderByEmail = async( req, res)=>{
  try {
    const { email } = req.params
    const orders = await Order.find({email}).sort({createdAt: -1})
    if(!orders) {
     return res.status(404).json({ mess: "Fail to fetch data."})
    }
    res.status(200).json(orders);
  } catch (error) {
     console.error(error)
     res.status(500).json({ message: 'Failed to fetching an order.' })
  }
 }

module.exports = {
  createAOrder,
  getOrderByEmail,
}
 