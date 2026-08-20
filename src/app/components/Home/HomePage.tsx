import HomeLawyerInfo from "./components/LawyerInfo/HomeLawyerInfo";

import HomeInfoOurLawerSection from "./components/HomeInfoOurLawyersSection/HomeInfoOurLawyerSection";
import HomeServiceSection from "./components/Services/HomeServiceSection";

import HomeCommentatersCardSection from "./components/ComentatersSection/HomeCommentatersCardSection";
import HomeImportantMaterialSection from "./components/HomeImportantMaterialSection/HomeImportantMaterialSection";


const HomePage = () => {

  return (
    <div className="space-y-11">
      <HomeServiceSection/>
      <HomeLawyerInfo/>
      <HomeInfoOurLawerSection/>
      <HomeCommentatersCardSection/>
      <HomeImportantMaterialSection/>
  </div>
  );
};

export default HomePage;