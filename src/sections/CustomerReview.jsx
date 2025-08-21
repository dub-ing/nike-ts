import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

function CustomerReview() {
    return (
        <section class='max-container'>
            <h3 class='font-palanquin text-4xl font-bold text-center'>What Our <span class='text-coral-red'>Customers</span> Say?</h3>
            <p class='font-mono info-text m-auto mt-4 text-center max-w-lg' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam mollitia hic quam possimus?</p>
            <div class='flex justify-evenly mt-24 flex-1 items-center max-lg:flex-col gap-14'>
            {reviews.map((review, index) => <ReviewCard key={index} review={review}/>)}
            </div>
        </section>
    )
}

export default CustomerReview   
