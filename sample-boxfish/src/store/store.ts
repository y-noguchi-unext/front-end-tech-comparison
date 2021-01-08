import type { Writable } from 'svelte/store';
import type ICurrentUser from './ICurrentUser';
import {writable} from 'svelte/store';

export const currentUser: Writable<ICurrentUser> = writable(null);
