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

function sortSeasonsAndYears(entries) {
    
    const seasonOrder = {
        'Winter': 1, 'Fall': 2, 'Summer': 3, 'Spring': 4
    };

    return entries.sort((a, b) => {
        const [seasonA, yearA] = a.split(' ');
        const [seasonB, yearB] = b.split(' ');

        const yearDiff = parseInt(yearB) - parseInt(yearA);
        if (yearDiff !== 0) {
            return yearDiff;
        }

        return seasonOrder[seasonA] - seasonOrder[seasonB];
    });
}




export function extractAndSortYearSeason(data) {
    const seasonYearObj = extractCohortPairs(data);
    return sortSeasonsAndYears(seasonYearObj);
   
} 