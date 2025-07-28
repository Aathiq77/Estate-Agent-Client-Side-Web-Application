import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: [], // Initial state is an empty array
    reducers: {
        // Add a property to the favorites list
        addFavorite: (state, action) => {
        const propertyId = action.payload;
        if (!state.includes(propertyId)) {
            state.push(propertyId);
        }
        },
        // Remove a property from the favorites list
        removeFavorite: (state, action) => {
        const propertyId = action.payload;
        return state.filter((id) => id !== propertyId);
        },
    },
});

// Export actions for dispatching
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer; // Export reducer for store
