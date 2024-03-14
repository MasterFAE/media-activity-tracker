import { useReducer } from "react";

const initialState: SidebarState = {
  isOpen: true,
};

export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export type SidebarState = {
  isOpen: boolean;
};

export type SidebarStateAction = {
  type: string;
};

const sidebarReducer = (state: SidebarState, action: SidebarStateAction) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

const useSidebar = () => {
  const [sidebarState, dispatch] = useReducer(sidebarReducer, initialState);
  return { sidebarState, dispatch };
};

export default useSidebar;
