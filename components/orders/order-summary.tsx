interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderSummaryProps {
  address: string;
  fullAddress: string;
  paymentType: string;
  orderItems: OrderItem[];
  deliveryFee: number;
  serviceFee: number;
  total: number;
}

export const OrderSummary: React.FC<OrderSummaryProps> = ({
  address,
  fullAddress,
  paymentType,
  orderItems,
  deliveryFee,
  serviceFee,
}) => {
  // Calculate the subtotal
  const subtotal = orderItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + deliveryFee + serviceFee;
  return (
    <div className="space-y-4 bg-white rounded-lg py-4">
      {/* Delivery Address */}
      <div className="space-y-2 border-b border-b-grey-100 pb-4">
        <h4 className="font-bold text-sm">Delivery address</h4>
        <p className="text-sm font-medium">{address}</p>
        <p className="text-xs text-grey-500">{fullAddress}</p>
      </div>

      {/* Payment Type */}
      <div className="space-y-3 border-b border-b-grey-100 pb-4">
        <h4 className="font-bold text-sm">Payment type</h4>
        <p className="text-sm text-grey-500">{paymentType}</p>
      </div>

      {/* Order Details */}
      <div className="border-b border-b-grey-100 pb-4">
        <h4 className="font-bold text-sm text-black pb-3">Order details</h4>
        <ul className="space-y-3">
          {orderItems.map((item, index) => (
            <li
              key={index}
              className="flex justify-between text-sm text-gray-500"
            >
              <span>
                {item.name} ({item.quantity})
              </span>
              <span className="text-black">
                ₦ {item.price.toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing Details */}
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-black">₦ {subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Delivery fee</span>
          <span className="text-black">+₦ {deliveryFee.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span className="text-black">+₦ {serviceFee.toLocaleString()}</span>
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between font-semibold text-base text-green-600">
        <span className="text-black">Total</span>
        <span>₦ {total.toLocaleString()}</span>
      </div>
    </div>
  );
};
