import { useState } from 'react';

export const useFormStep = (maxStep: number) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const goToNextStep = () => {
    setCurrentStep((previousState: number) => {
      if (previousState >= maxStep) {
        return previousState;
      }
      return previousState + 1;
    });
  };

  const backToPreviousStep = () => {
    setCurrentStep((previousState: number) => {
      if (previousState <= 1) {
        return previousState;
      }
      return previousState - 1;
    });
  };

  return { currentStep, goToNextStep, backToPreviousStep } as const;
};
