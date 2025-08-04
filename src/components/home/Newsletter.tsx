import React, { useState } from "react";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import { ShieldCheckIcon } from "lucide-react";

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // In a real app, you would send this to your API
    }
  };

  return (
    <section className="py-16 bg-indigo-50">
      <div className="w-full px-4">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden ">
          <div className="grid md:grid-cols-2 items-center">
            {/*  */}
            {/* Image Side */}
            <div className="h-64 md:h-full relative order-1 md:order-2 ">
              <img
                src="https://images.pexels.com/photos/4049672/pexels-photo-4049672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Newsletter background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900/50 flex flex-col justify-center items-center p-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Badge
                    variant="default"
                    className="bg-white text-indigo-700 mb-4"
                  >
                    Stay Updated
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Join Our Newsletter
                  </h3>
                  <p className="text-white/90">
                    Get exclusive offers and stay up-to-date
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Form Side */}
            {/* <div className=""> */}
            <div className="p-8 md:p-12 order-2 md:order-1   ">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Subscribe for Updates
                </h3>
                {subscribed ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-800">
                    <p className="font-medium">Thank you for subscribing!</p>
                    <p className="text-sm mt-1">
                      You'll receive our latest updates and exclusive offers.
                    </p>
                  </div>
                ) : (
                  <>
                    <p className="text-slate-600 mb-6">
                      Get exclusive access to sales, new arrivals, and
                      member-only discounts. Join our shopping community today!
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="text-amber-900 font-medium">
                          🛍️ First-time subscriber?
                        </span>
                        <p className="text-sm text-amber-800">
                          Get 15% off your first order! Code will be sent after
                          confirmation.
                        </p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label
                            htmlFor="firstName"
                            className="block text-sm font-medium text-slate-700 mb-1"
                          >
                            First Name
                          </label>
                          <input
                            id="firstName"
                            type="text"
                            required
                            placeholder="Emma"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="lastName"
                            className="block text-sm font-medium text-slate-700 mb-1"
                          >
                            Last Name
                          </label>
                          <input
                            id="lastName"
                            type="text"
                            placeholder="Wilson"
                            className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="emma@example.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        />
                      </div>

                      <div className="border-t border-b border-slate-200 py-6">
                        <p className="text-sm font-medium text-slate-700 mb-4">
                          Shopping Preferences:
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          {[
                            "Women's Fashion",
                            "Men's Style",
                            "Electronics",
                            "Home & Living",
                          ].map((category) => (
                            <label
                              key={category}
                              className="flex items-center gap-2 text-slate-700"
                            >
                              <input
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500"
                              />
                              {category}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-1"
                        >
                          Mobile Number (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          pattern="[0-9]{10}"
                          placeholder="1234567890"
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        />
                        <p className="text-xs text-slate-500 mt-2">
                          Receive SMS updates about your orders
                        </p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button type="submit" size="lg" fullWidth>
                          Join & Get 15% Off
                        </Button>
                        <Button
                          type="button"
                          variant="outline"
                          size="lg"
                          fullWidth
                          className="border-slate-300"
                        >
                          Guest Checkout
                        </Button>
                      </div>

                      <div className="flex items-center gap-4 text-slate-500 text-xs mt-4">
                        <div className="flex items-center gap-2">
                          <ShieldCheckIcon className="h-4 w-4" />
                          <span>SSL Secure Checkout</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-2">
                          <ShieldCheckIcon className="h-4 w-4" />
                          <span>Privacy Protected</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 mt-4">
                        By subscribing, you agree to our{" "}
                        <a href="#" className="underline hover:text-indigo-700">
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline hover:text-indigo-700">
                          Privacy Policy
                        </a>
                        . Unsubscribe at any time.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
