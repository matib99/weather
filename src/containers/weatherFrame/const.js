import { fromJS } from 'immutable'

export const SELECT_DAY = 'weatherFrame/SELECT_DAY';
export const SET_WEATHER = 'weatherFrame/SET_WEATHER';
export const SELECT_HOUR = 'weatherFrame/SELECT_HOUR';

export const NICE = "NICE WEATHER";
export const PASSABLE = "PASSABLE WEATHER";
export const NOT_NICE = "NOT NICE WEATHER";

export const przykladowaPogoda = {
    "lat": 33.44,
    "lon": -94.04,
    "timezone": "America/Chicago",
    "timezone_offset": -18000,
    "hourly": [
        {
            "dt": 1591783200,
            "temp": 291.79,
            "feels_like": 287.88,
            "pressure": 1012,
            "humidity": 48,
            "dew_point": 280.57,
            "clouds": 1,
            "wind_speed": 4.72,
            "wind_deg": 283,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591786800,
            "temp": 290.63,
            "feels_like": 286.61,
            "pressure": 1012,
            "humidity": 50,
            "dew_point": 280.11,
            "clouds": 1,
            "wind_speed": 4.72,
            "wind_deg": 276,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591790400,
            "temp": 289.5,
            "feels_like": 285.65,
            "pressure": 1014,
            "humidity": 59,
            "dew_point": 281.48,
            "clouds": 0,
            "wind_speed": 4.94,
            "wind_deg": 272,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591794000,
            "temp": 290.36,
            "feels_like": 286.5,
            "pressure": 1015,
            "humidity": 63,
            "dew_point": 283.26,
            "clouds": 0,
            "wind_speed": 5.62,
            "wind_deg": 280,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591797600,
            "temp": 292.43,
            "feels_like": 288.39,
            "pressure": 1016,
            "humidity": 60,
            "dew_point": 284.48,
            "clouds": 0,
            "wind_speed": 6.36,
            "wind_deg": 292,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591801200,
            "temp": 293.98,
            "feels_like": 289.66,
            "pressure": 1015,
            "humidity": 56,
            "dew_point": 285.13,
            "clouds": 0,
            "wind_speed": 6.94,
            "wind_deg": 292,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591804800,
            "temp": 295.23,
            "feels_like": 291.24,
            "pressure": 1015,
            "humidity": 55,
            "dew_point": 285.96,
            "clouds": 0,
            "wind_speed": 6.86,
            "wind_deg": 292,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591808400,
            "temp": 296.66,
            "feels_like": 293.13,
            "pressure": 1016,
            "humidity": 54,
            "dew_point": 286.94,
            "clouds": 0,
            "wind_speed": 6.69,
            "wind_deg": 295,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591812000,
            "temp": 297.71,
            "feels_like": 294.6,
            "pressure": 1016,
            "humidity": 53,
            "dew_point": 287.52,
            "clouds": 0,
            "wind_speed": 6.41,
            "wind_deg": 290,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591815600,
            "temp": 298.56,
            "feels_like": 295.53,
            "pressure": 1016,
            "humidity": 50,
            "dew_point": 287.67,
            "clouds": 0,
            "wind_speed": 6.24,
            "wind_deg": 289,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591819200,
            "temp": 299.12,
            "feels_like": 296.29,
            "pressure": 1016,
            "humidity": 50,
            "dew_point": 288.01,
            "clouds": 0,
            "wind_speed": 6.22,
            "wind_deg": 292,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591822800,
            "temp": 299.43,
            "feels_like": 297.04,
            "pressure": 1016,
            "humidity": 51,
            "dew_point": 288.5,
            "clouds": 0,
            "wind_speed": 5.89,
            "wind_deg": 296,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591826400,
            "temp": 299.42,
            "feels_like": 298,
            "pressure": 1016,
            "humidity": 54,
            "dew_point": 289.52,
            "clouds": 0,
            "wind_speed": 4.98,
            "wind_deg": 301,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591830000,
            "temp": 299.06,
            "feels_like": 298.75,
            "pressure": 1016,
            "humidity": 59,
            "dew_point": 290.56,
            "clouds": 0,
            "wind_speed": 4,
            "wind_deg": 304,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591833600,
            "temp": 297.43,
            "feels_like": 297.36,
            "pressure": 1017,
            "humidity": 64,
            "dew_point": 290.21,
            "clouds": 0,
            "wind_speed": 3.52,
            "wind_deg": 305,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591837200,
            "temp": 294.85,
            "feels_like": 294.61,
            "pressure": 1018,
            "humidity": 69,
            "dew_point": 289.13,
            "clouds": 0,
            "wind_speed": 3.05,
            "wind_deg": 315,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591840800,
            "temp": 293.15,
            "feels_like": 292.49,
            "pressure": 1018,
            "humidity": 69,
            "dew_point": 287.45,
            "clouds": 0,
            "wind_speed": 2.82,
            "wind_deg": 344,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591844400,
            "temp": 292.28,
            "feels_like": 290.91,
            "pressure": 1019,
            "humidity": 68,
            "dew_point": 286.37,
            "clouds": 0,
            "wind_speed": 3.32,
            "wind_deg": 347,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591848000,
            "temp": 291.66,
            "feels_like": 290.07,
            "pressure": 1020,
            "humidity": 66,
            "dew_point": 285.28,
            "clouds": 0,
            "wind_speed": 3.17,
            "wind_deg": 344,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591851600,
            "temp": 290.84,
            "feels_like": 289.12,
            "pressure": 1021,
            "humidity": 66,
            "dew_point": 284.55,
            "clouds": 0,
            "wind_speed": 3.03,
            "wind_deg": 344,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591855200,
            "temp": 290.15,
            "feels_like": 288.42,
            "pressure": 1021,
            "humidity": 68,
            "dew_point": 284.4,
            "clouds": 0,
            "wind_speed": 2.96,
            "wind_deg": 352,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591858800,
            "temp": 289.69,
            "feels_like": 287.92,
            "pressure": 1022,
            "humidity": 70,
            "dew_point": 284.37,
            "clouds": 0,
            "wind_speed": 3.01,
            "wind_deg": 8,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591862400,
            "temp": 289.13,
            "feels_like": 287.78,
            "pressure": 1022,
            "humidity": 74,
            "dew_point": 284.52,
            "clouds": 0,
            "wind_speed": 2.53,
            "wind_deg": 18,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591866000,
            "temp": 288.75,
            "feels_like": 287.56,
            "pressure": 1022,
            "humidity": 76,
            "dew_point": 284.67,
            "clouds": 0,
            "wind_speed": 2.32,
            "wind_deg": 23,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591869600,
            "temp": 288.27,
            "feels_like": 287.19,
            "pressure": 1022,
            "humidity": 79,
            "dew_point": 284.71,
            "clouds": 0,
            "wind_speed": 2.22,
            "wind_deg": 32,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591873200,
            "temp": 287.88,
            "feels_like": 287.09,
            "pressure": 1022,
            "humidity": 82,
            "dew_point": 284.96,
            "clouds": 0,
            "wind_speed": 1.88,
            "wind_deg": 35,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591876800,
            "temp": 288.86,
            "feels_like": 288.7,
            "pressure": 1023,
            "humidity": 84,
            "dew_point": 286.2,
            "clouds": 0,
            "wind_speed": 1.56,
            "wind_deg": 34,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591880400,
            "temp": 291.59,
            "feels_like": 291.94,
            "pressure": 1024,
            "humidity": 77,
            "dew_point": 287.63,
            "clouds": 0,
            "wind_speed": 1.47,
            "wind_deg": 47,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591884000,
            "temp": 293.99,
            "feels_like": 294.52,
            "pressure": 1025,
            "humidity": 70,
            "dew_point": 288.47,
            "clouds": 0,
            "wind_speed": 1.63,
            "wind_deg": 53,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591887600,
            "temp": 295.93,
            "feels_like": 296.21,
            "pressure": 1025,
            "humidity": 62,
            "dew_point": 288.42,
            "clouds": 0,
            "wind_speed": 1.96,
            "wind_deg": 58,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591891200,
            "temp": 297.24,
            "feels_like": 297.06,
            "pressure": 1025,
            "humidity": 55,
            "dew_point": 287.7,
            "clouds": 0,
            "wind_speed": 2.3,
            "wind_deg": 56,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591894800,
            "temp": 298.43,
            "feels_like": 298.15,
            "pressure": 1025,
            "humidity": 49,
            "dew_point": 287.16,
            "clouds": 0,
            "wind_speed": 2.1,
            "wind_deg": 50,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591898400,
            "temp": 299.49,
            "feels_like": 299.24,
            "pressure": 1024,
            "humidity": 46,
            "dew_point": 287.22,
            "clouds": 0,
            "wind_speed": 2.05,
            "wind_deg": 33,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591902000,
            "temp": 300.36,
            "feels_like": 300.26,
            "pressure": 1024,
            "humidity": 45,
            "dew_point": 287.42,
            "clouds": 0,
            "wind_speed": 2.06,
            "wind_deg": 29,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591905600,
            "temp": 300.95,
            "feels_like": 300.83,
            "pressure": 1023,
            "humidity": 43,
            "dew_point": 287.55,
            "clouds": 0,
            "wind_speed": 2.01,
            "wind_deg": 27,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591909200,
            "temp": 301.34,
            "feels_like": 301.43,
            "pressure": 1023,
            "humidity": 44,
            "dew_point": 287.97,
            "clouds": 0,
            "wind_speed": 2.06,
            "wind_deg": 30,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591912800,
            "temp": 301.45,
            "feels_like": 301.9,
            "pressure": 1022,
            "humidity": 45,
            "dew_point": 288.43,
            "clouds": 0,
            "wind_speed": 1.77,
            "wind_deg": 22,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591916400,
            "temp": 301.54,
            "feels_like": 303.1,
            "pressure": 1022,
            "humidity": 53,
            "dew_point": 291.27,
            "clouds": 0,
            "wind_speed": 1.68,
            "wind_deg": 22,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591920000,
            "temp": 300.01,
            "feels_like": 301.82,
            "pressure": 1022,
            "humidity": 59,
            "dew_point": 291.59,
            "clouds": 0,
            "wind_speed": 1.5,
            "wind_deg": 39,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591923600,
            "temp": 296.61,
            "feels_like": 297.42,
            "pressure": 1023,
            "humidity": 65,
            "dew_point": 289.7,
            "clouds": 0,
            "wind_speed": 1.95,
            "wind_deg": 70,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ]
        },
        {
            "dt": 1591927200,
            "temp": 294.64,
            "feels_like": 294.3,
            "pressure": 1023,
            "humidity": 62,
            "dew_point": 287.17,
            "clouds": 0,
            "wind_speed": 2.24,
            "wind_deg": 81,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591930800,
            "temp": 293.58,
            "feels_like": 292.78,
            "pressure": 1023,
            "humidity": 60,
            "dew_point": 285.81,
            "clouds": 0,
            "wind_speed": 2.2,
            "wind_deg": 70,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591934400,
            "temp": 292.62,
            "feels_like": 291.75,
            "pressure": 1024,
            "humidity": 65,
            "dew_point": 286.06,
            "clouds": 0,
            "wind_speed": 2.45,
            "wind_deg": 80,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591938000,
            "temp": 291.8,
            "feels_like": 291.29,
            "pressure": 1024,
            "humidity": 70,
            "dew_point": 286.37,
            "clouds": 0,
            "wind_speed": 2.09,
            "wind_deg": 89,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591941600,
            "temp": 291.26,
            "feels_like": 290.76,
            "pressure": 1024,
            "humidity": 72,
            "dew_point": 286.23,
            "clouds": 0,
            "wind_speed": 2.04,
            "wind_deg": 97,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591945200,
            "temp": 290.78,
            "feels_like": 290.16,
            "pressure": 1024,
            "humidity": 73,
            "dew_point": 286.06,
            "clouds": 0,
            "wind_speed": 2.1,
            "wind_deg": 98,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591948800,
            "temp": 290.14,
            "feels_like": 289.89,
            "pressure": 1024,
            "humidity": 76,
            "dew_point": 285.98,
            "clouds": 0,
            "wind_speed": 1.56,
            "wind_deg": 90,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        },
        {
            "dt": 1591952400,
            "temp": 289.67,
            "feels_like": 289.57,
            "pressure": 1024,
            "humidity": 78,
            "dew_point": 285.88,
            "clouds": 0,
            "wind_speed": 1.33,
            "wind_deg": 78,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ]
        }
    ],
    "daily": [
        {
            "dt": 1591812000,
            "sunrise": 1591787159,
            "sunset": 1591838741,
            "temp": {
                "day": 297.33,
                "min": 290.15,
                "max": 299.37,
                "night": 290.15,
                "eve": 297.43,
                "morn": 290.37
            },
            "feels_like": {
                "day": 294.1,
                "night": 288.42,
                "eve": 297.36,
                "morn": 286.47
            },
            "pressure": 1016,
            "humidity": 53,
            "dew_point": 287.16,
            "wind_speed": 6.41,
            "wind_deg": 290,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "uvi": 11.14
        },
        {
            "dt": 1591898400,
            "sunrise": 1591873557,
            "sunset": 1591925166,
            "temp": {
                "day": 299.49,
                "min": 288.86,
                "max": 301.34,
                "night": 291.26,
                "eve": 300.01,
                "morn": 288.86
            },
            "feels_like": {
                "day": 299.24,
                "night": 290.76,
                "eve": 301.82,
                "morn": 288.7
            },
            "pressure": 1024,
            "humidity": 46,
            "dew_point": 287.22,
            "wind_speed": 2.05,
            "wind_deg": 33,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "uvi": 10.91
        },
        {
            "dt": 1591984800,
            "sunrise": 1591959957,
            "sunset": 1592011590,
            "temp": {
                "day": 301.4,
                "min": 289.87,
                "max": 303.3,
                "night": 293.57,
                "eve": 301.16,
                "morn": 289.87
            },
            "feels_like": {
                "day": 302.15,
                "night": 294.15,
                "eve": 303.9,
                "morn": 289.71
            },
            "pressure": 1024,
            "humidity": 48,
            "dew_point": 289.57,
            "wind_speed": 1.87,
            "wind_deg": 97,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "uvi": 10.5
        },
        {
            "dt": 1592071200,
            "sunrise": 1592046358,
            "sunset": 1592098013,
            "temp": {
                "day": 302.66,
                "min": 292.86,
                "max": 304.33,
                "night": 294.25,
                "eve": 301.96,
                "morn": 292.86
            },
            "feels_like": {
                "day": 304.62,
                "night": 294.64,
                "eve": 304.62,
                "morn": 294.41
            },
            "pressure": 1020,
            "humidity": 53,
            "dew_point": 292.31,
            "wind_speed": 1.76,
            "wind_deg": 75,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "uvi": 9.95
        },
        {
            "dt": 1592157600,
            "sunrise": 1592132760,
            "sunset": 1592184434,
            "temp": {
                "day": 302.43,
                "min": 291.83,
                "max": 303.95,
                "night": 293.45,
                "eve": 301.71,
                "morn": 291.83
            },
            "feels_like": {
                "day": 303.06,
                "night": 293.86,
                "eve": 303.8,
                "morn": 292.41
            },
            "pressure": 1020,
            "humidity": 49,
            "dew_point": 290.8,
            "wind_speed": 2.76,
            "wind_deg": 95,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 0,
            "uvi": 11.16
        },
        {
            "dt": 1592244000,
            "sunrise": 1592219164,
            "sunset": 1592270854,
            "temp": {
                "day": 302.94,
                "min": 292.17,
                "max": 303.64,
                "night": 293.9,
                "eve": 302.62,
                "morn": 292.17
            },
            "feels_like": {
                "day": 304.9,
                "night": 294.8,
                "eve": 306.3,
                "morn": 293.16
            },
            "pressure": 1020,
            "humidity": 53,
            "dew_point": 292.42,
            "wind_speed": 1.92,
            "wind_deg": 114,
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": 18,
            "uvi": 10.46
        },
        {
            "dt": 1592330400,
            "sunrise": 1592305569,
            "sunset": 1592357273,
            "temp": {
                "day": 302.77,
                "min": 292.46,
                "max": 303.34,
                "night": 293.44,
                "eve": 301.57,
                "morn": 292.46
            },
            "feels_like": {
                "day": 305.34,
                "night": 293.03,
                "eve": 304.59,
                "morn": 293.78
            },
            "pressure": 1018,
            "humidity": 56,
            "dew_point": 293.12,
            "wind_speed": 1.54,
            "wind_deg": 124,
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04d"
                }
            ],
            "clouds": 69,
            "uvi": 10.84
        },
        {
            "dt": 1592416800,
            "sunrise": 1592391976,
            "sunset": 1592443691,
            "temp": {
                "day": 304.6,
                "min": 291.73,
                "max": 304.6,
                "night": 302.09,
                "eve": 302.09,
                "morn": 291.73
            },
            "feels_like": {
                "day": 308.12,
                "night": 305.05,
                "eve": 305.05,
                "morn": 292.06
            },
            "pressure": 1016,
            "humidity": 52,
            "dew_point": 293.59,
            "wind_speed": 0.51,
            "wind_deg": 135,
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": 1,
            "uvi": 10.89
        }
    ]
}