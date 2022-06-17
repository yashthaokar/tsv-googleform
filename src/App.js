
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';
import GoogleForm from './components/GoogleForm';

const App = () => {
  return (
    <>
      <SectionWrapper
        title="Start your journey of Growth with community of Tasvee"
        description="Create your profile, showcase talent, get more clients, +Community support and lot more."
        showBtn
        mockupImg={assets.homeHero}
        banner="banner"
      />
      <SectionWrapper
        title="Smart User Interface Marketplace"
        description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
        mockupImg={assets.homeCards}
        reverse
     
      />
        
      <SectionWrapper
        title="Deployment"
        description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands"
        mockupImg={assets.feature}
        reverse
      />
    
      <GoogleForm/>    
       
      <SectionWrapper
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={assets.mockup}
        banner="banner02"
      />
      <Features />
      <Download />

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
          <span className="bold">JavaScript Mastery</span>
        </p>
      </div>
    </>
  );
}

export default App;
