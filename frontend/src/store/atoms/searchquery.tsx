import { atom } from "recoil";

export const searchQuery = atom<string>({
  key: 'searchQuery', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
