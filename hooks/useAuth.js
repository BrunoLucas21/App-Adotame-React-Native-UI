import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const registro = onAuthStateChanged(auth, user => {
      console.log('got user: ', user);

      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    })

    return registro;
  }, []);

  return { user }
}