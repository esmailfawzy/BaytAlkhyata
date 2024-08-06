import {RouteDefinition, SheetDefinition, registerSheet} from 'react-native-actions-sheet';
import CourseOverview from './screens/User/Drawer/Journeys/CourseOverview';


// Register your Sheet component.
/**
 * Registering the sheets here because otherwise sheet closes on
 * hot reload during development.
 */
registerSheet('course-overview', CourseOverview);

/**
 * We extend some of the types here to give us great intellisense
 * across the app for all registered sheets.
 */
declare module 'react-native-actions-sheet' {
  export interface Sheets {
    /**
     * A simple sheet example
     */
    // 'course-overview': SheetDefinition;
    'course-overview': SheetDefinition<{
      routes: {
        'route-a': RouteDefinition;
        'route-b': RouteDefinition<{
          value: string
        }>;
      }
    }>;
  }
}

export {};

/**
 * Since we are not importing our Sheets in any component or file, we want to make sure
 * they are bundled by the JS bundler. Hence we will import this file in App.js.
*/