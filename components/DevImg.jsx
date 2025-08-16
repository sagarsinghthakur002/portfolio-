import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={containerStyles}>
      <Image
        src={imgSrc}
        alt="Developer"
        className="w-full h-[40rem] object-contain -mt-35"
        priority
      />
    </div>
  );
};

export default DevImg;
