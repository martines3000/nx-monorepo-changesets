import { LIB_NAME as LIB_NAME_2 } from '@martines3000/lib-2';
import { LIB_NAME as LIB_NAME_3 } from '@martines3000/lib-3';

// eslint-disable-next-line import/prefer-default-export
export const LIB_NAME = 'lib-1';

const main = () => {
  console.log(`Hello from ${LIB_NAME}`);

  // Dependencies
  console.log(`Dependencies: ${LIB_NAME_2}, ${LIB_NAME_3}`);
};

main();
