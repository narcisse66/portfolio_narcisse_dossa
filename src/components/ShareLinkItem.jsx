const ShareLinkItem = ({ href, Icon, alt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-6 w-6 items-center justify-center overflow-hidden"
    >
      {/* Icône visible par défaut */}
      <div className="absolute inset-0 transform opacity-80 transition-transform duration-300 ease-in-out group-hover:-translate-y-6 group-hover:opacity-0">
        <Icon className="text-xl" />
      </div>

      {/* Icône qui prend la place au survol */}
      <div className="absolute inset-0 translate-y-6 transform opacity-0 transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
        <Icon className="text-xl" />
      </div>
    </a>
  );
};

export default ShareLinkItem;
