import { Button } from "../ui/button"
import { topNotchFeatures } from "@/constants"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
    },
  }),
}

const TopNotch = () => {
  return (
    <div className="w-full bg-[#eee] dark:bg-black mt-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-5"
        >
          <Button className="rounded-3xl w-60 bg-[#3b4eff] gap-2 px-6 py-4">
            <img
              src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/67454e5d6398e79b4ca5a8b5_Webflow%20Icon.png"
              alt="Webflow Icon"
            />
            <h1 className="text-lg text-white">Top-Notch Features</h1>
          </Button>
          <h2 className="text-4xl font-medium">
            Limitless Features and <br /> Endless Possibilities.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {topNotchFeatures.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 p-4 dark:bg-neutral-900 w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] hover:scale-105 transition"
            >
              <span className="w-24 h-24 dark:bg-black bg-[#fff] rounded-full flex items-center justify-center shadow-md">
                <img
                  className="w-10 h-10 sm:w-12 sm:h-12"
                  src={feature.icon}
                  alt={`${feature.title} Icon`}
                />
              </span>
              <h1 className="text-center text-base sm:text-lg font-semibold leading-tight dark:text-white">
                {feature.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopNotch
