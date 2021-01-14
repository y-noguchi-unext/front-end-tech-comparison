import {writable} from 'svelte/store';
import type ICurrentUser from './ICurrentUser';

const createWritableStore = () => {
  const { subscribe, set, update } = writable<ICurrentUser>(null);
  
  return {
    subscribe,
    set,
    update,
    useLocalStorage: () => {
      const json = localStorage.getItem('currentUser');
      if (json) {
        set(JSON.parse(json));
      }
      
      subscribe(current => {
        localStorage.setItem('currentUser', JSON.stringify(current));
      });
    }
  };
}

export const currentUser = createWritableStore();