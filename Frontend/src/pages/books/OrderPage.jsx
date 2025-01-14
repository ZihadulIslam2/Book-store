import { useGetOrderByEmailQuery } from '../../redux/features/orders/orderApi'
import { useAuth } from '../../context/AuthContext'

const OrderPage = () => {
  const { currentUser } = useAuth()
  const {
    data: orders = [],
    isLoading,
    isError,
  } = useGetOrderByEmailQuery(currentUser.email)

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error getting orders data</div>

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={index}>
              <h3>OrderId: {order?._id}</h3>
              <p className="text-gray-600">Name: {order?.name}</p>
              <p className="text-gray-600">Email: {order?.email}</p>
              <p className="text-gray-600">Phone: {order?.phone}</p>
              <p className="text-gray-600">Total Price: {order?.totalPrice}</p>
              <h3 className="font-semibold mt-2">Address: </h3>
              <p>
                {order.address.city}, {order.address.state},{' '}
                {order.address.country}, {order.address.zipcode}
              </p>
              <h3>Product Id:</h3>
              <ul>{
                order.productIds.map((productId)=>{
                  <li key={productId}>{productId}</li>
                })
                }</ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default OrderPage
