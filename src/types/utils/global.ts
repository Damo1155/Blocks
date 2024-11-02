export type ClassNames = {
  /** Will append any additional classes to the root container when set
   *
   * **Note**: Try to avoid using as it's more a failsafe due to Avoid using,
   * it's utilisation is for anything uncommon or not yet supported as a property
   * into the component. */
  className?: string;
};

export type ReactKey = {
  /** Used to formulate the React `key` when handling lists */
  key: string;
};
