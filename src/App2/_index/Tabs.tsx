
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { ellipse, square, triangle } from 'ionicons/icons';
import RouterOutlet from './RouterOutlet';
import TabBar from './TabBar';

const Tabs: React.FC = () => (
        <IonTabs>
            <IonRouterOutlet>
                <RouterOutlet />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
                <TabBar />
            </IonTabBar>
        </IonTabs>
  );
  
  export default Tabs;