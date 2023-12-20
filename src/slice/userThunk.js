import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {};
const base_url = "https://65781d23f08799dc80444c47.mockapi.io/api/user";
//create action
export const AddUserThunk = createAsyncThunk(
  "AddUserThunk",
  async (data, { rejectWithValue }) => {
    const res = fetch(`${base_url}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await res.json();
      getalluser();
      return result;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response);
    }
  }
);

const getalluser=async ()=>{
  const res = await fetch(
    "https://65781d23f08799dc80444c47.mockapi.io/api/user",
    {
      method: "GET",
    }
  );
  try {
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
}

//alluser action
export const getuserThunk = createAsyncThunk(
  "getuserthunk", getalluser
  
);

export const edituserThunk = createAsyncThunk(
  "edituserthunk",
  async (data, { rejectWithValue }) => {
    const res = await fetch(`${base_url}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    try {
      if (!res.ok) {
        throw new Error("network error");
      }
      const result = await res.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

export const deleteuserthunk = createAsyncThunk(
  "deleteuserthunk",
  async (id, { rejectWithValue }) => {
    const res = await fetch(`${base_url}/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      }
     
    });

    try {
      if (!res.ok) {
        throw new Error("network error");
      }
      const result = await res.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);


export const userThunk = createSlice({
  name: "userThunk",
  initialState: {
    userThunk: [],
    isloading: false,
    Error: null,
  },
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(getuserThunk.pending, (state) => {
        state.isloading = true;
      })
      .addCase(getuserThunk.fulfilled, (state, action) => {
        state.isloading = false;
        state.userThunk = action.payload;
      })
      .addCase(getuserThunk.rejected, (state, action) => {
        state.isloading = false;
        state.Error = action.payload;
      })
      .addCase(AddUserThunk.pending, (state) => {
        state.isloading = true;
      })
      .addCase(AddUserThunk.fulfilled, (state, action) => {
        state.isloading = false;
        state.userThunk.push(action.payload);
      })
      .addCase(AddUserThunk.rejected, (state, action) => {
        state.isloading = false;
        state.Error = action.payload;
      })
      .addCase(edituserThunk.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(edituserThunk.fulfilled, (state, action) => {
        state.isloading = false;
      })
      .addCase(edituserThunk.rejected, (state, action) => {
        state.isloading = false;
      })
      .addCase(deleteuserthunk.pending, (state, action) => {
        state.isloading = true;
      })
      .addCase(deleteuserthunk.fulfilled, (state, action) => {
        state.isloading = false;
        
        const {id}=action.payload;
        if(id){
          state.userThunk=state.userThunk.filter(ele=>ele.id!==id)
        }
       
      })
      .addCase(deleteuserthunk.rejected, (state, action) => {
        state.isloading = false;

      })
  },
});

export default userThunk.reducer;
