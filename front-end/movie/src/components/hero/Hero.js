import { Paper } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {movies.map((movie) => {
          return (
            <Paper key={movie.id}>
              <div className='movie-card-container'>
                <div className='movie-card'>
                  <div className='movie-detail'>
                    <div className='movie-poster'>
                      <img src={movie.poster} alt="" />
                    </div>
                    <div className='movie-title'>
                      <h4>{movie.title}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </Paper>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Hero;
