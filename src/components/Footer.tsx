const year = new Date().getFullYear();

const Footer = (): JSX.Element => {
  return (
    <footer>
      <div className="col-start-3 col-end-11 text-center text-xl">
        <p className="p-6">Morgan Di Val &copy; {year}</p>
      </div>
    </footer>
  );
};

export default Footer;
