import Unless from './unless.js';
import When from './when.js';

function If(props) {
  return props.condition ? props.children : null;
}

export default If;