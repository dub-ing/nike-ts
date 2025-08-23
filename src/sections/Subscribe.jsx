import Button from "../components/Button";

function Subscribe() {
  return (
    <section
      class="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 class="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for <span class="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div class="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="Subscribe@Dub.com" class="input" />
        <div class="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
