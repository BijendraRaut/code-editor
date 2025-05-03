import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useOrders } from '../../contexts/OrderContext';
import { ShoppingBag, Users, DollarSign, TrendingUp } from 'lucide-react';
import { products } from '../../data/products';
import Card, { CardContent } from '../../components/ui/Card';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode; color: string }> = ({
  title,
  value,
  icon,
  color
}) => {
  return (
    <Card>
      <CardContent className="flex items-center p-6">
        <div className={`p-3 rounded-full ${color} mr-4`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const { orders } = useOrders();
  const navigate = useNavigate();
  
  // Redirect if not authenticated
  React.useEffect(() => {
    if (!currentUser || !currentUser.isAdmin) {
      navigate('/admin/login');
    }
  }, [currentUser, navigate]);
  
  if (!currentUser || !currentUser.isAdmin) {
    return null;
  }
  
  // Calculate dashboard metrics
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const pendingOrders = orders.filter(order => order.status === 'pending').length;
  
  const recentOrders = [...orders].slice(0, 5);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Orders"
          value={totalOrders}
          icon={<ShoppingBag size={24} className="text-white" />}
          color="bg-blue-500"
        />
        <StatCard
          title="Total Revenue"
          value={`₹${totalRevenue.toFixed(2)}`}
          icon={<DollarSign size={24} className="text-white" />}
          color="bg-emerald-500"
        />
        <StatCard
          title="Products"
          value={products.length}
          icon={<ShoppingBag size={24} className="text-white" />}
          color="bg-amber-500"
        />
        <StatCard
          title="Pending Orders"
          value={pendingOrders}
          icon={<TrendingUp size={24} className="text-white" />}
          color="bg-purple-500"
        />
      </div>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-1">
          <Card>
            <CardContent className="p-0">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentOrders.length > 0 ? (
                      recentOrders.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            #{order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.customerName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            ₹{order.totalAmount.toFixed(2)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {order.status === 'pending' && <Badge variant="warning">Pending</Badge>}
                            {order.status === 'processing' && <Badge variant="primary">Processing</Badge>}
                            {order.status === 'shipped' && <Badge variant="secondary">Shipped</Badge>}
                            {order.status === 'delivered' && <Badge variant="success">Delivered</Badge>}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => navigate(`/admin/orders/${order.id}`)}
                            >
                              View
                            </Button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                          No orders found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-4 flex justify-end">
            <Button
              variant="outline"
              onClick={() => navigate('/admin/orders')}
            >
              View All Orders
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;