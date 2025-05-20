import React, { useMemo } from "react"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import BlurBox from "@/components/layout component/BlurBox.component"

// Example wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "TripSet — Travel Agency",
    subtitle: "Travel Agency",
    price: 455,
    image:
      "https://res.cloudinary.com/shotlin/image/upload/f_auto,q_auto:low,w_500/c_fill,dpr_auto,f_avif,q_auto:eco,w_800/v1/images/1738254682891?_a=BAMCkGa40",
  },
  {
    id: 2,
    name: "Another Product",
    subtitle: "Category or Subtext",
    price: 199,
    image:
      "https://res.cloudinary.com/shotlin/image/upload/f_auto,q_auto:low,w_500/c_fill,dpr_auto,f_avif,q_auto:eco,w_800/v1/images/1738251095336?_a=BAMCkGa40",
  },
]

// Define motion variants outside the component to avoid re-creation
const motionVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: "easeInOut" },
  whileHover: { scale: 1.02 },
}

// Memoized Wishlist Item for mobile/desktop cards
const WishlistItem = React.memo(({ item }) => {
  return (
    <motion.div
      {...motionVariants}
      className="relative bg-[#02050b] rounded-md overflow-hidden shadow-md"
    >
      {/* Remove Button */}
      <button
        title="Remove from wishlist"
        className="absolute top-2 right-2 bg-[#010204] p-2 rounded-full hover:bg-[#19103c] transition-colors"
      >
        <X className="w-4 h-4 text-[#EF4444]" />
      </button>

      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        loading="lazy"
        className="w-full h-48 object-cover"
      />

      {/* Card Content */}
      <div className="p-4">
        <h3 className="text-xl font-semibold">{item.name}</h3>
        <p className="text-sm text-[#ABB9CF] mb-2">{item.subtitle}</p>
        <p className="text-lg font-semibold text-[#22C55E] mb-4">${item.price}</p>
        <Button
          variant="default"
          className="bg-[#4BA1F5] hover:bg-[#3893e5]"
        >
          View Details
        </Button>
      </div>
    </motion.div>
  )
})

export default function Wishlist() {
  // Memoize the rendered list to avoid unnecessary re-renders.
  const renderedItems = useMemo(
    () =>
      wishlistItems.map((item) => (
        <WishlistItem key={item.id} item={item} />
      )),
    []
  )

  return (
    <main className="flex-1 p-4 sm:p-8 overflow-y-auto text-white">
      <div className="mx-auto max-w-7xl">
        <BlurBox
          className="rounded-md shadow-lg"
          style={{
            background: "hsla(220, 35%, 3%, 0.4)",
            borderColor: "rgb(71, 71, 71)",
          }}
        >
          <CardHeader className="px-6 pt-6">
            <CardTitle className="text-2xl font-bold">My Wishlist</CardTitle>
            <CardDescription className="text-gray-300">
              Manage your saved items
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {renderedItems}
            </div>
          </CardContent>
        </BlurBox>
      </div>
    </main>
  );
}
