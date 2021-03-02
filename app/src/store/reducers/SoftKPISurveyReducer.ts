import { SnowmanAction } from 'store/messages';
import { SoftKPISurveyStore } from 'store/models';

const initialState: SoftKPISurveyStore = {
  couldEdit: false,
  surveyItems: [],
};

export const SoftKPISurveyReducer = (
  state: SoftKPISurveyStore = initialState,
  action: SnowmanAction
): SoftKPISurveyStore => {
  switch (action.type) {
    default:
      return state;
  }
};
