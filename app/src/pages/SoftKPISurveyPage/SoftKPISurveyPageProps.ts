import { SoftKPIQuestion } from 'types/SoftKPIQuestion';

export interface SoftKPISurveyPageStateProps {
  questions: SoftKPIQuestion[];
  isEditable: boolean;
}

export interface SoftKPISurveyPageDispatchProps {
  editSurvey(): void;
}

export type SoftKPISurveyPageProps = SoftKPISurveyPageStateProps &
  SoftKPISurveyPageDispatchProps;
