import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./app-state";
import { productSlice } from "./product-slice";
import { employeeSlice } from "./employee-slice";
import { authSlice } from "./auth-slice";


//The component sends an add request through the frontend service via axios, with the JWT.
//verifyAdmin checks the token and role. The controller builds a VacationModel, converts price to a number,
// and pulls the file off the request. The backend service validates, saves the image to disk,
// inserts the row and gets the new id. The controller responds 201 with the created vacation. The component's await resolves, and it dispatches that object. The vacations slice reducer builds a new array with the vacation added and returns it. The store assigns it to state.vacations. Every useSelector on vacations re-renders, the new card appears, and the component navigates to the admin list.


// Store object - handling entire global state:
export const store = configureStore<AppState>({
    reducer: {
        products: productSlice.reducer, // Connect AppState products to product slice reducers.
        employees: employeeSlice.reducer, // Connect AppState employees to employee slice reducers.
        user: authSlice.reducer
    }
});