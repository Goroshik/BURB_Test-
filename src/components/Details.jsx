import './index.css';

export function FullDetailView({ data }) {
  return (
    <div className="flexRow marginBottom">
      <img src={data?.image?.medium} alt={data?.name} />
      <div className="showDescription">
        <h3 className="marginTopNull">{data?.name}</h3>
        <div dangerouslySetInnerHTML={{ __html: data?.summary }} />
      </div>
    </div>
  );
};
