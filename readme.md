Approach
1. Project Setup
 I chose to initialize the project using create-mf-app to set up the foundation for a microfrontend architecture. This choice facilitates the seamless integration of microfrontend capabilities in the future.

2. Microfrontend Architecture
 The selection of create-mf-app provides a project structure optimized for microfrontend development. This architecture enables breaking down the application into smaller, manageable, and independent modules, enhancing scalability and maintainability.

3. UseReducer and useContext
 Using useContext and useReducer in React is a powerful combination for managing state and implementing complex functionalities like deleting products, updating products, and changing user types. that you can check in /src/context

4. Interface
 Used interface to store all the interface neccessary for the component. /src/interfaces

5. services
 created services folder which contains all the services for the component which is responsible for api calls. /src/services.

6. config files
 created config files folder which contains all the configs used across all over the application which will be useful or i18 translation for future purposes as well as modularity and flexibility.

7. components
 all components have their indiviual folder, css and configuration files so it easy to create test cases and modules for each component.
