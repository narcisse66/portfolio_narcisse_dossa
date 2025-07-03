const ContactLink = ({ href, Icon, text }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      translate="no"
      className="group relative flex flex-row-reverse items-center justify-center gap-1.5 text-sm font-light text-custom-black-40"
    >
      {text}

      <div className="relative h-6 w-6 overflow-hidden">
        {/* Icône au-dessus, qui sortira vers le haut */}
        <div className="absolute inset-0 transform opacity-80 transition-transform duration-300 group-hover:-translate-y-6 group-hover:opacity-0">
          <Icon className="text-2xl" />
        </div>

        {/* Icône en dessous, qui monte pour prendre la place */}
        <div className="absolute inset-0 translate-y-6 transform opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Icon className="text-2xl" />
        </div>
      </div>
    </a>
  );
};

export default ContactLink;
