import NumberQuestionView from 'components/SoftKPIQuestions/NumberQuestion/NumberQuestion.View';
import {
  SoftKPIQuestionDispatchProps,
  SoftKPIQuestionOwnProps,
} from 'components/SoftKPIQuestions/SoftKPIQuestionProps';
import { connect } from 'react-redux';
import { SnowmanDispatch } from 'store/messages';
import { IonChangeEvent } from 'types/IonChangeEvent';

const mapDispatchToProps = (
  dispatch: SnowmanDispatch,
  ownProps: SoftKPIQuestionOwnProps
): SoftKPIQuestionDispatchProps => ({
  changeAnswer(event: IonChangeEvent): void {},
});

const NumberQuestion = connect(null, mapDispatchToProps)(NumberQuestionView);

export default NumberQuestion;
