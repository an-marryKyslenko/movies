import React, { useContext, useState } from 'react';
import {
  Box,
  Grid,
  Paper
} from '@mui/material';
import MovieCardSelected from '../MovieCardSelected';
import { styled } from '@mui/material/styles';
import SelectedMoviesForm from '../SelectedMoviesForm';
import ConfirmModal from '../ConfirmModal';
import translate from '../../utils/translate';
import { AppContext } from '../../providers/appContext';

const SelectedMovies = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 'calc(100vh - 140px)',
  position: 'sticky',
  top: theme.spacing(2),


}));

const SelectedMoviesSection = ({ selectedMovies, deleteMovie }) => {
  const [modalTitle, setModalTitle] = useState('');
  const [link, setLink] = useState('');
  const { state } = useContext(AppContext);

  const onSubmiteForm = ({ listName }) => {
    const ids = selectedMovies.map(({ id }) => id)
    const link = `http://${window.location.host}/recommend?title=${listName}&ids=${ids.join(',')}&locale=${state}`

    setModalTitle(listName)
    setLink(link)
  }

  const onCloseConfirmModal = () => {
    setLink('')
  }
  return (
    <Grid item xs={12} md={4}>
      <SelectedMovies>
        <Box sx={{
          height: '100%',
          overflow: 'hidden auto',
          '&::-webkit-scrollbar': { height: 8, width: '2px', WebkitAppearance: 'none' },
          '&::-webkit-scrollbar-thumb': {
            borderRadius: 8,
            border: '1px solid',
            borderColor: 'dark',
            backgroundColor: 'rgba(0 0 0 / 0.2)',
          },
        }}>
          {selectedMovies.length > 0
            ?
            (selectedMovies.map((movie, index) => (
              <MovieCardSelected
                key={index}
                movie={movie}
                onCardDelete={deleteMovie}
              />
            )))
            :
            <h1>{translate('emptyList')}</h1>
          }
        </Box>
        <SelectedMoviesForm onSubmit={onSubmiteForm} />
        <ConfirmModal url={link} title={modalTitle} open={!!link} onClose={onCloseConfirmModal} />
      </SelectedMovies>
    </Grid>
  )
}

export default SelectedMoviesSection