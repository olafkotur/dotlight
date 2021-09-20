export const MiscUtil = {
  /**
   * Promised based delay.
   * @param ms - milliseconds to wait
   */
  delay: async (ms: number): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), ms);
    });
  },
};
