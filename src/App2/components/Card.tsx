import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Children } from 'react';
interface Props {
    children: React.ReactNode;
    title: string;
  }
  
const Card: React.FC<Props> = ({ title, children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ title }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ title }</IonTitle>
          </IonToolbar>
        </IonHeader>
        { children }
      </IonContent>
    </IonPage>
  );
};

export default Card;