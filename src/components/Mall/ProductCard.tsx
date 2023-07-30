export default function ProductCart() {
    return (
        <a href="#" className="block overflow-hidden group">
            <img
                src="https://sns-img-qc.xhscdn.com/cdabe9f9-ef76-9c81-0c80-22bcdc53c71d?imageView2/2/w/648/format/webp"
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
    )
}