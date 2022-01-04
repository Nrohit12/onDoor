import AuthLoadingScreen from './AuthLoading';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const {user} = useSelector(state => state);

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    setTimeout(function () {
      setLoading(false);
    }, 2000);
  };

  if (loading) return <AuthLoadingScreen />;

  return user.uid == undefined ? <AuthNavigator /> : <AppNavigator />;
};

export default Main;
