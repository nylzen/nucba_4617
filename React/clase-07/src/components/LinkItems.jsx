export const LinkItems = (props) => {
  const { name, url } = props;

  console.log(props)
  return (
    <li>
      <a href={url}>{name}</a>
    </li>
  );
};
