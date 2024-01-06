import Image1 from "../assets/Image1.png";
export default function Header() {
  return (
    <div className="mt-10">
      <div className="lg:bg-orange-400 flex flex-col justify-center lg:flex-row lg:justify-evenly items-center lg:mx-44 px-2 rounded-3xl">
        <div className="text-center lg:text-left lg:px-20">
          <p className="text-3xl lg:text-4xl text-black lg:text-white font-extrabold ">
            Deliver Food To Your Door Step|
          </p>
          <p className="text-gray-600 lg:text-slate-200 text-md lg:text-xl mt-4 font-light ">
            Authentic Food|, Quick Service, Fast Delivery.
          </p>
        </div>
        <div className="bg-orange-400 md:bg-transparent flex justify-center rounded-3xl mt-10 lg:mt-0 ">
          <img
            src={Image1}
            alt="A boy with foods, floating over his hand"
            className="h-64 mx-10 lg:mx-0 lg:mr-16"
          />
        </div>
      </div>
    </div>
  );
}
