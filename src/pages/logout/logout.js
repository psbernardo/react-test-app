import { useEffect } from 'react';
import authSvc from '../../services/AuthService';

export default function Logout() {
  useEffect(() => {
    authSvc.logout();
    window.location = '/';
  }, []);

  return null;
}
