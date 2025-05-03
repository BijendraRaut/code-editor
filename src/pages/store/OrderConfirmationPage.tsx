import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle size={64} className="text-emerald-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your order. We've received your purchase request and we'll be processing it shortly.
          You'll receive an email confirmation with all the details.
        </p>
        <div className="space-y-4">
          <Link to="/">
            <Button fullWidth>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;