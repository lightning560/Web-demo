import CollectionsGrid from "./CollectionsGrid";
import CollectionsWithProduct from "./CollectionsWithProduct";
import Pagination from "./Pagination";
import ProductsGrid from "./ProductsGrid";

export default function Mall() {
    return (
        <section>
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        Product Collection
                    </h2>

                    <p className="max-w-md mt-4 text-gray-500">
                        iPhone offers vibrant, true-to-life colors and sharp image quality. The display is designed to deliver an immersive viewing experience, whether you're watching videos, playing games, or browsing the web
                    </p>
                </header>
                <CollectionsWithProduct />
                <CollectionsGrid />
                <ProductsGrid />
                <Pagination />
            </div>
        </section>

    );
}