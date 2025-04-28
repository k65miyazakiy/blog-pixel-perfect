import Image from "next/image";

export const Img = (props: { src: string; alt: string }) => {
  return (
    <div className="flex justify-center py-4">
      <Image src={props.src} alt={props.alt} className="max-w-screen-md" />
    </div>
  );
};
