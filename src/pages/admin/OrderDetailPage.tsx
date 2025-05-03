import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useOrders } from '../../contexts/OrderContext';
import Card, { CardContent, CardHeader } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { ArrowLeft } from 'lucide-react';

const OrderDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { orders, updateOrderStatus } = useOrders();
  const navigate = useNavigate();
  
  const order = orders.find(o => o.id === id);
  
  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
          <p className="text-gray-500 mb-6">The order you're looking for doesn't exist or has been removed.</p>
          <Button
            onClick={() => navigate('/admin/orders')}
            className="inline-flex items-center"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Orders
          </Button>
        </div>
      </div>
    );
  }
  
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as 'pending' | 'processing' | 'shipped' | 'delivered';
    updateOrderStatus(order.id, newStatus);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6">
        <Link 
          to="/admin/orders" 
          className="inline-flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={16} className="mr-2" /> Back to Orders
        </Link>
      </div>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Order #{order.id}</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-700">Status:</span>
          <select
            value={order.status}
            onChange={handleStatusChange}
            className="px-3 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none"
          >
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <h2 className="text-base font-semibold text-gray-900">Customer Information</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Name</p>
                <p className="text-base">{order.customerName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Email</p>
                <p className="text-base">{order.customerEmail}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h2 className="text-base font-semibold text-gray-900">Shipping Information</h2>
          </CardHeader>
          <CardContent>
            <div>
              <p className="text-sm font-medium text-gray-500">Address</p>
              <p className="text-base">{order.customerAddress}</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <h2 className="text-base font-semibold text-gray-900">Order Information</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-500">Order Date</p>
                <p className="text-base">{order.date}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <p className="text-base">
                  {order.status === 'pending' && <Badge variant="warning">Pending</Badge>}
                  {order.status === 'processing' && <Badge variant="primary">Processing</Badge>}
                  {order.status === 'shipped' && <Badge variant="secondary">Shipped</Badge>}
                  {order.status === 'delivered' && <Badge variant="success">Delivered</Badge>}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Total Amount</p>
                <p className="text-lg font-semibold">₹{order.totalAmount.toFixed(2)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <h2 className="text-base font-semibold text-gray-900">Order Items</h2>
        </CardHeader>
        <CardContent className="p-0">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {order.items.map((item) => (
                <tr key={item.name}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.weight || item.volume}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                    {item.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm text-gray-500">
                    ₹{Number(item.price).toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-gray-900">
                    ₹{(Number(item.price) * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={3} className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                  Total
                </td>
                <td className="px-6 py-4 text-right text-base font-bold text-gray-900">
                  ₹{order.totalAmount.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderDetailPage;