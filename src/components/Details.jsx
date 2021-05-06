import './index.css';

export function FullDetailView({ data, isEpisode = false }) {
  return (
    <div className="details">
      <img src={data?.image?.medium} alt={data?.name} />
      <div className="margin_left_5">
        <h3>{data?.name}</h3>
        {
          isEpisode &&
          <p>season: {data?.season} episode: {data?.number}</p>
        }
        <div dangerouslySetInnerHTML={{ __html: data?.summary }} />
      </div>
    </div>
  );
};
