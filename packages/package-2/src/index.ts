import { LIB_NAME as LIB_NAME_2 } from '@martines3000/lib-2';
import { PACKAGE_NAME as PACKAGE_NAME_3 } from '@martines3000/package-3';

// eslint-disable-next-line import/prefer-default-export
export const PACKAGE_NAME = 'package-2';

const main = () => {
  console.log(`Hello from ${PACKAGE_NAME}`);

  // Dependencies
  console.log(`Dependencies: ${LIB_NAME_2}, ${PACKAGE_NAME_3}`);
};

main();
