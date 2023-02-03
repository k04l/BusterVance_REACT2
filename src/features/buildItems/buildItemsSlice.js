//import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

export const fetchBuildItems = createAsyncThunk(
    'builditems/fetchBuildItems',
    async () => {
        const response = await fetch(baseUrl + 'build items');
        if (!response.ok) {
            return Promise.reject('Unable to fetch, status: ' + response.status);
        }
        const data = await response.json();
        return data;
    }
);

const initialState = {
    builditemsArray: [],
    isLoading: true,
    errMsg: ''
};

const buildItemsSlice = createSlice({
    name: 'build items',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchBuildItems.pending]: (state) => {
            state.isLoading = true;
        },
        [fetchBuildItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.errMsg = '';
            state.builditemsArray = mapImageURL(action.payload);
        },
        [fetchBuildItems.rejected]: (state, action ) => {
            state.isLoading = false;
            state.errMsg = action.error ? action.error.message : 'Fetch failed';
        }
    }
});

export const builditemsReducer = buildItemsSlice.reducer;

export const selectAllBuildItems = (state) => {
    return state.builditems.builditemsArray;
};

export const selectBuildItemById = (id) => (state) => {
    return state.builditem.builditemsArray.find(
        (builditem) => builditem.id === parseInt(id)
    );
};

export const selectFeaturedBuildItem = (state) => {
    return {
        featuredItem: state.builditems.builditemsArray.find(
            (builditem) => builditem.featured
        ),
        isLoading: state.builditems.isLoading,
        errMsg: state.builditems.errMsg
    };
};