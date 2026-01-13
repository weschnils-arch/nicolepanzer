import Image from "next/image";

export const Divider = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="flex justify-center">
        <Image
          src="/divider_sun.png"
          alt="Divider"
          width={600}
          height={5}
          className="w-1/2 max-w-[600px] h-auto"
          quality={100}
        />
      </div>
    </div>
  );
};

