
const Header = ({ title, image,video , children, buttonText }) => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__container-bg">
          {video ? (
            <video src={video} autoPlay loop muted />
          ) : (
            <img src={image} alt="Header Image" />
          )}
        </div>
        <div className="header__content">
          <h3>{title}</h3>
          <p>{children}</p>
          <button className="header__button">{buttonText}</button>
        </div>
      </div>
    </header>
  );
};

export default Header;