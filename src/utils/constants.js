const logisticsData = [
    {
      id: 1,
      origin: {
        city: "Laredo",
        state: "TX, <Pincode>"
      },
      stops: {
        pickup: {
          count: 1,
          hasdocks: false
        },
        drop: {
          count: 2,
          hasdocks: false
        }
      },
      timeline:[
        {
          type:'drop',
          name: "American Cleaning Supply",
          address: "Laredo, TX 78045, USA",
          details: {
            weight: "1978.75",
            volume: "127.38",
            quantity: "179",
            pallets: "2"
          }
        },
        {
          type:'drop',
          name: "3M Co.",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "768.75",
            volume: "71.00",
            quantity: "21",
            pallets: "1"
          }
        },
        {
          type:'drop',
          name: "Alliance Sports Group",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "197",
            volume: "121.30",
            quantity: "79",
            pallets: "2"
          }
        },
        {
          type:'pickup',
          name: "Ace Maumelle RSC",
          address: "Maumelle, Arkansas 72113, USA",
          details: {
            weight: "2944.5",
            volume: "319.68",
            quantity: "279",
            pallets: "2"
          }
        }
      ],
      destination: {
        city: "Grand Prairie",
        state: "TX, <Pincode>"
      },
      carrier: {
        name: "CH Robinson",
        type: "FTL",
        totalDistance: "300",
        totalWeight: "2500",
        totalVolume: "1200",
      },
      utilization: {
        percentage: 74,
        type:'Wt',
        vehicle: "53 Ft Trailer"
      },
      total: {
        weight: 8055,
        weightUnit: "lbs",
        quantity: 33,
        quantityUnit: "pcs",
        pallets: 2,
        orders: 40,
      },
    },
    {
      id: 2,
      origin: {
        city: "Laredo",
        state: "TX, <Pincode>"
      },
      stops: {
        pickup: {
          count: 1,
          hasdocks: false
        },
        drop: {
          count: 2,
          hasdocks: true
        }
      },
      timeline:[
        {
          type:'drop',
          name: "American Cleaning Supply",
          address: "Laredo, TX 78045, USA",
          details: {
            weight: "1978.75",
            volume: "127.38",
            quantity: "179",
            pallets: "2"
          }
        },
        {
          type:'drop',
          name: "3M Co.",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "768.75",
            volume: "71.00",
            quantity: "21",
            pallets: "1"
          }
        },
        {
          type:'drop',
          name: "Alliance Sports Group",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "197",
            volume: "121.30",
            quantity: "79",
            pallets: "2"
          }
        },
        {
          type:'pickup',
          name: "Ace Maumelle RSC",
          address: "Maumelle, Arkansas 72113, USA",
          details: {
            weight: "2944.5",
            volume: "319.68",
            quantity: "279",
            pallets: "2"
          }
        }
      ],
      destination: {
        city: "Grand Prairie",
        state: "TX, <Pincode>"
      },
      carrier: {
        name: "CH Robinson",
        type: "FTL",
        totalDistance: "300",
        totalWeight: "2500",
        totalVolume: "1200",
      },
      utilization: {
        percentage: 74,
        vehicle: "53 Ft Trailer",
        type: "Wt"
      },
      total: {
        weight: 8055,
        weightUnit: "lbs",
        quantity: 33,
        quantityUnit: "pcs",
        pallets: 2,
        orders: 40
      },
    },
    {
      id: 3,
      origin: {
        city: "Laredo",
        state: "TX, <Pincode>"
      },
      stops: {
        pickup: {
          count: 1,
          hasdocks: false
        },
        drop: {
          count: 2,
          hasdocks: false
        }
      },
      timeline:[
        {
          type:'drop',
          name: "American Cleaning Supply",
          address: "Laredo, TX 78045, USA",
          details: {
            weight: "1978.75",
            volume: "127.38",
            quantity: "179",
            pallets: "2"
          }
        },
        {
          type:'drop',
          name: "3M Co.",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "768.75",
            volume: "71.00",
            quantity: "21",
            pallets: "1"
          }
        },
        {
          type:'drop',
          name: "Alliance Sports Group",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "197",
            volume: "121.30",
            quantity: "79",
            pallets: "2"
          }
        },
        {
          type:'pickup',
          name: "Ace Maumelle RSC",
          address: "Maumelle, Arkansas 72113, USA",
          details: {
            weight: "2944.5",
            volume: "319.68",
            quantity: "279",
            pallets: "2"
          }
        }
      ],
      destination: {
        city: "Grand Prairie",
        state: "TX, <Pincode>"
      },
      carrier: {
        name: "American Freight Log",
        type: "Private Fleet",
        vehicleId: "MH 3092",
        totalDistance: "300",
        totalWeight: "2500",
        totalVolume: "1200",
      },
      utilization: {
        percentage: 90,
        vehicle: "MH 3092",
        type: "Vol"
      },
      total: {
        weight: 900,
        weightUnit: "cft",
        quantity: 33,
        quantityUnit: "pcs",
        pallets: 2,
        orders: 40
      },
    },
    {
      id: 4,
      origin: {
        city: "Laredo",
        state: "TX, <Pincode>"
      },
      stops: {
        pickup: {
          count: 1,
          hasdocks: false
        },
        drop: {
          count: 2,
          hasdocks: false
        }
      },
      destination: {
        city: "Grand Prairie",
        state: "TX, <Pincode>"
      },
      timeline:[
        {
          type:'drop',
          name: "American Cleaning Supply",
          address: "Laredo, TX 78045, USA",
          details: {
            weight: "1978.75",
            volume: "127.38",
            quantity: "179",
            pallets: "2"
          }
        },
        {
          type:'drop',
          name: "3M Co.",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "768.75",
            volume: "71.00",
            quantity: "21",
            pallets: "1"
          }
        },
        {
          type:'drop',
          name: "Alliance Sports Group",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "197",
            volume: "121.30",
            quantity: "79",
            pallets: "2"
          }
        },
        {
          type:'pickup',
          name: "Ace Maumelle RSC",
          address: "Maumelle, Arkansas 72113, USA",
          details: {
            weight: "2944.5",
            volume: "319.68",
            quantity: "279",
            pallets: "2"
          }
        }
      ],
      carrier: {
        name: "CH Robinson",
        type: "FTL",
        totalDistance: "300",
        totalWeight: "2500",
        totalVolume: "1200",
      },
      utilization: {
        percentage: 74,
        vehicle: "53 Ft Trailer",
        type: "Wt"
      },
      total: {
        weight: 8055,
        weightUnit: "lbs",
        quantity: 33,
        quantityUnit: "pcs",
        pallets: 2,
        orders: 40
      },
    },
    {
      id: 5,
      origin: {
        city: "Laredo",
        state: "TX, <Pincode>"
      },
      stops: {
        pickup: {
          count: 1,
          hasdocks: true
        },
        drop: {
          count: 2,
          hasdocks: false
        }
      },
      destination: {
        city: "Grand Prairie",
        state: "TX, <Pincode>"
      },
      carrier: {
        name: "Monroe Transport",
        type: "Private Fleet",
        vehicleId: "1AC0991",
        totalDistance: "300",
        totalWeight: "2500",
        totalVolume: "1200",
      },
      timeline:[
        {
          type:'drop',
          name: "American Cleaning Supply",
          address: "Laredo, TX 78045, USA",
          details: {
            weight: "1978.75",
            volume: "127.38",
            quantity: "179",
            pallets: "2"
          }
        },
        {
          type:'drop',
          name: "3M Co.",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "768.75",
            volume: "71.00",
            quantity: "21",
            pallets: "1"
          }
        },
        {
          type:'drop',
          name: "Alliance Sports Group",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "197",
            volume: "121.30",
            quantity: "79",
            pallets: "2"
          }
        },
        {
          type:'pickup',
          name: "Ace Maumelle RSC",
          address: "Maumelle, Arkansas 72113, USA",
          details: {
            weight: "2944.5",
            volume: "319.68",
            quantity: "279",
            pallets: "2"
          }
        }
      ],
      utilization: {
        percentage: 74,
        vehicle: "1AC0991",
        type: "Wt"
      },
      total: {
        weight: 8055,
        weightUnit: "lbs",
        quantity: 33,
        quantityUnit: "pcs",
        pallets: 2,
        orders: 40
      },
    },
    {
      id: 6,
      origin: {
        city: "Laredo",
        state: "TX, <Pincode>"
      },
      stops: {
        pickup: {
          count: 1,
          hasdocks: false
        },
        drop: {
          count: 2,
          hasdocks: false
        }
      },
      destination: {
        city: "Grand Prairie",
        state: "TX, <Pincode>"
      },
      carrier: {
        name: "CH Robinson",
        type: "FTL",
        totalDistance: "300",
        totalWeight: "2500",
        totalVolume: "1200",
      },
      timeline:[
        {
          type:'drop',
          name: "American Cleaning Supply",
          address: "Laredo, TX 78045, USA",
          details: {
            weight: "1978.75",
            volume: "127.38",
            quantity: "179",
            pallets: "2"
          }
        },
        {
          type:'drop',
          name: "3M Co.",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "768.75",
            volume: "71.00",
            quantity: "21",
            pallets: "1"
          }
        },
        {
          type:'drop',
          name: "Alliance Sports Group",
          address: "Roanoke, TX 76262, USA",
          details: {
            weight: "197",
            volume: "121.30",
            quantity: "79",
            pallets: "2"
          }
        },
        {
          type:'pickup',
          name: "Ace Maumelle RSC",
          address: "Maumelle, Arkansas 72113, USA",
          details: {
            weight: "2944.5",
            volume: "319.68",
            quantity: "279",
            pallets: "2"
          }
        }
      ],
      utilization: {
        percentage: 90,
        vehicle: "53 Ft Trailer",
        type: "Vol"
      },
      total: {
        weight: 1200,
        weightUnit: "cft",
        quantity: 33,
        quantityUnit: "pcs",
        pallets: 2,
        orders: 40
      },
    }
  ];
  
  export default logisticsData;
  