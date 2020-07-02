const roundToOneDecimalPlace = (num) => Math.round(num * 10) / 10

export const KtoC = (tempInKelvins) => roundToOneDecimalPlace(tempInKelvins - 273.15)
export const KtoF = (tempInKelvins) => roundToOneDecimalPlace((tempInKelvins - 273.15) * (9/5) + 32)

export const CtoK = (tempInKelvins) => roundToOneDecimalPlace(tempInKelvins + 273.15)