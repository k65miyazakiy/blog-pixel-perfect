export const Img = (props: { src: string; alt: string }) => {
  return (
    <div className="flex justify-center py-4">
      <img src={props.src} alt={props.alt} className="max-w-screen-md" />
    </div>
  );
};
