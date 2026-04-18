import Image from "next/image";
export default function Hero() {
  return (
    <div className="w-full flex flex-col pt-10 items-center gap-y-5">
      {/* flex col: kebawah */}
      <Image
        src="/naruto.png"
        alt="hero"
        width={500}
        height={500}
        className="width w-72 h-auto rounded-full"
      />
      <h1 className="w-full text-center max-w-xl font-bold">
        Wilma Auraruna Khalif
      </h1>
      <p className="w-full max-w-3xl text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea deleniti,
        totam amet sequi hic minima obcaecati numquam at cum impedit quam facere
        necessitatibus in esse velit consequatur! Saepe, laudantium error!
      </p>
    </div>
  );
}
