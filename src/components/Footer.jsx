const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex h-full w-full flex-col items-start justify-start border-t border-t-custom-black-90 text-start">
      <p className="mt-8 text-sm font-light text-custom-black-40">
        © Copyright {currentYear}. All rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
