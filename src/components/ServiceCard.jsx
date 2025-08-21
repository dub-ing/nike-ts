function ServiceCard({service}) {
    const {imgURL, label, subtext} = service
    return (
        <div class='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 '>
            <div class='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
                <img src={imgURL} alt="image icon" width={24} height={24} />
            </div>
            <h3 class='font-palanquin mt-5 text-3xl leading-normal font-bold'>
                {label}
            </h3>
            <p class='mt-3 font-mono text-slate-gray text-lg break-words leading-normal'>{subtext}</p>
        </div>
    )
}

export default ServiceCard
