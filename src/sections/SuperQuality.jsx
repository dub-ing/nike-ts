import { shoe8 } from "../assets/images"
import Button from "../components/Button"

function SuperQuality() {
    return (
        <section id="about-us" class='flex justify-between items-center max-lg:flex-col gap-10 will-change-transform max-container'>
            <div class='flex flex-1 flex-col'>
                <h2 class='font-palanquin text-4xl caption-top font-bold lg:max-w-lg'>We Provide you <span class='text-coral-red'>Super</span><span class='text-coral-red'> Quality</span> Shoes</h2>
                <p class='mt-4 lg:max-w-lg info-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab ducimus tenetur dolorum assumenda voluptatum similique fuga debitis minima repellat!
                </p>
                <p class='mt-6 lg:max-w-lg info-text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, est.
                </p>
                <div class='mt-11'>
                    <Button label='View details'/>
                </div>
            </div>
            <div class='flex-1 flex justify-center'>
                <img src={shoe8} alt="shoe type 8" width={570} height={522} />
            </div>
        </section>
    )
}

export default SuperQuality
