import './App.css';
import Header from './components/Header';
import Body from './components/Body';

import Accessories from './assets/accessories.jpg';
import ModelS from './assets/model_s.jpeg';
import Model3 from './assets/model_3.jpeg';
import ModelX from './assets/model_x.jpeg';
import ModelY from './assets/model_y.jpeg';
import SolarRoof from './assets/solar_roof.jpeg';
import SolarPanels from './assets/solar_panels.jpeg';

function App() {
  return (
    <div className="App">
      {/*The Header component*/}
      <Header />

      {/*Reusing the Body component inside the Body container*/}
      <div className="app_body_container">
        <Body
        	title='Model S'
        	descr='Order Online for Touchless Delivery'
        	descrUrl=''
        	bcgImg={ModelS}
        	leftBtn='CUSTOM ORDER'
        	rightBtn='EXISTING INVENTORY'
        	leftBtnUrl=''
        	rightBtnUrl=''
        	twoBtns='true' 
        	first='true' 
        />
        
        <Body
        	title='Model Y'
        	descr='Order Online for Touchless Delivery'
        	descrUrl=''
        	bcgImg={ModelY}
        	leftBtn='CUSTOM ORDER'
        	rightBtn='EXISTING INVENTORY'
        	leftBtnUrl=''
        	rightBtnUrl=''
        	twoBtns='true'  
        />
        
        <Body
        	title='Model 3'
        	descr='Order Online for Touchless Delivery'
        	descrUrl=''
        	bcgImg={Model3}
        	leftBtn='CUSTOM ORDER'
        	rightBtn='EXISTING INVENTORY'
        	leftBtnUrl=''
        	rightBtnUrl=''
        	twoBtns='true'  
        />
        
        <Body
        	title='Model X'
        	descr='Order Online for Touchless Delivery'
        	descrUrl=''
        	bcgImg={ModelX}
        	leftBtn='CUSTOM ORDER'
        	rightBtn='EXISTING INVENTORY'
        	leftBtnUrl=''
        	rightBtnUrl=''
        	twoBtns='true'  
        />
        
        <Body
        	title='Solar Panels'
        	descr='Lowest Cost Solar Panels in America'
        	descrUrl=''
        	bcgImg={SolarPanels}
        	leftBtn='ORDER NOW'
        	rightBtn='LEARN MORE'
        	leftBtnUrl=''
        	rightBtnUrl=''
        	twoBtns='true'  
        />
        
        <Body
        	title='Solar Roof'
        	descr='Produce Clean Energy From Your Roof'
        	descrUrl=''
        	bcgImg={SolarRoof}
        	leftBtn='ORDER NOW'
        	rightBtn='LEARN MORE'
        	leftBtnUrl=''
        	rightBtnUrl=''
        	twoBtns='true'  
        />
        
        <Body
        	title='Accessories'
        	bcgImg={Accessories}
        	leftBtn='SHOP NOW'
        	leftBtnUrl=''
        />
      </div>
      
    </div>
  );
}

export default App;
