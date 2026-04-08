function Footer({ footer }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__content">
        <p>{footer.note}</p>
      </div>
    </footer>
  );
}

export default Footer;
