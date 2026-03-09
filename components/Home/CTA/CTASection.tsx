import Image from "next/image"
import FeatureCard from "./FeatureCard"
import { features } from "@/data/features"

const CTASection = () => {
  return (
    <section className="bg-black text-white py-24">

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-start gap-6 mb-12">

          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
          />

          <div>
            <span className="text-xs bg-white/10 px-3 py-1 rounded-md">
              Learn, Connect, and Innovate
            </span>

            <h2 className="text-4xl font-semibold mt-4">
              Be Part of the Future Tech Revolution
            </h2>

            <p className="text-gray-400 mt-3 max-w-2xl text-sm">
              Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry.
            </p>
          </div>

        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 bg-white/5 p-6 rounded-2xl">

          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              feature={feature}
            />
          ))}

        </div>

      </div>

    </section>
  )
}

export default CTASection