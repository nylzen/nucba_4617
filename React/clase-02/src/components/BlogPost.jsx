export const BlogPost = ({ title, author, description, post }) => {
  return (
    <article>
      <hr />
      <h1>{title}</h1>
      <p>Autor: {author}</p>
      <p>{description}</p>

      <section>
        <p>{post}</p>
      </section>
      <hr />
    </article>
  );
};
