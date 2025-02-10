// features/updatesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UpdateTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface UpdatesState {
  topics: UpdateTopic[];
}

const initialState: UpdatesState = {
  topics: [],
};

const updatesSlice = createSlice({
  name: 'updates',
  initialState,
  reducers: {
    addUpdatesTopic: (state, action: PayloadAction<UpdateTopic>) => {
      state.topics.push(action.payload);
    },
    updateUpdatesTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<UpdateTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addUpdatesTopic, updateUpdatesTopic } = updatesSlice.actions;
export default updatesSlice.reducer;