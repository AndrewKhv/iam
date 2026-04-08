function SectionHeader({ eyebrow, title, description, centered = false, titleId }) {
  return (
    <header className={`section-header${centered ? ' centered' : ''}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  );
}

export default SectionHeader;
