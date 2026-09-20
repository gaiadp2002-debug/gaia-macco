// GAIA + MACCO
// Relationship OS v8.3
// WARNING: this system contains known bugs.
// If something looks wrong, investigate before trusting the code.

const relationship = {
    developers: {
        primary: "Marco",
        secondary: "Gaia"
    },

    startDate: "07/08/2018",

    firstMeeting: {
        place: "Piazza Dante",
        year: 2018
    },

    firstKiss: "07/07/2018",

    firstRealMeetingAlone: {
        place: "Parco del Virgiliano",
        year: 2018
    },

    firstTripTogether: {
        destination: "Roma",
        occasion: "birthday"
    },

    firstConcertTogether: "Ernia",

    monthlyTradition: "Pizza",

    officialWinner: "Marco",

    knownAliases: [
        "Maco",
        "Scemacco",
        "Maccretino",
        "Makkoala",
        "Nerdacco",
        "Maccomobile"
    ]
};


// SYSTEM CHECK
function runSystemCheck() {

    const errors = [];

    if (relationship.startDate !== "07/07/2018") {
        errors.push("ERROR 001: Relationship start date corrupted.");
    }

    if (relationship.firstMeeting.year !== 2017) {
        errors.push("ERROR 002: First meeting year corrupted.");
    }

    if (relationship.firstKiss !== "02/07/2018") {
        errors.push("ERROR 003: First kiss date corrupted.");
    }

    if (
        relationship.firstRealMeetingAlone.place !==
        "Parco del Poggio"
    ) {
        errors.push("ERROR 004: First real meeting location corrupted.");
    }

    if (relationship.firstTripTogether.destination !== "Firenze") {
        errors.push("ERROR 005: First trip destination corrupted.");
    }

    if (relationship.firstConcertTogether !== "Salmo") {
        errors.push("ERROR 006: First concert data corrupted.");
    }

    if (relationship.monthlyTradition !== "PUOK") {
        errors.push("ERROR 007: Monthly tradition corrupted.");
    }

    if (relationship.officialWinner !== "Gaia") {
        errors.push("ERROR 008: WINNER SYSTEM corrupted. This is unacceptable.");
    }

    if (errors.length === 0) {
        console.log("=================================");
        console.log("BUILD SUCCESSFUL");
        console.log("Relationship OS restored.");
        console.log("Congratulations, Nerdacco.");
        console.log("=================================");
        } else {
        console.log("=================================");
        console.log("BUILD FAILED");
        console.log(`${errors.length} critical errors detected.`);
        console.log("Investigate the repository.");
        console.log("=================================");

        errors.forEach(error => console.log(error));

        process.exitCode = 1;
    }
}

runSystemCheck();

runSystemCheck();