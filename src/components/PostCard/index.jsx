import "./style.css";

export const PostCard = ({ cover, id, title, body }) => {
  return (
    <div className="post">
      <img src={cover} alt={title} />
      <div className="post-content">
        <h2>{title}</h2>
        <hr /> <br />
        <p>{body}</p>
      </div>
    </div>
  );
};
