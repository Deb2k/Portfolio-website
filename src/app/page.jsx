import Image from "next/image";

const Homepage = () => {
  return (
    <div className="h-full flex flex-col  px-4 sm:px-8 lg:flex-row md:px-12 lg:px-20 xl:px-48 text-xl">
    {/* IMAGE CONTAINER */}
    <div className="h-1/2 lg:h-full lg:w-1/2 relative">
      <Image src="/hero.png" alt="hero" fill className="object-contain"/>
    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2  gap-8 items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experience, Designing Tommorow</h1>
      {/*DESC */}
      <p className="md:text-xl">Welcome to my digital canvas</p>
      {/*Buttons for navigation */}
      <div className="flex gap-4 w-full">
        <button className="p-4 rounded-lg ring-1 ring-black  bg-black text-white">View my work</button>
        <button className="p-4 rounded-lg ring-1 ">Contact me</button>
      </div>
    </div>
  </div>
  )
};

export default Homepage;
