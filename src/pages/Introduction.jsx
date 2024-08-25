import intoimg from "./img/introimg.jpg";
import './components/background.css';
function Introduction() {
    return <>
        <div className="bg-white">
            <div className="bg-custom text-white text-center py-8">
                <h1 className="text-3xl">Introduction</h1>
            </div>
            <img src={intoimg} alt="img" />
            <div className="p-10"> <span className="text-[16px] font-[700]">Kshamadevi Group</span><span className="font-[400]"> is the diverse group of companies committed for the complete construction solution, founded in October 13, 2010, the company took its name on the reference of highly respectful and popular temple from Sindupalchowk District. Our services and products range from the aluminum products, UPVC products, hardware materials, construction services, interior decoration to lighting materials. We mainly are the trading company that imports various products from foreign countries and supply them to the Nepali market as per its necessity.</span>
                <p className="mt-6">
                    With the team of people having extensive experience in the related field, strong financial position, availability of resources to supply all over the country, and establishment of strong networks with various stakeholders; undoubtedly Kshamadevi group is transforming itself as the most trustworthy corporation in the market. It has both the desire and capacity for solving the entire construction related requirements of the customers from all over the country.
                </p>
            </div>

            <h2 className="text-[14px] font-[700] gap-1 p-10">
                PRODUCT CATEGORIES:
            </h2>
            <hr />
            <div className="p-10 flex flex-col gap-10 pt-0">
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">UPVC Door, Window and Partition:</span>  These products are manufactured in our factory itself in Kausaltar. We import the raw material from China and we are the authorized distributor of Conch Brand UPVC materials in Nepal.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Roofing Sheet:</span>   We import Roofing Sheet directly from China falling under the Brand KSD. We provide UPVC as well as Stone coated roofing Sheet. These Sheets come under different Colors shapes and sizes.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Aluminum Profile:</span>   We have been importing Aluminum profile from A1 brand in China. We currently supply aluminum profiles of 70, 90 and 100 series.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Prefab Panel and Prefab House: </span>  We import Birla Aerocon Panel from India. Aerocon Panel holds Patents in 7 countries. We supply these panels and also construct Prefab house using these Panel.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Cement Boards:</span> We are the authorized distributor of Birla Aerocon Cement Board from India. We have been distributing the widest range of specialized building boards for the construction sector.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Gypsum Boards: </span> We have been distributing the widest range of specialized gypsum boards in Nepal. These are also used for construction of Prefab Houses by Kshamadevi itself.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Pipe and fittings: </span> We are the authorized distributor of Birla Aerocon Pipes and Fittings. Aerocon’s Pipe and fittings are among those products that are widely sought in its domestic as well as foreign market.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Hardware and Power Tools: </span> We also supply various hardware materials and power tools.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">LED Lights: </span> We sell wide range of lights falling under almost 20 categories. We are the Sole Distributor of Liper German lights in Nepal. Similarly, we also sell LED lights falling under the Brand KSD.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Tiles and Marbles:  </span>  We sell various types of Tiles, Marbles and Granite falling under the Brand Somany, Lavish and etc.
                </p>
                <p className="mt-6">
                    <span className="font-[700] text-[16px]">Sanitary ware: </span> We also sell huge range of sanitary items falling under the brand Guess and etc.


                </p>
            </div>


        </div >


    </>
}
export default Introduction