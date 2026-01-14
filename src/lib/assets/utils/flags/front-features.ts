import { PUBLIC_FF_LIST, PUBLIC_FF_NEW_ARRIVALS, PUBLIC_FF_PRICE } from '$env/static/public';

export const FF_list = PUBLIC_FF_LIST === 'true';
export const FF_price = PUBLIC_FF_PRICE === 'true';
export const FF_newArrivals = PUBLIC_FF_NEW_ARRIVALS === 'true';
