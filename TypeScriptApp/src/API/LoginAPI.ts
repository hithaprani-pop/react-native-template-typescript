import AsyncStorage from '@react-native-async-storage/async-storage';
import { endPoints } from '../Configurations/Configuration';

export const LoginAPI = (
  params: { name: string; password: string },
  onScuccess: (data: string | null) => void,
  onFaliure: (data: string | null) => void,
) => {
  // fetch(endPoints.login, {
  //   method: 'POST',
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(params),
  // })
  //   .then((data) => {
  //     onScuccess(data);
  //   })
  //   .catch((error) => {
  //     onFaliure(error);
  //   });
  AsyncStorage.getItem('login')
    .then(data => {
      AsyncStorage.setItem('login', JSON.stringify(params));
      onScuccess(data);
    })
    .catch(error => {
      onFaliure(error);
    });
};
