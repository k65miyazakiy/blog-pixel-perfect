export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="flex justify-center gap-4 pb-4 pt-8 text-xs">
        <div>&copy; {year} kussaka</div>
      </div>
    </footer>
  );
};
