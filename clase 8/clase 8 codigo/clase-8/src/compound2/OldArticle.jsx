export default function OldArticle({
  title,
  titleClass,
  content,
  contentClass,
  container,
  descripcion,
  descripcionClass,
  span,
  spanClass,
}) {
  return (
    <article className={`article-container ${container}`}>
      <h2 className={`article-title ${titleClass}`}>{title}</h2>
      <p className={`article-description ${descripcionClass}`}>{descripcion}</p>
      <span className={`article-span ${spanClass}`}>{span}</span>
    </article>
  );
}
