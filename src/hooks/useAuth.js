import { useEffect, useState } from 'react';
import axios from 'axios';

const URI = 'http://challenge-react.alkemy.org/';

export const useAuth = (user) => {
  const [data, setData] = useState({
    loading: false,
    token: null,
    error: null,
  });
  

  const { loading, token, error } = data;

  useEffect(() => {
    const getToken = async () => {
      const response = await axios
        .post(URI, {
          email: user.email,
          password: user.password,
        })
        .then((r) => {

          setData({
            loading: false,
            token: r.data.token,
          });
        })
        .catch(err => {
          setData({loading: false, token: null, error: error.message})
        })
    };

    if (user.email === 'challenge@alkemy.org' && user.password === 'react') {
    setData({...data, loading: true})
     getToken();
    }
  }, [user]);

  return { loading, token, error  };
};