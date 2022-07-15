import { useEffect, useRef, useState } from 'react';

const useFetch = (collection: string) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: [], loading: true, error: '' });

    fetch(
      `https://ricardo-espinoza-default-rtdb.firebaseio.com/${collection}.json`
    )
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: '',
            data,
          });
        }
      })
      .catch(() => {
        setState({
          data: [],
          loading: false,
          error: 'No se pudo cargar la info',
        });
      });
  }, [collection]);

  return state;
};

export default useFetch;
