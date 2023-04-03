import { create } from "zustand";

type Zustand = {
  imge: any | null;
  selectedFile: any;
  preview: any;
  steps: string[];
  status: string;
  cameraType: string;
  panStatusResult: string;
  panStatus: number;
  currentStep: number;
  uploadedImage: number;
  manageVeriyStep: number;
  panVerificationfailed: number;
  finish: boolean;
  isYourPan: boolean;
  completed: boolean;
  fetchData: boolean;
  getLocation: boolean;
  cameraStatus: boolean;
  sideBarToggle: boolean;
  setSideBarToggle: () => void;
  setImg: (input: any) => void;
  setCurrentStepPlus: () => void;
  setManageVeriyStep: () => void;
  setCurrentStepMinus: () => void;
  setPreview: (input: any) => void;
  setCurrentStepInitial: () => void;
  setStatus: (input: string) => void;
  setManageVeriyStepback: () => void;
  setFinish: (input: boolean) => void;
  setManageVeriyStepinital: () => void;
  setPanStatus: (input: number) => void;
  setSelectedFile: (input: any) => void;
  setCameraType: (input: string) => void;
  setIsYourPan: (input: boolean) => void;
  setFetchData: (input: boolean) => void;
  setCompleted: (input: boolean) => void;
  setGetlocation: (input: boolean) => void;
  setUploadedImage: (input: number) => void;
  setCameraStatus: (input: boolean) => void;
  setPanStatusResult: (input: string) => void;
  setCurrentStepInput: (input: number) => void;
  setPanVerificationdone: (input: number) => void;
  setPanVerificationfailed: (input: number) => void;
};

export const useStore = create<Zustand>((set) => ({
  steps: [
    "Location Capturing",
    "Pan Verification",
    "Aadhaar Verification",
    "PAN - Aadhaar Matching",
    "Business Details",
    "Video KYC",
    "Onboarding Status",
  ],
  imge: null,
  finish: false,
  completed: false,
  fetchData: false,
  isYourPan: false,
  getLocation: false,
  cameraStatus: false,
  sideBarToggle: false,
  preview: "",
  cameraType: "",
  selectedFile: "",
  status: "In Progress",
  panStatusResult: "Good Match",
  panStatus: 0,
  currentStep: 0,
  uploadedImage: 0,
  manageVeriyStep: 0,
  panVerificationfailed: 0,
  setSideBarToggle: () => set(() => ({})),
  setImg: (input: any) => set(() => ({ imge: input })),
  setPreview: (input: any) => set(() => ({ preview: input })),
  setStatus: (input: string) => set(() => ({ status: input })),
  setFinish: (input: boolean) => set(() => ({ finish: input })),
  setPanStatus: (input: number) => set(() => ({ panStatus: input })),
  setFetchData: (input: boolean) => set(() => ({ fetchData: input })),
  setIsYourPan: (input: boolean) => set(() => ({ isYourPan: input })),
  setCompleted: (input: boolean) => set(() => ({ completed: input })),
  setCameraType: (input: string) => set(() => ({ cameraType: input })),
  setSelectedFile: (input: any) => set(() => ({ selectedFile: input })),
  setGetlocation: (input: boolean) => set(() => ({ getLocation: input })),
  setCameraStatus: (input: boolean) => set(() => ({ cameraStatus: input })),
  setUploadedImage: (input: number) => set(() => ({ uploadedImage: input })),
  setCurrentStepInput: (input: number) => set(() => ({ currentStep: input })),
  setPanStatusResult: (input: string) =>
    set(() => ({ panStatusResult: input })),
  setCurrentStepInitial: () =>
    set((state) => ({ currentStep: state.currentStep })),
  setCurrentStepPlus: () =>
    set((state) => ({ currentStep: state.currentStep + 1 })),
  setCurrentStepMinus: () =>
    set((state) => ({ currentStep: state.currentStep - 1 })),
  setPanVerificationdone: (input: number) =>
    set(() => ({ panVerificationfailed: input })),
  setPanVerificationfailed: (input: number) =>
    set(() => ({ panVerificationfailed: input })),
  setManageVeriyStep: () =>
    set((state) => ({ manageVeriyStep: state.manageVeriyStep + 1 })),
  setManageVeriyStepinital: () =>
    set((state) => ({ manageVeriyStep: state.manageVeriyStep })),
  setManageVeriyStepback: () =>
    set((state) => ({ manageVeriyStep: state.manageVeriyStep - 1 })),
}));
