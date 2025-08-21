import { offer } from "../assets/images";
import Button from "../components/Button";

function SpecialOffer() {
    return (
      <section class='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
        <div class='flex-1'>
            <img src={offer} alt="discount images" width={773} height={687} class='object-contain w-full' />
        </div>
        <div class="flex flex-1 flex-col">
          <h2 class="font-palanquin text-4xl caption-top font-bold lg:max-w-lg"><span class="text-coral-red">Special</span> Offer
          </h2>
          <p class="mt-4 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ab
            ducimus tenetur dolorum assumenda voluptatum similique fuga debitis
            minima repellat!
          </p>
          <p class="mt-6 lg:max-w-lg info-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorum unde rerum libero placeat tempore.
          </p>
          <div class="mt-11 flex flex-wrap gap-4">
            <Button label="View details" />
            <Button label="Learn more" backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'  />
          </div>
        </div>
      </section>
    );
}

export default SpecialOffer
