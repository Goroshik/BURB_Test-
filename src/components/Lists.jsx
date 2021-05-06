import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './index.css';

export const EpisodeList = (props) => {
  const match = useRouteMatch();
  const [episodesCount, setEpisodesCount] = useState(10);

  const onClickMore = () => setEpisodesCount(episodesCount + 10);

  return (
    <>
      <h3>Episodes</h3>
      <div className="flexColumn">
        {props.data.slice(0, episodesCount).map(ep => {
          return (
            <div key={ep?.name} className="episodeListItem flexRow">
              <img src={ep?.image?.medium} alt={ep?.name} />
              <div className="showDescription">
                <h5 className="marginTopNull">{ep?.name}</h5>
                <div dangerouslySetInnerHTML={{ __html: ep?.summary }} />
                <p>
                  <Link to={`${match.url}/episodes/${ep.id}`}>
                    ...more details.
                  </Link>
                </p>
              </div>
            </div>
          )
        })}
        <span className="loadMore" onClick={() => onClickMore()}>
          {
            episodesCount < props.data.length &&
            <b>...load more episodes</b>
          }
        </span>
      </div>
    </>
  )
}

export const MovieList = ({ data }) => {
  const match = useRouteMatch();

  const [showsCount, setShowsCount] = useState(10);

  const onClickMore = () => setShowsCount(showsCount + 10);

  return (
    <div className="flexColumn marginTop">
      {data.slice(0, showsCount).map(({ show: s }, index) => {
        return (
          <div key={`${s?.name}-${index}`} className="episodeListItem flexRow">
            <img src={s?.image?.medium} alt={s?.name} />
            <div className="showDescription">
              <h5 className="marginTopNull">{s?.name}</h5>
              <div dangerouslySetInnerHTML={{ __html: s?.summary }} />
              <p>
                <Link to={`${match.url}movies/${s.id}`}>
                  ...more details.
                  </Link>
              </p>
            </div>
          </div>
        )
      })
      }
      <span className="loadMore" onClick={() => onClickMore()}>
        {
          showsCount < data.length &&
          <b>...load more episodes</b>
        }
      </span>
    </div >
  )
}
