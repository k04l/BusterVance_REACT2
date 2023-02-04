import recircShowerImg from '../assets/img/recirculatingShower.jpg';
import airconImg from '../assets/img/PKA-A24KA.jpg';
import StarlinkImg from '../assets/img/Starlink-RV.jpg';
// import insulImg from '../assets/img/insulation.jpg';
import kitchenImg from '../assets/img/liveEdgeKitchen.jpg';
import bluettiImg from '../assets/img/AC500_B300S.jpg';
// import roadtripImg from '../assets/img/Roadtrip-USA.jpg';


export const BUILDITEMS = [
    {
        id: 0,
        name: 'Starlink',
        image: StarlinkImg,
        featured: false,
        description:
            'Now that SpaceX has launched their Starlink internet service Van Lifers and Skoolie vagabons alike can stay connected wherever they go. Combined with a remote job, the right rig can take you wherever you want to go, for however long you want to be there.'
    },
    {
        id: 1,
        name: 'High Efficiency Heat Pump',
        image: airconImg,
        featured: false,
        description:
            'The variable speed scroll compressors in these kinds of heat pumps are extremely efficient. This replaces an older inefficient system, increasing capacity while taking up less space inside the cabin.'
    },
    {
        id: 2,
        name: 'Recirculating Shower',
        image: recircShowerImg,
        featured: false,
        description:
            'The Showerloop is a design I found on instructables.com that uses a small ~7-8 gallon tank and a filter bank to clean and recirculate the water. This means that you could take 20 minute long showers every day while camping in a desert.'
    },
    {
        id: 3,
        name: 'Bluetti - Total Energy Solution',
        image: bluettiImg,
        featured: true,
        description:
            "The Bluetti AC500+B300S system is everything you need to store and manage 3,000 watt hours and invert up to 5000 watts into whatever voltage you need. The B300S modular battery weighs 84 lbs is equivalent to a 12v, 250 amp-hour, LiFePO4 battery bank. If I need more power down the road I can simply get another B300S, all the way up to an 18 kWh system which is way more than Buster will ever need. The AC500 has 5 x 120V outlets from 20A up to 50A, 6 x USB Ports, 1 x 12V/30A and 1 x 24V/10A. I can via an AC charging cable (essentially shore power), or via up to 3,000W of Solar Panels."
    },
    {
        id: 4,
        name: 'Live Edge Kitchen',
        image: kitchenImg,
        featured: false,
        description:
            "Because why not?"
    }
];
