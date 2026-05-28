import React from "react";

const Plan = () => {
  return (
    <div className="max-w-2xl mx-auto z-20 my-30">
      <div className="text-center">
        <h2 className="text-slate-700 text-[42px] font-semibold">
          Choose Your Plan
        </h2>
        <p className="text-gray-500 max-w-lg mx-auto">
          Start for free and scale up as you grow.
        </p>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-6">
        {/* Free Plan */}
        <div className="p-8 rounded-lg border border-gray-200 shadow-lg w-72">
          <h3 className="text-xl font-semibold text-slate-700">Free</h3>
          <p className="text-4xl font-bold mt-4">$0<span className="text-sm font-normal text-gray-500">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            <li>✅ 10 AI generations/month</li>
            <li>✅ Article Writer</li>
            <li>✅ Blog Title Generator</li>
            <li>❌ Image Generation</li>
            <li>❌ Background Removal</li>
            <li>❌ Resume Review</li>
          </ul>
          <button className="mt-6 w-full py-2 rounded-lg border border-primary text-primary">Current Plan</button>
        </div>

        {/* Premium Plan */}
        <div className="p-8 rounded-lg border border-primary shadow-lg w-72 bg-primary text-white">
          <h3 className="text-xl font-semibold">Premium</h3>
          <p className="text-4xl font-bold mt-4">$9<span className="text-sm font-normal opacity-75">/mo</span></p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>✅ Unlimited generations</li>
            <li>✅ Article Writer</li>
            <li>✅ Blog Title Generator</li>
            <li>✅ Image Generation</li>
            <li>✅ Background Removal</li>
            <li>✅ Resume Review</li>
          </ul>
          <button className="mt-6 w-full py-2 rounded-lg bg-white text-primary font-semibold">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;