export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Dashboard: undefined;
      Statistics: {
        percentInDiet:number,
        inDiet: number,
        outOfDiet: number,
        totalMeals: number
      };
      Register: undefined;
    }
  }
}