import { LIB_NAME as LIB_NAME_1 } from '@martines3000/lib-1';
import { PACKAGE_NAME as PACKAGE_NAME_2 } from '@martines3000/package-2';

const PACKAGE_NAME = 'package-1';

const main = () => {
  console.log(`Hello from ${PACKAGE_NAME}`);

  // Dependencies
  console.log(`Dependencies: ${LIB_NAME_1}, ${PACKAGE_NAME_2}`);
};

main();
