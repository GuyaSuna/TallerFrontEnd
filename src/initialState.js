const initialState = {
  currentUser: null,
  places: [
    {
      id: 1,
      name: "Central Park",
      image: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "New York, NY",
      rating: 4.5,
      reviews: [
        {
          id: 1,
          userId: 2,
          username: "Jane Smith",
          comment: "Great place to relax and enjoy the outdoors.",
          rating: 4,
        },
        {
          id: 2,
          userId: 3,
          username: "Bob Johnson",
          comment: "Amazing park, so much to see and do!",
          rating: 5,
        },
      ],
      events: [
        {
          id: 1,
          placeId: 1,
          name: "Music Festival",
          image: "https://via.placeholder.com/300",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          location: "Miami, FL",
          date: "2023-05-27",
          rating: 3.8,
          comments: [
            {
              id: 3,
              userId: 2,
              username: "Jane Smith",
              text: "Good music, but the crowd was too rowdy.",
              rating: 3,
            },
            {
              id: 4,
              userId: 3,
              username: "Bob Johnson",
              text: "Had a blast at this festival, would definitely come back!",
              rating: 4,
            },
          ],
          reviews: [
            {
              id: 5,
              userId: 2,
              username: "Jane Smith",
              comment: "Good music, but the crowd was too rowdy.",
              rating: 3,
            },
            {
              id: 6,
              userId: 3,
              username: "Bob Johnson",
              comment:
                "Had a blast at this festival, would definitely come back!",
              rating: 4,
            },
          ],
        },
        {
          id: 2,
          placeId: 1,
          name: "Art Exhibition",
          image: "https://via.placeholder.com/300",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          location: "New York, NY",
          date: "2023-07-15",
          rating: 4.6,
          comments: [],
          reviews: [
            {
              id: 7,
              userId: 1,
              username: "John Doe",
              comment: "Incredible artwork and a great atmosphere!",
              rating: 5,
            },
            {
              id: 8,
              userId: 2,
              username: "Jane Smith",
              comment: "One of the best art exhibitions I've been to.",
              rating: 5,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Golden Gate Bridge",
      image: "https://via.placeholder.com/300",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "San Francisco, CA",
      rating: 4.2,
      events: [
        {
          id: 3,
          placeId: 2,
          name: "Burning Man",
          image: "https://via.placeholder.com/300",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
          location: "Miami, FL",
          date: "2023-05-27",
          rating: 3.8,
          comments: [],
          reviews: [],
        },
      ],
      reviews: [
        {
          id: 3,
          userId: 1,
          username: "John Doe",
          comment: "Breathtaking views of the bay!",
          rating: 5,
        },
        {
          id: 4,
          userId: 3,
          username: "Bob Johnson",
          comment: "A must-visit landmark in San Francisco.",
          rating: 4,
        },
      ],
    },
  ],
};

export default initialState;
