import { useReveal } from '../hooks/useReveal';

function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  style,
  ...props
}) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal${isVisible ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--reveal-delay': `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
