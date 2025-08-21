import { star } from "../assets/icons";

function ReviewCard({ review }) {
  const { imgURL, customerName, feedback, rating } = review;
  return (
    <div class="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt="cutomer"
        class="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p class="mt-6 max-w-sm text-center info-text">{feedback}</p>
      <div
        class="mt-3 flex justify-center items-center"
      >
        <img
          src={star}
          alt="star rating"
          width={24}
          height={24}
          class="object-contain m-0"
        />
        <p class='text-xl font-mono text-slate-gray'>({rating})</p>
      </div>
        <h3 class='mt-1 font-palanquin text-center font-bold text-3xl'>{customerName}</h3>
    </div>
  );
}

export default ReviewCard;
