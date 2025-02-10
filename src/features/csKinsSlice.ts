
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CsKinTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface CsKinsState {
  topics: CsKinTopic[];
}

const initialState: CsKinsState = {
  topics: [],
};


const csKinsSlice = createSlice({
  name: 'csKins',
  initialState,
  reducers: {
    addCsKinTopic: (state, action: PayloadAction<CsKinTopic>) => {
      state.topics.push(action.payload);
    },
    updateCsKinTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<CsKinTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});


export const { addCsKinTopic, updateCsKinTopic } = csKinsSlice.actions;
export default csKinsSlice.reducer;