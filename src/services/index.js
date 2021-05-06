import ajax from 'ajax';

export const searchByQuery = async (searchString = 'The Powerpuff Girls') => {
  return new Promise((res, rej) => {
    ajax.get(`http://api.tvmaze.com/search/shows?q=${searchString}`, {}, (result, error) => {
      if (error) rej(error)

      res(result)
    })
  })
}

export const getMovieById = async (id) => {
  return new Promise((res, rej) => {
    ajax.get(`http://api.tvmaze.com/shows/${id}`, {}, (result, error) => {
      if (error) rej(error)

      res(result)
    })
  })
}

export const getEpisodesByMovieId = async (id) => {
  return new Promise((res, rej) => {
    ajax.get(`http://api.tvmaze.com/shows/${id}/episodes`, {}, (result, error) => {
      if (error) rej(error)

      res(result)
    })
  })
}

export const getEpisode = async (mId, eId) => {
  return new Promise((res, rej) => {
    ajax.get(`http://api.tvmaze.com/shows/${mId}/episodes/${eId}`, {}, (result, error) => {
      if (error) rej(error)

      res(result)
    })
  })
}