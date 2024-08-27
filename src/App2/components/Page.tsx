import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Children } from 'react';
import Pageisi from './Pageisi';

interface Props {
    children: React.ReactNode;
    title: string;
  }
  
const Page: React.FC<Props> = ({ title, children }) => {
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
        <Pageisi>{ children }</Pageisi>
      </IonContent>
    </IonPage>
  );
};

export default Page;