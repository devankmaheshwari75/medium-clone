import { atom } from "recoil";

export const fullName = atom<string>({
  key: 'fullName', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
