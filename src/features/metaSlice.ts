// features/metaSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MetaTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface MetaState {
  topics: MetaTopic[];
}

const initialState: MetaState = {
  topics: [],
};

const metaSlice = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    addMetaTopic: (state, action: PayloadAction<MetaTopic>) => {
      state.topics.push(action.payload);
    },
    updateMetaTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<MetaTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addMetaTopic, updateMetaTopic } = metaSlice.actions;
export default metaSlice.reducer;