// features/skinsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SkinsTopic {
  id: number;
  nickname: string;
  title: string;
  description: string;
  topic: string;
}

interface SkinsState {
  topics: SkinsTopic[];
}

const initialState: SkinsState = {
  topics: [],
};

const skinsSlice = createSlice({
  name: 'skins',
  initialState,
  reducers: {
    addSkinsTopic: (state, action: PayloadAction<SkinsTopic>) => {
      state.topics.push(action.payload);
    },
    updateSkinsTopic: (state, action: PayloadAction<{ id: number; updatedTopic: Partial<SkinsTopic> }>) => {
      const { id, updatedTopic } = action.payload;
      const index = state.topics.findIndex((topic) => topic.id === id);
      if (index !== -1) {
        state.topics[index] = { ...state.topics[index], ...updatedTopic };
      }
    },
  },
});

export const { addSkinsTopic, updateSkinsTopic } = skinsSlice.actions;
export default skinsSlice.reducer;