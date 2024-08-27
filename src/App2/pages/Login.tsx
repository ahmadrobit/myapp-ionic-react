import { IonButton} from '@ionic/react';
import Page from '../components/Page';

const Login: React.FC = () => {
  return (
    <Page title='Login'>
      <IonButton href="/Home">ke Home 1</IonButton>
    </Page>
  );
};

export default Login;