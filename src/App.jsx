import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Popularproducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import CustomerReview from "./sections/CustomerReview";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="relative">
      <Navbar />
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
