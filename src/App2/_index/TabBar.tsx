import {
    IonIcon,
    IonLabel,
    IonTabBar,
    IonTabButton,
  } from '@ionic/react';
  import { ellipse, square, triangle } from 'ionicons/icons';
  
  const TabBar: React.FC = () => (
<>
                <IonTabButton tab="tab1" href="/tab1">
                    <IonIcon aria-hidden="true" icon={triangle} />
                    <IonLabel>Tab 1</IonLabel>
                </IonTabButton>
              <IonTabButton tab="tab2" href="/tab2">
                <IonIcon aria-hidden="true" icon={ellipse} />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab3" href="/tab3">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Tab 3</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab4" href="/tab4">
                <IonIcon aria-hidden="true" icon={square} />
                <IonLabel>Tab 4</IonLabel>
              </IonTabButton>
        </>
    );
    
    export default TabBar;