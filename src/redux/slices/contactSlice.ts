import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";
import { contactDateTypes } from "../sliceTypes";

export const getContacts = createAsyncThunk("contact/getAllItems", async () => {
  const { data } = await axios.post("getList");
  return data;
});

const initialState: contactDateTypes = {
  data: [],
  filtred: [],
  status: "loading",
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    sortBy: (
      state,
      action: PayloadAction<{ sortType: string; sorted: boolean }>,
    ) => {
      switch (action.payload.sortType) {
        case "sortType":
          if (action.payload.sorted)
            state.filtred = state.data.sort((a, b) => {
              if (a.status < b.status) return 1;
              return -1;
            });
          else
            state.filtred = state.data.sort((a, b) => {
              if (a.status < b.status) return -1;
              return 1;
            });
          break;

        case "sortTime":
          if (action.payload.sorted)
            state.filtred = state.data.sort((a, b) => {
              if (a.date.slice(10, 16) < b.date.slice(10, 16)) return 1;
              return -1;
            });
          else
            state.filtred = state.data.sort((a, b) => {
              if (a.date.slice(10, 16) < b.date.slice(10, 16)) return -1;
              return 1;
            });
          break;
      }
    },

    filterByTypes: (state, action) => {
      switch (action.payload.type) {
        case 0:
          state.filtred = state.data.filter((item) => {
            if (item.status !== "Не дозвонился" && item.in_out === 0) {
              return true;
            }
          });
          break;
        case 1:
          state.filtred = state.data.filter((item) => {
            if (item.status !== "Не дозвонился" && item.in_out === 1) {
              return true;
            }
          });
          break;
        case 3:
          state.filtred = state.data.filter((item) => {
            if (item.status === "Не дозвонился") {
              return true;
            }
          });
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.data = [];
        state.status = "loading";
      })

      .addCase(getContacts.fulfilled, (state, action) => {
        state.data = action.payload.results;
        state.filtred = action.payload.results;
        state.status = "loaded";
      })

      .addCase(getContacts.rejected, (state) => {
        state.data = [];
      });
  },
});

export const contactReducer = contactSlice.reducer;
export const { sortBy, filterByTypes } = contactSlice.actions;
