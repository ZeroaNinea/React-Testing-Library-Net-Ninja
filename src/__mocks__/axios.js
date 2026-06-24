const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: 'Laith',
          last: 'Harb',
        },
        picture: {
          large: 'https://randomuser.me/api/portraits/men/59.jpg',
        },
        login: {
          username: 'ThePhonyGOAT',
        },
      },
    ],
  },
};

// export default {
//     get: jest.fn().mockResolvedValue(mockResponse)
// }

// assign object to a variable before exporting as module default

const axios = {
  get: jest.fn().mockResolvedValue(mockResponse),
};

export default axios;
