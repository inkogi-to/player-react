export const VideoList = ({ videos, onSelect }) => {
  return (
    <ul>
      {videos.map(({ link, id }) => {
        return (
          <li key={id} onClick={() => onSelect(link)}>
            {link}
          </li>
        )
      })}
    </ul>
  );
};
