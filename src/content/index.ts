import { content as us } from './us';
import { content as uk } from './uk';

export const region = import.meta.env.VITE_REGION === 'uk' ? 'uk' : 'us';
export const content = region === 'uk' ? uk : us;
