export default function() {

  this.urlPrefix = 'https://data.cityofchicago.org';
  this.namespace = 'resource';

  this.get('/5k2z-suxx.json', () => {
    return [
      {
        "relocated_to_address_number" : "356",
        "relocated_from_longitude" : "-87.616261525",
        "relocated_from_suffix" : "DR",
        "color" : "Black",
        "relocated_from_address_number" : "757.0",
        "relocated_from_street_direction" : "N",
        "plate" : "L256478",
        "relocated_from_y_coordinate" : "1905591.61817853",
        "relocated_from_street_name" : "NB OUTER LAKE SHORE",
        "relocated_from_latitude" : "41.896229067",
        "service_request_number" : "17-03141123",
        "relocated_to_direction" : "E",
        "relocated_to_street_name" : "CHICAGO",
        "relocated_reason" : "Accident",
        "relocated_from_x_coordinate" : "1179476.16837",
        "relocated_from_location" : {
          "latitude" : "41.89622906693289",
          "human_address" : "{\"address\":\"\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}",
          "needs_recoding" : false,
          "longitude" : "-87.61626152493916"
        },
        "state" : "Illinois",
        "make" : "Honda",
        "relocated_date" : "2017-05-17T23:15:00"
      },
      {
        "relocated_to_address_number" : "805",
        "relocated_from_longitude" : "-87.604634854",
        "relocated_from_suffix" : "AVE",
        "color" : "Gray",
        "relocated_from_address_number" : "6454.0",
        "relocated_from_street_direction" : "S",
        "plate" : "E995404",
        "relocated_from_y_coordinate" : "1862311.42009608",
        "relocated_from_street_name" : "MARYLAND",
        "relocated_from_latitude" : "41.777383685",
        "service_request_number" : "17-03144929",
        "relocated_to_direction" : "E",
        "relocated_to_street_name" : "65TH",
        "relocated_reason" : "Other",
        "relocated_from_x_coordinate" : "1183009.00227906",
        "relocated_from_location" : {
          "latitude" : "41.77738368545025",
          "human_address" : "{\"address\":\"\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}",
          "needs_recoding" : false,
          "longitude" : "-87.60463485434077"
        },
        "state" : "Illinois",
        "make" : "Chevrolet",
        "relocated_date" : "2017-05-17T07:31:00"
      },
      {
        "relocated_to_address_number" : "919",
        "relocated_from_longitude" : "-87.649630812",
        "color" : "Green",
        "relocated_from_address_number" : "3832.0",
        "relocated_from_street_direction" : "N",
        "plate" : "A638665",
        "relocated_from_y_coordinate" : "1925730.7168881",
        "relocated_from_street_name" : "BROADWAY",
        "relocated_from_latitude" : "41.951698779",
        "service_request_number" : "17-03145720",
        "relocated_to_direction" : "W",
        "relocated_to_street_name" : "SHERIDAN",
        "relocated_reason" : "Other",
        "relocated_from_x_coordinate" : "1170230.00907555",
        "relocated_from_location" : {
          "latitude" : "41.95169877890033",
          "human_address" : "{\"address\":\"\",\"city\":\"\",\"state\":\"\",\"zip\":\"\"}",
          "needs_recoding" : false,
          "longitude" : "-87.64963081248489"
        },
        "state" : "Illinois",
        "make" : "Kia Motors Corp",
        "relocated_date" : "2017-05-17T08:02:00"
      }
    ];
  });

  this.get('/ygr5-vcbg.json', () => {
    return [ ];
  });
}
