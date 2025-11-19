'use client'
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import OrderSummary from "../../components/orderSummary";
import PersonDetails from "../../components/PersonDetailes";
import Navbar from "../../components/navbar/Navbar";


// Define CartItem type
interface CartItem {
  _id: string;
  productId: string;
  name: string;
  packSize: string;
  price: number;
  quantity: number;
  image: string;
  selectedBrand: string;
  selectedModel: string;
  type: string;
}

const CheckoutPage = () => {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  console.log("Razorpay Key:", process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID);

  // Fetch cart items on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      setLoading(true);
      
    const userdata = localStorage.getItem('USER');
    const userId = userdata ? JSON.parse(userdata).id : null;
      
      if (!userId) {
        toast.error("Please login to continue");
        setTimeout(() => router.push('/'), 1500);
        setLoading(false);
        return;
      }

      const response = await fetch('http://localhost:3000/api/cart', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Id': userId
        }
      });

      const result = await response.json();

      if (result.success && result.data && result.data.items) {
        // Transform cart items to match component structure
        const transformedItems = result.data.items.map((item: any) => ({
          _id: item._id,
          productId: item.productId,
          name: item.productDetails?.name || 'Product',
          packSize: `${item.selectedBrand} - ${item.selectedModel}`,
          price: item.price,
          quantity: item.quantity,
          image: item.productDetails?.image || '',
          selectedBrand: item.selectedBrand,
          selectedModel: item.selectedModel,
          type: item.type
        }));

        if (transformedItems.length === 0) {
          toast.info("Your cart is empty. Redirecting...");
          setTimeout(() => router.push('/mycart'), 2000);
        }

        setCartItems(transformedItems);
      } else {
        toast.info(result.message || "Your cart is empty");
        setTimeout(() => router.push('/mycart'), 2000);
        setCartItems([]);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
      toast.error("Failed to load cart items");
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/coupon/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          code: couponCode.toUpperCase(),
          orderAmount: subtotal 
        })
      });

      const result = await response.json();

      if (result.success) {
        setDiscountPercent(result.coupon.discountPercentage || 0);
        setIsCouponApplied(true);
        toast.success(`Coupon applied! ${result.coupon.discountPercentage}% off`);
      } else {
        toast.error(result.message || "Invalid coupon code");
      }
    } catch (error) {
      console.error('Error applying coupon:', error);
      toast.error("Failed to apply coupon");
    }
  };

  const handleRemoveCoupon = () => {
    setDiscountPercent(0);
    setIsCouponApplied(false);
    setCouponCode('');
    toast.info("Coupon removed");
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum: number, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 5 : 0;
  const discountAmount = (subtotal * discountPercent) / 100;
  const totalCost = subtotal - discountAmount + shipping;

  if (loading) {
    return (
      <div className="bg-[#090701] min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading checkout...</div>
      </div>
    );
  }

  if (cartItems.length === 0 && !loading) {
    return (
      <div className="bg-[#090701] min-h-screen">
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-white">
          <h2 className="text-2xl mb-4">Your cart is empty</h2>
          <button
            onClick={() => router.push('/All')}
            className="bg-[#9AE600] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#8BD500] transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#090701] min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="min-h-screen text-white px-4 md:px-12 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left: Delivery Form */}
        <PersonDetails 
          totalCost={totalCost}
          cartItems={cartItems as any}
          couponCode={isCouponApplied ? couponCode : ''}
          discountAmount={discountAmount}
        />

        {/* Right: Order Summary */}
        <OrderSummary
          cartItems={cartItems as any}
          subtotal={subtotal}
          shipping={shipping}
          discountPercent={discountPercent}
          discountAmount={discountAmount}
          totalCost={totalCost}
          couponCode={couponCode}
          setCouponCode={setCouponCode}
          handleApplyCoupon={handleApplyCoupon}
          isCouponApplied={isCouponApplied}
          setIsCouponApplied={setIsCouponApplied}
          setDiscountPercent={setDiscountPercent}
          showActions={true}
          showCheckout={false}
        />
      </div>
    </div>
  );
};

export default CheckoutPage;
