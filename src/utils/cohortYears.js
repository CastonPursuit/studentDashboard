export function extractCohortPairs(data) {
    const cohortEntries = [];

    data.forEach(item => {
        const { cohortCode } = item.cohort;
        const season = cohortCode.match(/[A-Za-z]+/)[0];
        const year = parseInt(cohortCode.match(/\d+/)[0]);

        const formattedSeason = season.charAt(0).toUpperCase() + season.slice(1).toLowerCase();
        const seasonYearCombination = `${formattedSeason} ${year}`;

        if (!cohortEntries.includes(seasonYearCombination)) {
            cohortEntries.push(seasonYearCombination);
        }
    });

    return cohortEntries;
}


export function sortCohortPairs(cohortEntries) {

    const seasonOrder = ['Fall', 'Winter', 'Spring', 'Summer'];

    return cohortEntries.sort((a, b) => {
        const [seasonA, yearA] = a.split(' ');
        const [seasonB, yearB] = b.split(' ');

        const yearComparison = yearA - yearB;
        if (yearComparison !== 0) return yearComparison;

        return seasonOrder.indexOf(seasonA) - seasonOrder.indexOf(seasonB);
    });
}


export function extractAndSortYearSeason(data) {
    const seasonYearObj = extractCohortPairs(data);
    return sortCohortPairs(seasonYearObj);
} 