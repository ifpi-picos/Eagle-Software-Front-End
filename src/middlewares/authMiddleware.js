import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export const authMiddleware = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

        if (!token) {
          router.replace('/login');
        } else {
          setLoading(false);
        }
      };

      checkAuth();
    }, [router]);
    return loading ? <p>Loading...</p> : <WrappedComponent {...props} />;
  };

  return Auth;
};