import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
      Source: string;
      Value: string;
    }>;
    Runtime: string;
  }

}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={props.movie.Poster}
        alt={props.movie.Title}
      />

      <div>
        <div className="movie-info">
          <span>{props.movie.Title}</span>
          <div className="meta">
            <div>
              <Star /> {props.movie.Ratings[0].Value}
            </div>

            <div>
              <Clock /> {props.movie.Runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}