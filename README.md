# Neighborhood Map Project
Neighborhood Map project that is featuring a map of local food around a certain default location.

## Instructions
1. Run `npm install` to install all project dependencies.
2. Run `npm start` to start the app.
3. The list view shows list of all default locations in default neighborhood. Grabbed when components are first load using FourSquare's API. Clicking on each item will show the corresponding marker on the map.
4. Clicking on each marker whil show you what venue location it is.
5. Select filter dropdown to filter which venue to be seen spefically.

### Important
For service worker, it will only work in production mode. Therefore, for step 2, to verify service worker, please run this instead and then follow the rest of the steps.  
2. Run `npm run build`  
This will build the app for production in the build folder. It will bundle React in production mode and will optimize build for best performance.   

## Contributing
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details