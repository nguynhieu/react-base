import { AuthState } from 'app/containers/Auth/types';
import { ShopState } from 'app/containers/Shop/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

export interface RootState {
auth?: AuthState;
shop?: ShopState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
