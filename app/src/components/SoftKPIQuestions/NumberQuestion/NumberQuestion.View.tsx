import { IonInput, IonItem, IonLabel } from '@ionic/react';
import { SoftKPIQuestion } from 'components/SoftKPIQuestions/SoftKPIQuestionProps';
import React from 'react';

const NumberQuestionView = ({
  id,
  question,
  answer,
  couldEdit,
  changeAnswer,
}: SoftKPIQuestion): JSX.Element => (
  <IonItem>
    <IonLabel>{question}</IonLabel>
    <IonInput
      id={`q-${id}`}
      type="number"
      value={(answer as unknown) as number}
      readonly={!couldEdit}
      onIonChange={changeAnswer}
    />
  </IonItem>
);
export default NumberQuestionView;
