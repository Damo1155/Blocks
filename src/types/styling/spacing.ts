export type Margin = {
  mt?: MarginTop;
  ml?: MarginLeft;
  mr?: MarginRight;
  my?: MarginYAxis;
  mx?: MarginXAxis;
  mb?: MarginBottom;
  m?: MarginStandard;
};

type MarginBottom =
  | 'mb-0'
  | 'mb-1'
  | 'mb-2'
  | 'mb-3'
  | 'mb-4'
  | 'mb-5'
  | 'mb-6';

type MarginStandard = 'm-0' | 'm-1' | 'm-2' | 'm-3' | 'm-4' | 'm-5' | 'm-6';
type MarginTop = 'mt-0' | 'mt-1' | 'mt-2' | 'mt-3' | 'mt-4' | 'mt-5' | 'mt-6';
type MarginRight = 'mr-0' | 'mr-1' | 'mr-2' | 'mr-3' | 'mr-4' | 'mr-5' | 'mr-6';
type MarginLeft = 'ml-0' | 'ml-1' | 'ml-2' | 'ml-3' | 'ml-4' | 'ml-5' | 'ml-6';
type MarginYAxis = 'my-0' | 'my-1' | 'my-2' | 'my-3' | 'my-4' | 'my-5' | 'my-6';
type MarginXAxis = 'mx-0' | 'mx-1' | 'mx-2' | 'mx-3' | 'mx-4' | 'mx-5' | 'mx-6';

export type Padding = {
  py?: PaddingY;
  px?: PaddingX;
  pt?: PaddingTop;
  pl?: PaddingLeft;
  pr?: PaddingRight;
  pb?: PaddingBottom;
  p?: PaddingStandard;
};

type PaddingStandard = 'p-0' | 'p-1' | 'p-2' | 'p-3' | 'p-4' | 'p-5' | 'p-6';
type PaddingTop = 'pt-0' | 'pt-1' | 'pt-2' | 'pt-3' | 'pt-4' | 'pt-5' | 'pt-6';
type PaddingLeft = 'pl-0' | 'pl-1' | 'pl-2' | 'pl-3' | 'pl-4' | 'pl-5' | 'pl-6';

type PaddingBottom =
  | 'pb-0'
  | 'pb-1'
  | 'pb-2'
  | 'pb-3'
  | 'pb-4'
  | 'pb-5'
  | 'pb-6';

type PaddingRight =
  | 'pr-0'
  | 'pr-1'
  | 'pr-2'
  | 'pr-3'
  | 'pr-4'
  | 'pr-5'
  | 'pr-6';

type PaddingY = 'py-0' | 'py-1' | 'py-2' | 'py-3' | 'py-4' | 'py-5' | 'py-6';

type PaddingX = 'px-0' | 'px-1' | 'px-2' | 'px-3' | 'px-4' | 'px-5' | 'px-6';
