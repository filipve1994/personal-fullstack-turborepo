// Import all the components here, there are more elegant ways to do this but this is the simplest
import PersonalButton from "./components/PersonalButton/PersonalButton.vue";
/**
 * The key point here is, exporting all the functions, constants, enums, types etc. by using index.ts file. We are gonna point to it (actually, the output based on it) in our package.json in the following steps. So, we can say that, this is the place where we describe all the things we expose to the outside world and let other developers to be able to use this package.
 */
export { default as sum } from './utils/sum';
export { default as subtract } from './utils/subtract';

export { PersonalButton };
