import ProductCart from "./ProductCard";
import ProductCardWithDescription from "./ProductCardWithDescription";

export default function ProductsGrid() {
    return (
        <ul className="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
            <li>
                <ProductCardWithDescription />
            </li>

            <li>
                <a href="#" className="block overflow-hidden group">
                    <img
                        src="https://sns-img-hw.xhscdn.com/f52dc68f-58fe-8e86-258e-ffade37623a0?imageView2/2/w/648/format/webp"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative pt-3 bg-white">
                        <h3
                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Basic Tee
                        </h3>

                        <p className="mt-2">
                            <span className="sr-only"> Regular Price </span>

                            <span className="tracking-wider text-gray-900"> £24.00 GBP </span>
                        </p>
                    </div>
                </a>
            </li>

            <li>
                <a href="#" className="block overflow-hidden group">
                    <img
                        src="https://sns-img-hw.xhscdn.com/2e6fdb92-c05f-91f2-011a-1aaeea21bb80?imageView2/2/w/648/format/webp"
                        alt=""
                        className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                    />

                    <div className="relative pt-3 bg-white">
                        <h3
                            className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                        >
                            Basic Tee
                        </h3>

                        <p className="mt-2">
                            <span className="sr-only"> Regular Price </span>

                            <span className="tracking-wider text-gray-900"> £247.00 GBP </span>
                        </p>
                    </div>
                </a>
            </li>

            <li>
                <ProductCart />
            </li>
            <li>
                <ProductCardWithDescription />
            </li>
        </ul>)
}