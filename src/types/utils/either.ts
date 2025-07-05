type Only<Left, Right> = {
  [Param in keyof Left]: Left[Param];
} & {
  [Param in keyof Right]?: never;
};

export type Either<Left, Right> = Only<Left, Right> | Only<Right, Left>;
