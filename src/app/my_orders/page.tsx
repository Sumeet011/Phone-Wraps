'use client';
import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Download, ClipboardCopy, CheckCircle2, Loader2, Package } from "lucide-react";
import { toast } from "react-toastify";
import localFont from "next/font/local";
const JersyFont = localFont({
  src: "../../../public/fonts/jersey-10-latin-400-normal.woff2",
  display: "swap",
});

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// Define the order type based on backend schema
type OrderItem = {
  productId: string;
  productName: string;
  phoneModel: string;
  quantity: number;
  price: number;
};

type ShippingAddress = {
  fullName: string;
  phoneNumber: string;
  email: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

type Order = {
  _id: string;
  orderId: string;
  orderNumber: string;
  userId: string;
  items: OrderItem[];
  subtotal: number;
  discount: number;
  shippingCost: number;
  totalAmount: number;
  status: string;
  paymentMethod: string;
  paymentStatus: string;
  isPaid: boolean;
  shippingAddress: ShippingAddress;
  trackingLink?: string;
  trackingNumber?: string;
  courierPartner?: string;
  createdAt: string;
  updatedAt: string;
};

const MyOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState("");

  // Fetch orders from backend
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const User= localStorage.getItem('USER');
        const userId = User ? JSON.parse(User).id : null;
        const userEmail = User ? JSON.parse(User).email : null;

        if (!userId) {
          toast.error("Please log in to view your orders");
          setLoading(false);
          return;
        }

        const response = await fetch(`${BACKEND_URL}/api/orders/userorders`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 
            userId,
            email: userEmail // Send email for guest users
          })
        });

        const data = await response.json();
        console.log("Orders fetched:", data);

        if (data.success) {
          setOrders(data.orders || []);
          if (data.orders && data.orders.length === 0 && data.message) {
            toast.info(data.message, {
              position: "top-center",
              autoClose: 3000
            });
          }
        } else {
          toast.error(data.message || "Failed to fetch orders");
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
        toast.error("Failed to load orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleCopy = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    toast.success("Order ID copied!", {
      position: "top-center",
      autoClose: 2000
    });
  };

  const handleDownloadInvoice = (order: Order) => {
    // TODO: Implement invoice download
    toast.info(`Invoice download for ${order.orderNumber} coming soon!`, {
      position: "top-center",
      autoClose: 2000
    });
  };

  const getStatusColor = (status: string) => {
    const statusColors: { [key: string]: string } = {
      'Pending': 'text-yellow-400',
      'Confirmed': 'text-lime-400',
      'Processing': 'text-blue-400',
      'Shipped': 'text-purple-400',
      'Out for Delivery': 'text-orange-400',
      'Delivered': 'text-green-400',
      'Cancelled': 'text-red-400',
      'Refunded': 'text-gray-400',
      'Failed': 'text-red-500'
    };
    return statusColors[status] || 'text-gray-400';
  };

  const getPaymentStatusIcon = (isPaid: boolean, paymentStatus: string) => {
    if (isPaid && paymentStatus === 'Paid') {
      return '✅ Paid';
    } else if (paymentStatus === 'Pending') {
      return '⏳ Pending';
    } else if (paymentStatus === 'Failed') {
      return '❌ Failed';
    }
    return '⏳ Pending';
  };

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-[#090701] text-white">
        <Loader2 className="animate-spin w-12 h-12 text-lime-400 mb-4" />
        <p className="text-gray-400">Loading your orders...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#090701] min-h-screen overflow-hidden text-white">
      <Navbar />
      <div className="h-full py-10 px-6 lg:px-20">
        <h1 className={` ${JersyFont.className} text-[#9AE600]  text-5xl font-bold mb-10`}>My Orders</h1>

        {orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Package className="w-20 h-20 text-gray-600 mb-4" />
            <p className="text-center text-gray-500 text-xl">No orders found.</p>
            <p className="text-center text-gray-600 text-sm mt-2">Your orders will appear here after checkout.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  max-w-[1400px]">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-[#131313] rounded-xl shadow-md p-5 space-y-5 border border-gray-700 hover:border-lime-400/50 transition-all duration-300"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-semibold text-lime-400">Order #{order.orderNumber}</h2>
                    <p className="text-xs text-gray-500">{order.orderId}</p>
                  </div>
                  <button onClick={() => handleCopy(order.orderId)}>
                    {copiedId === order.orderId ? (
                      <CheckCircle2 className="w-5 h-5 text-lime-400" />
                    ) : (
                      <ClipboardCopy className="w-5 h-5 text-gray-400 hover:text-white" />
                    )}
                  </button>
                </div>

                <div>
                  <h3 className="font-medium text-md mb-2">Products</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {order.items.map((item, idx) => (
                      <li key={idx} className="flex justify-between items-start">
                        <div className="flex-1">
                          <span className="block">{item.productName}</span>
                          <span className="text-xs text-gray-500">{item.phoneModel}</span>
                        </div>
                        <div className="text-right">
                          <span className="block">x{item.quantity}</span>
                          <span className="text-xs text-gray-500">₹{item.price * item.quantity}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal:</span>
                    <span>₹{order.subtotal}</span>
                  </div>
                  {order.discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Discount:</span>
                      <span className="text-lime-400">-₹{order.discount}</span>
                    </div>
                  )}
                  {order.shippingCost > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Shipping:</span>
                      <span>₹{order.shippingCost}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-semibold border-t border-gray-700 pt-2">
                    <span>Total:</span>
                    <span className="text-lime-400">₹{order.totalAmount}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-400 space-y-1">
                  <p className="flex justify-between">
                    <span className="font-semibold">Status:</span>
                    <span className={`${getStatusColor(order.status)} font-medium`}>{order.status}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Payment:</span>
                    <span>{getPaymentStatusIcon(order.isPaid, order.paymentStatus)}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Method:</span>
                    <span>{order.paymentMethod}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-semibold">Date:</span>
                    <span>{new Date(order.createdAt).toLocaleDateString('en-IN', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric' 
                    })}</span>
                  </p>
                  {order.trackingLink && (
                    <p className="flex justify-between items-center">
                      <span className="font-semibold">Tracking:</span>
                      <a 
                        href={order.trackingLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lime-400 hover:text-lime-300 underline flex items-center gap-1"
                      >
                        Track Order
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </p>
                  )}
                  {order.trackingNumber && (
                    <p className="flex justify-between">
                      <span className="font-semibold">AWB:</span>
                      <span className="font-mono text-xs">{order.trackingNumber}</span>
                    </p>
                  )}
                  {order.courierPartner && (
                    <p className="flex justify-between">
                      <span className="font-semibold">Courier:</span>
                      <span>{order.courierPartner}</span>
                    </p>
                  )}
                </div>

                <div className="text-sm text-gray-500 bg-[#1a1a1a] p-3 rounded-lg">
                  <p className="font-semibold text-white mb-1">Shipping Address</p>
                  <p className="text-xs">{order.shippingAddress.fullName}</p>
                  <p className="text-xs">{order.shippingAddress.phoneNumber}</p>
                  <p className="text-xs mt-1">
                    {order.shippingAddress.addressLine1}
                    {order.shippingAddress.addressLine2 && `, ${order.shippingAddress.addressLine2}`}
                  </p>
                  <p className="text-xs">
                    {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.zipCode}
                  </p>
                  <p className="text-xs">{order.shippingAddress.country}</p>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => handleDownloadInvoice(order)}
                    className="bg-lime-400 hover:bg-lime-500 px-4 py-4 rounded-full flex items-center justify-center gap-2 text-black transition-all duration-300 hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
