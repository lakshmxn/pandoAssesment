const logisticsData = [
    {
      id: 1,
      origin: {
        city: "Laredo",
        state: "TX"
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
        state: "TX"
      },
      carrier: {
        name: "CH Robinson",
        type: "FTL"
      },
      utilization: {
        percentage: 74,
        vehicle: "53 Ft Trailer"
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
      id: 2,
      origin: {
        city: "Laredo",
        state: "TX"
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
        state: "TX"
      },
      carrier: {
        name: "CH Robinson",
        type: "FTL"
      },
      utilization: {
        percentage: 74,
        vehicle: "53 Ft Trailer"
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
        state: "TX"
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
        state: "TX"
      },
      carrier: {
        name: "American Freight Log",
        type: "Private Fleet",
        vehicleId: "MH 3092"
      },
      utilization: {
        percentage: 90,
        vehicle: "MH 3092",
        type: "Vol"
      },
      total: {
        volume: 900,
        volumeUnit: "cft",
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
        state: "TX"
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
        state: "TX"
      },
      carrier: {
        name: "CH Robinson",
        type: "FTL"
      },
      utilization: {
        percentage: 74,
        vehicle: "53 Ft Trailer"
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
        state: "TX"
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
        state: "TX"
      },
      carrier: {
        name: "Monroe Transport",
        type: "Private Fleet",
        vehicleId: "1AC0991"
      },
      utilization: {
        percentage: 74,
        vehicle: "1AC0991"
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
        state: "TX"
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
        state: "TX"
      },
      carrier: {
        name: "CH Robinson",
        type: "FTL"
      },
      utilization: {
        percentage: 90,
        vehicle: "53 Ft Trailer",
        type: "Vol"
      },
      total: {
        volume: 1200,
        volumeUnit: "cft",
        quantity: 33,
        quantityUnit: "pcs",
        pallets: 2,
        orders: 40
      },
    }
  ];
  
  export default logisticsData;
  