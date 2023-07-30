export default function ProductCardWithDescription() {
    return (
        <a href="#" className="block overflow-hidden group">
            <img
                src="https://sns-img-hw.xhscdn.com/b23dcc09-13e1-c071-8677-d02791bce1f2?imageView2/2/w/648/format/webp"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
            />

            <div className="relative pt-3 bg-white">
                <div>
                    <h3
                        className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                    >
                        Small Headphones
                    </h3>

                    <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                        iPhone Packed with innovative features and cutting-edge technology, it offers an exceptional mobile experience.
                    </p>
                </div>

                <p className="text-gray-900">$299</p>
            </div>
        </a>
    )
}