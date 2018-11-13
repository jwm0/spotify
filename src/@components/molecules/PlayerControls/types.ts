export type Props = {
  songDuration: number,
  currentTime: number,
  onPrev: () => void,
  onPlay: () => void,
  onNext: () => void,
  onSkippingBegin: () => void,
  onSliderChange: (value: number) => void,
  onSkippingDone: (value: number) => void,
};
