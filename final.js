//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    if (typeof currentPrice !== "number" || typeof discount !== "number") {
        return "Invalid";
    }
    if (discount < 0 || discount > 100) {
        return "Invalid";
    }

    const discountAmount = (currentPrice * discount) / 100;
    const finalPrice = currentPrice - discountAmount;
    return finalPrice.toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    if (typeof otp !== "string") {
        return "Invalid";
    }
    if (otp.length !== 8) {
        return false;
    }
    if (!otp.startsWith("ph-")) {
        return false;
    }
    return true;
}



//Problem-03: BCS Final Score Calculator
function finalScore(omr) {
    if (typeof omr !== "object") {
        return "Invalid";
    }
    const { right, wrong, skip } = omr;
    if (typeof right !== "number" || typeof wrong !== "number" || typeof skip !== "number") {
        return "Invalid";
    }

    if (right + wrong + skip !== 100) {
        return "Invalid";
    }
    let score = (right * 1) - (wrong * 0.5);
    return Math.round(score);
}


//Problem-04: Upcoming Gono Vote
function gonoVote(array) {
    if (!Array.isArray(array)) {
        return "Invalid";
    }

    let haCount = 0;
    let naCount = 0;

    for (let vote of array) {
        if (vote === "ha") {
            haCount++;
        }
        else if (vote === "na") {
            naCount++;
        }
    }
    if (haCount > naCount) {
        return true;
    }
    else if (haCount === naCount) {
        return "equal";
    }
    else {
        return false;
    }
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    if (str.trim().length === 0) {
        return "Invalid";
    }
    const words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    const token = str.split(" ").join("").length;
    return {
        longwords: longest,
        token: token
    };
}


