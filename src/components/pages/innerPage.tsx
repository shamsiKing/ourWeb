import Marquee from "react-fast-marquee"
import { Button } from "../ui/button"
import { brandsRow1 } from "@/constants"

const InnerPage = () => {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 space-y-40">
        <div className="text-center justify-center items-center space-y-5">
          <Button className="rounded-3xl w-50 bg-[#3b4eff] gap-2 px-6 py-4">
            <img
              src="https://cdn.prod.website-files.com/672aef24c0531e325c1a619e/67454e5d6398e79b4ca5a8b5_Webflow%20Icon.png"
              alt="Webflow Icon"
              className=""
            />
            <h1 className="text-lg text-white">Inner Pages</h1>
          </Button>
          <h2 className="text-4xl font-medium">
            Innovative Inner Pages <br /> to Suit Your Needs.
          </h2>
        </div>
      </div>

      <section className="bg-background">
        <div className="w-full px-4">
          <Marquee gradient={false} speed={100}>
            <div className="flex items-center">
              {brandsRow1
                .filter((brand) => !!brand.logo)
                .map((brand, index) => (
                  <div
                    key={index}
                    className="mx-4 transition duration-300 ease-in-out hover:brightness-50 "
                  >
                    <img
                      src={brand.logo}
                      alt={`Brand ${index}`}
                      className="w-[350px] h-[350px] rounded-sm"
                    />
                  </div>
                ))}
            </div>
          </Marquee>
        </div>
      </section>
    </div>
  )
}

export default InnerPage
