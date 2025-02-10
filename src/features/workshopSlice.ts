// features/workshopSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WorkshopTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface WorkshopState {
  topics: WorkshopTopic[];
}

const initialState: WorkshopState = {
  topics: [],
};

const workshopSlice = createSlice({
  name: 'workshop',
  initialState,
  reducers: {
    addWorkshopTopic: (state, action: PayloadAction<WorkshopTopic>) => {
      state.topics.push(action.payload);
    },
    updateWorkshopTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<WorkshopTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addWorkshopTopic, updateWorkshopTopic } = workshopSlice.actions;
export default workshopSlice.reducer;