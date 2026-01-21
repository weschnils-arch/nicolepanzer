import Image from "next/image";

export const Divider = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="flex justify-center">
        <Image
          src="/divider_sun_yellow.webp"
          alt="Divider"
          width={1200}
          height={150}
          className="w-full max-w-[1000px] h-auto"
          quality={100}
        />
      </div>
    </div>
  );
};

