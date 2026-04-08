import Reveal from './Reveal';

function TestimonialSection({ testimonial }) {
  return (
    <section className="section section-tight" aria-labelledby="testimonial-title">
      <div className="container">
        <Reveal as="blockquote" className="testimonial-card">
          <p className="section-eyebrow">{testimonial.eyebrow}</p>
          <p className="testimonial-quote" id="testimonial-title">
            {testimonial.quote}
          </p>
          <footer className="testimonial-meta">
            <strong>{testimonial.author}</strong>
            <span>{testimonial.role}</span>
          </footer>
        </Reveal>
      </div>
    </section>
  );
}

export default TestimonialSection;
