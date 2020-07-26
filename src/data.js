//superior twin bed
import stwin1 from './components/images/s-twin-bed-1.jpg';
import stwin2 from './components/images/s-twin-bed-2.jpg';
import stwin3 from './components/images/s-twin-bed-3.jpg';
import stwin4 from './components/images/s-twin-bed-4.jpg';

//deloux twin bed
import dtwin1 from './components/images/d-twin-bed-1.jpg';
import dtwin2 from './components/images/d-twin-bed-2.jpg';
import dtwin3 from './components/images/d-twin-bed-3.jpg';

//premiere twin bed
import ptwin1 from './components/images/p-twin-bed-1.jpg';
import ptwin2 from './components/images/p-twin-bed-2.jpg';
import ptwin3 from './components/images/p-twin-bed-3.jpg';
import ptwin4 from './components/images/p-twin-bed-4.jpg';

//superior double bed
import sdouble1 from './components/images/s-double-bed-1.jpg';
import sdouble2 from './components/images/s-double-bed-2.jpg';
import sdouble3 from './components/images/s-double-bed-3.jpg';
import sdouble4 from './components/images/s-double-bed-4.jpg';

//deluxe double bed
import ddouble1 from './components/images/d-double-bed-1.jpg';
import ddouble2 from './components/images/d-double-bed-2.jpg';
import ddouble3 from './components/images/d-double-bed-3.jpg';
import ddouble4 from './components/images/d-double-bed-4.jpg';

//premier double bed
import pdouble1 from './components/images/p-double-bed-1.jpg';
import pdouble2 from './components/images/p-double-bed-2.jpg';
import pdouble3 from './components/images/p-double-bed-3.jpg';

const roomtype = [{
    twin: [{
        id: 1,
        type: 'superior',
        name: 'Superior twin bed',
        slug: 'superior-twin',
        price: 1500,
        recommend: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        feature: [
            'free coffee',
            'TV',
            'A/C',
            'Room service'],
        size: '25m',
        capacity: 2,
        image: [stwin1, stwin2, stwin3, stwin4],
    },{
        id: 2,
        type: 'deluxe',
        name: 'Deluxe twin bed',
        slug: 'deluxe-twin',
        price: 1800,
        recommend: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        feature: [
            'free coffee',
            'TV',
            'A/C',
            'Room service'],
        size: '30m',
        capacity: 3,
        image: [dtwin1, dtwin2, dtwin3, dtwin3]
    }, {
        id: 3,
        type: 'premier',
        name: 'Premier twin bed',
        slug: 'premier-twin',
        price: 2000,
        recommend: false,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        feature: [
            'free coffee',
            'TV',
            'A/C',
            'Room service'],
        size: '40m',
        capacity: 4,
        image: [ptwin1, ptwin2, ptwin3, ptwin4]
    }]
}, {
    double: [{
        id: 1,
        type: 'superior',
        name: 'Superior double bed',
        slug: 'superior-double',
        price: 1500,
        recommend: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        feature: [
            'free coffee',
            'TV',
            'A/C',
            'Room service'],
        size: '25m',
        capacity: 2,
        image: [sdouble1, sdouble2, sdouble3, sdouble4]
    }, {
        id: 2,
        type: 'deluxe',
        name: 'Deluxe double bed',
        slug: 'deluxe-double',
        price: 1800,
        recommend: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        feature: [
            'free coffee',
            'TV',
            'A/C',
            'Room service'],
        size: '30m',
        capacity: 3,
        image: [ddouble1, ddouble2, ddouble3, ddouble4]
    }, {
        id: 3,
        type: 'premier',
        name: 'Premier double bed',
        slug: 'premier-double',
        price: 2000,
        recommend: true,
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        feature: [
            'free coffee',
            'TV',
            'A/C',
            'Room service'],
        size: '40m',
        capacity: 4,
        image: [pdouble1, pdouble2, pdouble3, pdouble3]
    }]
}]

export { roomtype };