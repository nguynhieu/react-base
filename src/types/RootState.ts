import { AuthState } from 'app/containers/Auth/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

export interface RootState {
auth?: AuthState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
