import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InfamousWebsite() {
  const products = [
    { id: 1, name: "Infamous Oversized Tee", price: "$45" },
    { id: 2, name: "Infamous Signature Hoodie", price: "$95" },
    { id: 3, name: "Infamous Cargo Pants", price: "$120" },
    { id: 4, name: "Infamous Snapback", price: "$40" },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-widest">INFAMOUS</h1>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
          <a href="#shop" className="hover:text-gray-400">Shop</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingBag className="w-5 h-5" />
          <Menu className="w-6 h-6 md:hidden" />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-b from-black to-gray-900">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          BUILT TO BE INFAMOUS
        </motion.h2>
        <p className="mt-6 max-w-xl text-gray-400">
          Premium streetwear for those who refuse to blend in. Bold cuts. Clean fits. Relentless attitude.
        </p>
        <Button className="mt-8 px-8 py-6 text-lg rounded-2xl bg-white text-black hover:bg-gray-200">
          Shop Now
        </Button>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 px-6">
        <h3 className="text-3xl font-bold mb-12 text-center">Featured Drops</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg">
                <CardContent className="p-6">
                  <div className="h-48 bg-gray-800 rounded-xl mb-4"></div>
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="text-gray-400">{product.price}</p>
                  <Button className="mt-4 w-full rounded-xl bg-white text-black hover:bg-gray-200">
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-950 text-center">
        <h3 className="text-3xl font-bold mb-6">Our Story</h3>
        <p className="max-w-2xl mx-auto text-gray-400">
          Infamous was created for individuals who live unapologetically. Every piece is designed with precision and attitude, blending minimalism with bold street culture.
        </p>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-6 border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Infamous. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Twitter</a>
          <a href="#" className="hover:text-white">Email</a>
        </div>
      </footer>
    </div>
  );
}
