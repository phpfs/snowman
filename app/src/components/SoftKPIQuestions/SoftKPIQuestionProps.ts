import { IonChangeEvent } from 'types/IonChangeEvent';
import { QuestionAnswer } from 'types/QuestionAnswer';
import { SoftKPIQuestion } from 'types/SoftKPIQuestion';

export interface SoftKPIQuestionDispatchProps {
  changeAnswer(event: IonChangeEvent): void;
}

export interface SoftKPIQuestionOwnProps extends SoftKPIQuestion {
  couldEdit: boolean;
}

export type SoftKPIQuestionProps = SoftKPIQuestionDispatchProps &
  SoftKPIQuestionOwnProps;
