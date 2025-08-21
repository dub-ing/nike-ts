import { star } from "../assets/icons"

function PopularProductCard({product}) {
    const { imgURL, name, price } = product
    
    return (
        <div class='flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={imgURL} alt={name} class='w-[280px] h-[280px]' />
            <div class='mt-8 flex justify-start gap-2.5'>
                <img src={star} alt="rating star icon" width={24} height={24} />
                <p class='font-mono text-xl leading-normal text-slate-gray'>(4.5)</p>
            </div>
            <h3 class='mt-2 text-2xl leading-normal font-semibold font-palanquin'>{name}</h3>
            <p class='mt-2 font-semibold font-mono text-coral-red text-2xl leading-normal'>{price}</p>
        </div>
    )
}

export default PopularProductCard
