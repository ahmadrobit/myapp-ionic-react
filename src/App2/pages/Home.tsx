import { IonButton} from '@ionic/react';
import Page from '../components/Page';

const Home: React.FC = () => {
  return (
    <Page title='Home'>
      <IonButton href="/login">ke Login</IonButton>
    </Page>
  );
};

export default Home;