// let text = `<div xmlns=\"http://www.w3.org/1999/xhtml\">Your appointment has been reserved for 2023-06-29 10:00:00. Reference ID is a06876d5-d1e1-4d83-a0e9-6715a6e4cdcc. Appt Block Id is 0. Appt Encounter Id is 31101.</div>'`;
// function extractIds(text) {
//     let ref = text.split("ID")[1].split("is")[1].split(".")[0];
//     let encounterId = text.split("ID")[1].split("is")[3].split(".")[0];

//     console.log(`ref:${ref}\n encounter:${encounterId}`);
// }

// extractIds(text);

user = {
    username: "",
    id: "",
    car: "",
};

space = {
    id: "",
    isAvailable: false,
};

payment = {
    id: "",
    paymentRef: "",
    user: user.id,
};

ticket = {
    user: user.id,
    spaceCollected: space.id,
    payment: payment.id,
};
