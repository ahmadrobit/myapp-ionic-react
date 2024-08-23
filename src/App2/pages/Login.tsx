import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Container from '../components/Container';


const Login: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Container>
          data
        </Container>
      </IonContent>
    </IonPage>
  );
};

export default Login;