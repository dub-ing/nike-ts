import Hero from "./components/Hero";
import Popularproducts from "./components/PopularProducts";
import SuperQuality from "./components/SuperQuality";
import Services from "./components/Services";
import SpecialOffer from "./components/SpecialOffer";
import CustomerReview from "./components/CustomerReview";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative">
      Nav
      <section class="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section class="padding">
        <Popularproducts />
      </section>
      <section class="padding">
        <SuperQuality />
      </section>
      <section class="padding-x py-10">
        <Services />
      </section>
      <section class="padding">
        <SpecialOffer />
      </section>
      <section class="bg-pale-blue padding">
        <CustomerReview />
        </section>
      <section class="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section class="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}

export default App;
