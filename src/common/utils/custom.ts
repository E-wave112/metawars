// all the custom methods and function this api will use
class CustomClass {

    public customSort = (arr: any[], sortBy: number | string): any[] => {
        return arr.sort((a, b) => {
            if (a[sortBy] < b[sortBy]) {
                return -1;
            }
            if (a[sortBy] > b[sortBy]) {
                return 1;
            }
            return 0;
        })
    }

    public ConvertCentimetersToFeetInches = (cmdata: number): string => {
        let feet = Math.floor(cmdata / 30.48)
        let inch = (cmdata % 30.48) / 2.54
        //return it as a formatted string
        return `${feet.toString()} ft ${inch.toFixed(2)} inches`
    }

    public getSumOfHeights = (arr: any[]): any[] => {
        let cleanArr = arr.filter((item) => Boolean(Number(item.height)) === true)
        let sumHeights = cleanArr.map((item) => {
            return item.height
        }).reduce((a, b) => {
            return Number(a) + Number(b)
        })
        //convert to feet and inches
        const convertedUnits = [`${sumHeights} centimeters`, this.ConvertCentimetersToFeetInches(sumHeights)]
        return convertedUnits
    }

    public customFilter = (arr: any[], value: any) => {
        const filteredArr = arr.filter((e) => e.gender === value)
        return filteredArr
    }

}

export default new CustomClass()