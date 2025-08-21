import PopularProductCard from "../components/PopularProductCard"
import { products } from "../constants"

function PopularProducts() {
    return (
       <section id="products" class="max-container max-sm:mt-12">
        <div class='flex flex-col justify-start gap-5'>
            <h2 class='text-4xl font-palanquin font-bold'>Our <span class='text-coral-red'>Popular</span> Products</h2>
            <p class='lg:max-w-lg mt-2 font-mono text-slate-gray'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit itaque eos facilis dolores sunt cumque excepturi rem sint aperiam molestias.
            </p>
        </div>
        <div class='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
            {products.map(product => <PopularProductCard key={product.name} product={product} />)}
        </div>
       </section>
    )
}

export default PopularProducts
