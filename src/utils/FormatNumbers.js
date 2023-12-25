export function formatYouTubeComments(number) {
    // Check if the input is a valid number
    console.log(number);
    if (isNaN(number)) {
        console.log("Invalid input. Please provide a valid number.");
    }

    // Convert the input to a numeric value
    const numericValue = parseFloat(number);

    // Check if the conversion is successful
    if (isNaN(numericValue)) {
        console.log("Invalid input. Please provide a valid number.");
    }

    // Format the numeric value into YouTube comment format
    if (numericValue < 1000) {
        return numericValue.toString();
    } else if (numericValue < 1000000) {
        return (numericValue / 1000).toFixed(1) + "K";
    } else if (numericValue < 1000000000) {
        return (numericValue / 1000000).toFixed(1) + "M";
    } else {
        return (numericValue / 1000000000).toFixed(1) + "B";
    }
}


