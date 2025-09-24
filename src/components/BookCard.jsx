export default function BookCard({ image, title, price, url }) {
  return (
    <div className="book-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View Details
      </a>
    </div>
  );
}