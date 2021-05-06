import { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import './index.css';

export const EpisodeList = (props) => {
  const [episodesCount, setEpisodesCount] = useState(10);

  const onClickMore = () => setEpisodesCount(episodesCount + 10);

  return (
    <>
      <h3>Episodes</h3>
      <div>
        {props.data.slice(0, episodesCount).map(ep => {
          return (
            <div key={ep?.name} className="listItem">
              <img src={ep?.image?.medium} alt={ep?.name} />
              <div className="margin_left_5">
                <h5>{ep?.name}</h5>
                <p>season: {ep?.season} episode: {ep?.number}</p>
                <div dangerouslySetInnerHTML={{ __html: ep?.summary }} />
                <p>
                  <Link to={`/episodes/${ep.id}`}>
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
    <div className="movieList">
      {data.slice(0, showsCount).map(({ show: s }, index) => {
        return (
          <div key={`${s?.name}-${index}`} className="listItem">
            <img src={s?.image?.medium} alt={s?.name} />
            <div className="margin_left_5">
              <h3>{s?.name}</h3>
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
